from sqlalchemy import Column, Integer, Float, String, DateTime, Enum, JSON
from api.database import Base
from datetime import datetime

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    candidate = Column(String, index=True)
    probability = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)

class DataSource(Base):
    __tablename__ = "data_sources"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    type = Column(Enum("API", "Web Scraping", "RSS", "AI Processing", name="source_type"))
    url = Column(String)
    status = Column(Enum("Active", "Inactive", name="source_status"))
    last_updated = Column(DateTime, default=datetime.utcnow)

class AgentDeployment(Base):
    __tablename__ = "agent_deployments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    location = Column(JSON)
    demographic = Column(JSON)
    socioeconomic = Column(JSON)
    cultural = Column(JSON)
    political = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class LibraryItem(Base):
    __tablename__ = "library_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    type = Column(String, index=True)
    description = Column(String)
    data = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Setting(Base):
    __tablename__ = "settings"

    id = Column(Integer, primary_key=True, index=True)
    key = Column(String, unique=True, index=True)
    value = Column(JSON)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Tactic(Base):
    __tablename__ = "tactics"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    target_demographic = Column(String)
    implementation_method = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
