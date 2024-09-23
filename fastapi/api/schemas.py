from pydantic import BaseModel
from datetime import datetime
from typing import Optional

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

class DataSourceBase(BaseModel):
    name: str
    type: str
    url: str
    status: str

class DataSourceCreate(DataSourceBase):
    pass

class DataSourceUpdate(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    url: Optional[str] = None
    status: Optional[str] = None

class DataSource(DataSourceBase):
    id: int
    last_updated: datetime

    class Config:
        orm_mode = True
