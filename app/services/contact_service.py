"""
Contact service layer.
Handles business logic for contact message operations.
"""
import logging
import re
import smtplib
from datetime import datetime, timezone
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import List, Optional

from app.models.contact import ContactMessage, ContactCreate, ContactResponse
from app.config import get_settings

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def _is_valid_objectid(value: str) -> bool:
    """
    Validate if a string is a valid MongoDB ObjectId format.
    MongoDB ObjectId is a 24-character hexadecimal string.
    
    Args:
        value: The string to validate
        
    Returns:
        True if valid ObjectId format, False otherwise
    """
    return bool(re.match(r'^[a-fA-F0-9]{24}$', value))


async def send_email_notification(fullname: str, email: str, subject: str, message: str) -> bool:
    """
    Send email notification via Gmail SMTP when a new contact message is received.
    
    Args:
        fullname: Sender's full name
        email: Sender's email address
        subject: Subject of the message
        message: The message content
        
    Returns:
        bool: True if email was sent successfully, False otherwise
    """
    settings = get_settings()
    
    # Debug: Print email configuration (mask password)
    print("=" * 60)
    print("📧 EMAIL DEBUG: Attempting to send email notification")
    print(f"📧 EMAIL_ADDRESS: {settings.email_address}")
    print(f"📧 RECEIVER_EMAIL: {settings.receiver_email}")
    print(f"📧 PASSWORD_LENGTH: {len(settings.email_password) if settings.email_password else 0} characters")
    print(f"📧 PASSWORD_PREVIEW: {settings.email_password[:4] + '****' if settings.email_password and len(settings.email_password) >= 4 else 'N/A'}")
    print("=" * 60)
    
    # Check if email configuration is available
    if not settings.email_address or not settings.email_password or not settings.receiver_email:
        logger.warning("⚠️ Email configuration not found. Skipping email notification.")
        print("❌ EMAIL ERROR: Missing email configuration!")
        return False
    
    # Check for placeholder password
    if settings.email_password == "YOUR_16_CHAR_APP_PASSWORD_HERE":
        logger.error("❌ EMAIL ERROR: Placeholder password detected! Please update .env with real Gmail App Password.")
        print("❌ EMAIL ERROR: You must replace YOUR_16_CHAR_APP_PASSWORD_HERE with a real Gmail App Password!")
        print("💡 Go to: https://myaccount.google.com/apppasswords")
        return False
    
    try:
        # Create email message
        msg = MIMEMultipart()
        msg['From'] = settings.email_address  # Use authenticated email as sender
        msg['To'] = settings.receiver_email
        msg['Subject'] = f"New Contact Form Submission: {subject}"
        
        # Add Reply-To header so you can reply to the original sender
        msg['Reply-To'] = email
        
        # Create HTML and plain text body
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #FF823C; border-bottom: 2px solid #FF823C; padding-bottom: 10px;">📬 New Contact Form Submission</h2>
                
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">👤 Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">{fullname}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">📧 Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;"><a href="mailto:{email}" style="color: #FF823C;">{email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">📝 Subject:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">{subject}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; color: #333; vertical-align: top;">💬 Message:</td>
                        <td style="padding: 10px; color: #555; line-height: 1.6;">{message.replace(chr(10), '<br>')}</td>
                    </tr>
                </table>
                
                <p style="margin-top: 20px; color: #888; font-size: 12px;">
                    This message was sent from your portfolio contact form.
                </p>
            </div>
        </body>
        </html>
        """
        
        plain_body = f"""
New Contact Form Submission

Name: {fullname}
Email: {email}
Subject: {subject}

Message:
{message}

---
This message was sent from your portfolio contact form.
"""
        
        # Attach both HTML and plain text versions
        msg.attach(MIMEText(plain_body, 'plain'))
        msg.attach(MIMEText(html_body, 'html'))
        
        print("📧 Connecting to Gmail SMTP server on port 587...")
        
        # Connect to Gmail SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587, timeout=30)
        server.set_debuglevel(1)  # Enable SMTP protocol debug output
        print("📧 Starting TLS connection...")
        server.starttls()  # Upgrade connection to secure TLS mode
        print("📧 TLS connection established")
        
        # Login to Gmail
        print(f"📧 Logging in as {settings.email_address}...")
        server.login(settings.email_address, settings.email_password)
        print("📧 Login successful!")
        
        # Send email
        print(f"📧 Sending email to {settings.receiver_email}...")
        server.send_message(msg)
        server.quit()
        
        print("=" * 60)
        print(f"✅ EMAIL SUCCESS: Email notification sent to {settings.receiver_email}")
        print("=" * 60)
        logger.info(f"✅ Email notification sent to {settings.receiver_email}")
        return True
        
    except smtplib.SMTPAuthenticationError as e:
        error_msg = f"SMTP Authentication failed: {str(e)}"
        logger.error(f"❌ {error_msg}")
        logger.error("💡 HINT: Make sure EMAIL_PASSWORD is a Gmail App Password (16-char code)")
        logger.error("💡 HINT: Generate App Password at: https://myaccount.google.com/apppasswords")
        logger.error("💡 HINT: Remove spaces from the 16-character code in .env file")
        raise Exception(error_msg)
    except smtplib.SMTPConnectError as e:
        error_msg = f"SMTP Connection failed: {str(e)}"
        logger.error(f"❌ {error_msg}")
        logger.error("💡 HINT: Check your internet connection and firewall settings")
        raise Exception(error_msg)
    except smtplib.SMTPException as e:
        error_msg = f"SMTP Error occurred: {str(e)}"
        logger.error(f"❌ {error_msg}")
        raise Exception(error_msg)
    except Exception as e:
        error_msg = f"Unexpected error sending email: {str(e)}"
        logger.error(f"❌ {error_msg}")
        logger.error(f"💡 HINT: Error type: {type(e).__name__}")
        raise Exception(error_msg)


async def create_message(message_data: ContactCreate) -> ContactResponse:
    """
    Create a new contact message and store it in MongoDB.
    Also sends email notification to the configured receiver.
    
    Args:
        message_data: The contact message data from the request
        
    Returns:
        ContactResponse: The created contact message with ID and timestamp
    """
    # Log incoming request
    logger.info(f"📥 Incoming contact request from: {message_data.email} | Subject: {message_data.subject}")
    
    # Create ContactMessage instance
    contact_message = ContactMessage(
        fullname=message_data.fullname,
        email=message_data.email,
        subject=message_data.subject,
        message=message_data.message,
        created_at=datetime.now(timezone.utc)
    )
    
    # Save to MongoDB using Beanie
    await contact_message.insert()  # type: ignore[union-attr]
    
    # Get the generated ID - Beanie documents have id attribute after insert
    message_id: str = str(contact_message.id)  # type: ignore[union-attr]
    
    # Log stored message ID
    logger.info(f"✅ Message stored in database | ID: {message_id}")
    
    settings = get_settings()
    
    # Send email notification
    email_sent = await send_email_notification(
        fullname=message_data.fullname,
        email=message_data.email,
        subject=message_data.subject,
        message=message_data.message
    )
    
    if not email_sent:
        # Raise exception so controller returns 500 to frontend instead of 201
        raise Exception(f"Failed to send email notification to {settings.receiver_email}")
    
    # Return response model
    return ContactResponse(
        id=message_id,
        fullname=contact_message.fullname,  # type: ignore[union-attr]
        email=contact_message.email,  # type: ignore[union-attr]
        subject=contact_message.subject,  # type: ignore[union-attr]
        message=contact_message.message,  # type: ignore[union-attr]
        created_at=contact_message.created_at  # type: ignore[union-attr]
    )


async def get_all_messages(skip: int = 0, limit: int = 100) -> List[ContactResponse]:
    """
    Retrieve all contact messages from MongoDB.
    
    Args:
        skip: Number of records to skip for pagination
        limit: Maximum number of records to return
        
    Returns:
        List of ContactResponse objects
    """
    # Use Beanie's find_all with proper type handling
    query = ContactMessage.find_all()  # type: ignore[union-attr]
    messages: List[ContactMessage] = await query.skip(skip).limit(limit).to_list()  # type: ignore[union-attr]
    
    # Build response list with explicit type handling
    results: List[ContactResponse] = []
    for msg in messages:  # type: ignore[union-attr]
        results.append(ContactResponse(
            id=str(msg.id),  # type: ignore[union-attr]
            fullname=msg.fullname,  # type: ignore[union-attr]
            email=msg.email,  # type: ignore[union-attr]
            subject=msg.subject,  # type: ignore[union-attr]
            message=msg.message,  # type: ignore[union-attr]
            created_at=msg.created_at  # type: ignore[union-attr]
        ))
    return results


async def get_message_by_id(message_id: str) -> Optional[ContactResponse]:
    """
    Retrieve a specific contact message by ID.
    
    Args:
        message_id: The MongoDB ObjectId as string
        
    Returns:
        ContactResponse if found, None otherwise
    """
    # Validate ObjectId format first (24 hex characters)
    if not _is_valid_objectid(message_id):
        logger.warning(f"Invalid ObjectId format: {message_id}")
        return None
    
    try:
        # Try to use pymongo's ObjectId if available
        from pymongo import ObjectId as PyMongoObjectId  # type: ignore[import]
        oid = PyMongoObjectId(message_id)  # type: ignore[valid-type]
        message: Optional[ContactMessage] = await ContactMessage.get(oid)  # type: ignore[union-attr]
    except ImportError:
        # Fallback: Let Beanie handle the conversion directly
        # Beanie's Document.get() accepts string IDs in recent versions
        message = await ContactMessage.get(message_id)  # type: ignore[union-attr]
    except Exception as e:
        logger.error(f"Error retrieving message: {e}")
        return None
    
    if message:
        return ContactResponse(
            id=str(message.id),  # type: ignore[union-attr]
            fullname=message.fullname,  # type: ignore[union-attr]
            email=message.email,  # type: ignore[union-attr]
            subject=message.subject,  # type: ignore[union-attr]
            message=message.message,  # type: ignore[union-attr]
            created_at=message.created_at  # type: ignore[union-attr]
        )
    
    return None


async def delete_message(message_id: str) -> bool:
    """
    Delete a contact message by ID.
    
    Args:
        message_id: The MongoDB ObjectId as string
        
    Returns:
        True if deleted, False if not found
    """
    # Validate ObjectId format first (24 hex characters)
    if not _is_valid_objectid(message_id):
        logger.warning(f"Invalid ObjectId format: {message_id}")
        return False
    
    try:
        # Try to use pymongo's ObjectId if available
        from pymongo import ObjectId as PyMongoObjectId  # type: ignore[import]
        oid = PyMongoObjectId(message_id)  # type: ignore[valid-type]
        message: Optional[ContactMessage] = await ContactMessage.get(oid)  # type: ignore[union-attr]
    except ImportError:
        # Fallback: Let Beanie handle the conversion directly
        message = await ContactMessage.get(message_id)  # type: ignore[union-attr]
    except Exception as e:
        logger.error(f"Error retrieving message for deletion: {e}")
        return False
    
    if message:
        await message.delete()  # type: ignore[union-attr]
        logger.info(f"✅ Message deleted: {message_id}")
        return True
    
    return False
