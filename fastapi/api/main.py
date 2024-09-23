from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from api.routers import predictions, data_sources, agent_deployment, library, settings, tactics
from api.database import engine, Base

app = FastAPI(title="Electro-1")

# Create database tables
Base.metadata.create_all(bind=engine)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(predictions.router, prefix="/api/predictions", tags=["predictions"])
app.include_router(data_sources.router, prefix="/api/data_sources", tags=["data_sources"])
app.include_router(agent_deployment.router, prefix="/api/agent_deployment", tags=["agent_deployment"])
app.include_router(library.router, prefix="/api/library", tags=["library"])
app.include_router(settings.router, prefix="/api/settings", tags=["settings"])
app.include_router(tactics.router, prefix="/api/tactics", tags=["tactics"])

@app.get("/", include_in_schema=False)
async def root():
    return RedirectResponse(url="/docs")
