"""
Contact controller - API endpoints for contact message operations.
"""
from typing import List
from fastapi import APIRouter, HTTPException, status

from app.models.contact import ContactCreate, ContactResponse
from app.services.contact_service import (
    create_message,
    get_all_messages,
    get_message_by_id,
    delete_message,
)


router = APIRouter(prefix="/api/contact", tags=["contacts"])


@router.post(
    "/",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create a new contact message",
    description="Submit a new contact message from the contact form."
)
async def create_contact_message(message: ContactCreate) -> ContactResponse:
    """
    Create a new contact message.
    
    Args:
        message: The contact message data
        
    Returns:
        The created contact message with ID and timestamp
        
    Raises:
        HTTPException: If there's an error creating the message
    """
    try:
        return await create_message(message)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create contact message: {str(e)}"
        )


@router.get(
    "/",
    response_model=List[ContactResponse],
    summary="Get all contact messages",
    description="Retrieve all contact messages from the database."
)
async def list_contact_messages(skip: int = 0, limit: int = 100) -> List[ContactResponse]:
    """
    Get all contact messages.
    
    Args:
        skip: Number of records to skip for pagination
        limit: Maximum number of records to return
        
    Returns:
        List of contact messages
    """
    return await get_all_messages(skip=skip, limit=limit)


@router.get(
    "/{message_id}",
    response_model=ContactResponse,
    summary="Get a contact message by ID",
    description="Retrieve a specific contact message by its ID."
)
async def get_contact_message(message_id: str) -> ContactResponse:
    """
    Get a specific contact message by ID.
    
    Args:
        message_id: The MongoDB ObjectId as string
        
    Returns:
        The contact message if found
        
    Raises:
        HTTPException: If the message is not found
    """
    message = await get_message_by_id(message_id)
    if not message:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Contact message with ID {message_id} not found"
        )
    return message


@router.delete(
    "/{message_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete a contact message",
    description="Delete a contact message by its ID."
)
async def delete_contact_message(message_id: str) -> None:
    """
    Delete a contact message by ID.
    
    Args:
        message_id: The MongoDB ObjectId as string
        
    Raises:
        HTTPException: If the message is not found
    """
    deleted = await delete_message(message_id)
    if not deleted:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Contact message with ID {message_id} not found"
        )
