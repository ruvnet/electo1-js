from sqlalchemy.orm import Session
from api import models, schemas
from datetime import datetime

def create_agent_deployment(db: Session, agent_deployment: schemas.AgentDeploymentCreate):
    db_agent_deployment = models.AgentDeployment(**agent_deployment.dict())
    db.add(db_agent_deployment)
    db.commit()
    db.refresh(db_agent_deployment)
    return db_agent_deployment

def get_agent_deployment(db: Session, agent_deployment_id: int):
    return db.query(models.AgentDeployment).filter(models.AgentDeployment.id == agent_deployment_id).first()

def get_agent_deployments(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.AgentDeployment).offset(skip).limit(limit).all()

def update_agent_deployment(db: Session, agent_deployment_id: int, agent_deployment: schemas.AgentDeploymentUpdate):
    db_agent_deployment = db.query(models.AgentDeployment).filter(models.AgentDeployment.id == agent_deployment_id).first()
    if db_agent_deployment:
        update_data = agent_deployment.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_agent_deployment, key, value)
        db_agent_deployment.updated_at = datetime.utcnow()
        db.commit()
        db.refresh(db_agent_deployment)
    return db_agent_deployment

def delete_agent_deployment(db: Session, agent_deployment_id: int):
    db_agent_deployment = db.query(models.AgentDeployment).filter(models.AgentDeployment.id == agent_deployment_id).first()
    if db_agent_deployment:
        db.delete(db_agent_deployment)
        db.commit()
    return db_agent_deployment

def create_library_item(db: Session, library_item: schemas.LibraryItemCreate):
    db_library_item = models.LibraryItem(**library_item.dict())
    db.add(db_library_item)
    db.commit()
    db.refresh(db_library_item)
    return db_library_item

def get_library_item(db: Session, library_item_id: int):
    return db.query(models.LibraryItem).filter(models.LibraryItem.id == library_item_id).first()

def get_library_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.LibraryItem).offset(skip).limit(limit).all()

def update_library_item(db: Session, library_item_id: int, library_item: schemas.LibraryItemUpdate):
    db_library_item = db.query(models.LibraryItem).filter(models.LibraryItem.id == library_item_id).first()
    if db_library_item:
        update_data = library_item.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_library_item, key, value)
        db_library_item.updated_at = datetime.utcnow()
        db.commit()
        db.refresh(db_library_item)
    return db_library_item

def delete_library_item(db: Session, library_item_id: int):
    db_library_item = db.query(models.LibraryItem).filter(models.LibraryItem.id == library_item_id).first()
    if db_library_item:
        db.delete(db_library_item)
        db.commit()
    return db_library_item

def create_setting(db: Session, setting: schemas.SettingCreate):
    db_setting = models.Setting(**setting.dict())
    db.add(db_setting)
    db.commit()
    db.refresh(db_setting)
    return db_setting

def get_setting(db: Session, key: str):
    return db.query(models.Setting).filter(models.Setting.key == key).first()

def get_settings(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Setting).offset(skip).limit(limit).all()

def update_setting(db: Session, key: str, setting: schemas.SettingUpdate):
    db_setting = db.query(models.Setting).filter(models.Setting.key == key).first()
    if db_setting:
        db_setting.value = setting.value
        db_setting.updated_at = datetime.utcnow()
        db.commit()
        db.refresh(db_setting)
    return db_setting

def delete_setting(db: Session, key: str):
    db_setting = db.query(models.Setting).filter(models.Setting.key == key).first()
    if db_setting:
        db.delete(db_setting)
        db.commit()
    return db_setting

def create_tactic(db: Session, tactic: schemas.TacticCreate):
    db_tactic = models.Tactic(**tactic.dict())
    db.add(db_tactic)
    db.commit()
    db.refresh(db_tactic)
    return db_tactic

def get_tactic(db: Session, tactic_id: int):
    return db.query(models.Tactic).filter(models.Tactic.id == tactic_id).first()

def get_tactics(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Tactic).offset(skip).limit(limit).all()

def update_tactic(db: Session, tactic_id: int, tactic: schemas.TacticUpdate):
    db_tactic = db.query(models.Tactic).filter(models.Tactic.id == tactic_id).first()
    if db_tactic:
        update_data = tactic.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_tactic, key, value)
        db_tactic.updated_at = datetime.utcnow()
        db.commit()
        db.refresh(db_tactic)
    return db_tactic

def delete_tactic(db: Session, tactic_id: int):
    db_tactic = db.query(models.Tactic).filter(models.Tactic.id == tactic_id).first()
    if db_tactic:
        db.delete(db_tactic)
        db.commit()
    return db_tactic
