from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from api import crud, schemas
from api.database import get_db
from api.dependencies import get_current_user

router = APIRouter()

@router.post("/data_sources/", response_model=schemas.DataSource)
def create_data_source(data_source: schemas.DataSourceCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return crud.create_data_source(db=db, data_source=data_source)

@router.get("/data_sources/", response_model=List[schemas.DataSource])
def read_data_sources(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    data_sources = crud.get_data_sources(db, skip=skip, limit=limit)
    return data_sources

@router.get("/data_sources/{data_source_id}", response_model=schemas.DataSource)
def read_data_source(data_source_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_data_source = crud.get_data_source(db, data_source_id=data_source_id)
    if db_data_source is None:
        raise HTTPException(status_code=404, detail="Data source not found")
    return db_data_source

@router.put("/data_sources/{data_source_id}", response_model=schemas.DataSource)
def update_data_source(data_source_id: int, data_source: schemas.DataSourceUpdate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_data_source = crud.update_data_source(db, data_source_id=data_source_id, data_source=data_source)
    if db_data_source is None:
        raise HTTPException(status_code=404, detail="Data source not found")
    return db_data_source

@router.delete("/data_sources/{data_source_id}", response_model=schemas.DataSource)
def delete_data_source(data_source_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_data_source = crud.delete_data_source(db, data_source_id=data_source_id)
    if db_data_source is None:
        raise HTTPException(status_code=404, detail="Data source not found")
    return db_data_source