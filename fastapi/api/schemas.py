from pydantic import BaseModel
from datetime import datetime
from typing import Optional, Dict, Any

class PredictionBase(BaseModel):
    candidate: str
    probability: float

class PredictionCreate(PredictionBase):
    pass

class Prediction(PredictionBase):
    id: int
    timestamp: datetime

    class Config:
        from_attributes = True

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
        from_attributes = True

class AgentDeploymentBase(BaseModel):
    name: str
    location: Dict[str, Any]
    demographic: Dict[str, Any]
    socioeconomic: Dict[str, Any]
    cultural: Dict[str, Any]
    political: Dict[str, Any]

class AgentDeploymentCreate(AgentDeploymentBase):
    pass

class AgentDeploymentUpdate(BaseModel):
    name: Optional[str] = None
    location: Optional[Dict[str, Any]] = None
    demographic: Optional[Dict[str, Any]] = None
    socioeconomic: Optional[Dict[str, Any]] = None
    cultural: Optional[Dict[str, Any]] = None
    political: Optional[Dict[str, Any]] = None

class AgentDeployment(AgentDeploymentBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class LibraryItemBase(BaseModel):
    name: str
    type: str
    description: str
    data: Dict[str, Any]

class LibraryItemCreate(LibraryItemBase):
    pass

class LibraryItemUpdate(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    description: Optional[str] = None
    data: Optional[Dict[str, Any]] = None

class LibraryItem(LibraryItemBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class SettingBase(BaseModel):
    key: str
    value: Any

class SettingCreate(SettingBase):
    pass

class SettingUpdate(BaseModel):
    value: Any

class Setting(SettingBase):
    id: int
    updated_at: datetime

    class Config:
        from_attributes = True

class TacticBase(BaseModel):
    name: str
    description: str
    target_demographic: str
    implementation_method: str

class TacticCreate(TacticBase):
    pass

class TacticUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    target_demographic: Optional[str] = None
    implementation_method: Optional[str] = None

class Tactic(TacticBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
