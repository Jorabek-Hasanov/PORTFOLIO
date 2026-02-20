"""
ContactMessage model using Beanie ODM.
Stores user contact form submissions in MongoDB.
"""
from datetime import datetime, timezone

from pydantic import BaseModel, EmailStr, Field, ConfigDict
from beanie import Document


class ContactMessage(Document):
    """
    ContactMessage document model for MongoDB.
    
    Attributes:
        fullname: User's full name
        email: User's email address
        subject: Subject of the message
        message: The message content
        created_at: Timestamp when the message was created
    """
    
    fullname: str
    email: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "fullname": "John Doe",
                "email": "john.doe@example.com",
                "subject": "Project Inquiry",
                "message": "I would like to discuss a potential project collaboration.",
                "created_at": "2024-01-15T10:30:00Z"
            }
        }
    )
    
    class Settings:
        name = "contact_messages"
        indexes = [
            "email",
            "created_at",
        ]


class ContactCreate(BaseModel):
    """
    Pydantic model for creating a new contact message.
    Used for request validation.
    """
    
    fullname: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)
    
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "fullname": "John Doe",
                "email": "john.doe@example.com",
                "subject": "Project Inquiry",
                "message": "I would like to discuss a potential project collaboration."
            }
        }
    )


class ContactResponse(BaseModel):
    """
    Pydantic model for contact message response.
    Used for API responses.
    """
    
    id: str
    fullname: str
    email: str
    subject: str
    message: str
    created_at: datetime
    
    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={
            "example": {
                "id": "65a1b2c3d4e5f6g7h8i9j0k1",
                "fullname": "John Doe",
                "email": "john.doe@example.com",
                "subject": "Project Inquiry",
                "message": "I would like to discuss a potential project collaboration.",
                "created_at": "2024-01-15T10:30:00Z"
            }
        }
    )
