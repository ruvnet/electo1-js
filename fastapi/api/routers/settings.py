from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from api import crud, schemas
from api.database import get_db
from api.dependencies import get_current_user

router = APIRouter()

@router.post("/", response_model=schemas.Setting)
def create_setting(setting: schemas.SettingCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return crud.create_setting(db=db, setting=setting)

@router.get("/", response_model=List[schemas.Setting])
def read_settings(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    settings = crud.get_settings(db, skip=skip, limit=limit)
    return settings

@router.get("/{key}", response_model=schemas.Setting)
def read_setting(key: str, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_setting = crud.get_setting(db, key=key)
    if db_setting is None:
        raise HTTPException(status_code=404, detail="Setting not found")
    return db_setting

@router.put("/{key}", response_model=schemas.Setting)
def update_setting(key: str, setting: schemas.SettingUpdate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_setting = crud.update_setting(db, key=key, setting=setting)
    if db_setting is None:
        raise HTTPException(status_code=404, detail="Setting not found")
    return db_setting

@router.delete("/{key}", response_model=schemas.Setting)
def delete_setting(key: str, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_setting = crud.delete_setting(db, key=key)
    if db_setting is None:
        raise HTTPException(status_code=404, detail="Setting not found")
    return db_setting