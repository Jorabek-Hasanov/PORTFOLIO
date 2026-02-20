"""
MongoDB database connection using Motor (async MongoDB driver).
Handles connection lifecycle with Beanie ODM initialization.
"""
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie

from app.config import get_settings
from app.models.contact import ContactMessage


# Global client reference
client: AsyncIOMotorClient = None


async def init_db() -> None:
    """
    Initialize MongoDB connection and Beanie ODM.
    Should be called on application startup.
    """
    global client
    
    settings = get_settings()
    
    # Create Motor client
    client = AsyncIOMotorClient(settings.mongodb_url)
    
    # Get database
    database = client[settings.database_name]
    
    # Initialize Beanie with the ContactMessage model
    await init_beanie(
        database=database,
        document_models=[
            ContactMessage,
        ]
    )


async def close_db() -> None:
    """
    Close MongoDB connection.
    Should be called on application shutdown.
    """
    global client
    
    if client:
        client.close()
        client = None
