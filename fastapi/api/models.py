from sqlalchemy import Column, Integer, Float, String, DateTime
from api.database import Base
from datetime import datetime

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    candidate = Column(String, index=True)
    probability = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)
