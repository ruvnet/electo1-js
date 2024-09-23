from sqlalchemy import Column, Integer, Float, String, DateTime, Enum
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
