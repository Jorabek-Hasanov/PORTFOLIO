"""Services package."""
from app.services.contact_service import (
    create_message,
    get_all_messages,
    get_message_by_id,
    delete_message,
)

__all__ = [
    "create_message",
    "get_all_messages",
    "get_message_by_id",
    "delete_message",
]
