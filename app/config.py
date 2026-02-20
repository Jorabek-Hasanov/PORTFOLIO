"""
Application configuration using pydantic-settings.
Loads environment variables from .env file.
"""
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""
    
    mongodb_url: str = "mongodb://localhost:27017"
    database_name: str = "ai_vibe_db"
    
    # Email configuration
    email_address: str = ""
    email_password: str = ""
    receiver_email: str = ""
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8"
    )


@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance."""
    return Settings()
