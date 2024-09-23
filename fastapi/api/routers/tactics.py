from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from api import crud, schemas
from api.database import get_db
from api.dependencies import get_current_user

router = APIRouter()

@router.post("/", response_model=schemas.Tactic)
def create_tactic(tactic: schemas.TacticCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return crud.create_tactic(db=db, tactic=tactic)

@router.get("/", response_model=List[schemas.Tactic])
def read_tactics(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    tactics = crud.get_tactics(db, skip=skip, limit=limit)
    return tactics

@router.get("/{tactic_id}", response_model=schemas.Tactic)
def read_tactic(tactic_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_tactic = crud.get_tactic(db, tactic_id=tactic_id)
    if db_tactic is None:
        raise HTTPException(status_code=404, detail="Tactic not found")
    return db_tactic

@router.put("/{tactic_id}", response_model=schemas.Tactic)
def update_tactic(tactic_id: int, tactic: schemas.TacticUpdate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_tactic = crud.update_tactic(db, tactic_id=tactic_id, tactic=tactic)
    if db_tactic is None:
        raise HTTPException(status_code=404, detail="Tactic not found")
    return db_tactic

@router.delete("/{tactic_id}", response_model=schemas.Tactic)
def delete_tactic(tactic_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_tactic = crud.delete_tactic(db, tactic_id=tactic_id)
    if db_tactic is None:
        raise HTTPException(status_code=404, detail="Tactic not found")
    return db_tactic