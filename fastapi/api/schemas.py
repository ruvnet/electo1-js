from pydantic import BaseModel
from datetime import datetime

class PredictionBase(BaseModel):
    candidate: str
    probability: float

class PredictionCreate(PredictionBase):
    pass

class Prediction(PredictionBase):
    id: int
    timestamp: datetime

    class Config:
        orm_mode = True
