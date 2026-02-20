"""
FastAPI application entry point.
Handles application lifecycle and includes routers.
"""
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db import init_db, close_db
from app.controllers import contact_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Application lifespan context manager.
    Handles startup and shutdown events.
    """
    # Startup: Initialize database connection
    await init_db()
    print("✅ Database connection established")
    
    yield
    
    # Shutdown: Close database connection
    await close_db()
    print("🔌 Database connection closed")


# Create FastAPI application
app = FastAPI(
    title="Portfolio API",
    description="Backend API for portfolio website with contact form functionality",
    version="1.0.0",
    lifespan=lifespan,
)

# Configure CORS middleware for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(contact_router)


@app.get("/", tags=["root"])
async def root():
    """
    Root endpoint - API health check.
    """
    return {
        "message": "Portfolio API is running",
        "docs": "/docs",
        "redoc": "/redoc"
    }


@app.get("/health", tags=["health"])
async def health_check():
    """
    Health check endpoint.
    """
    return {"status": "healthy"}
