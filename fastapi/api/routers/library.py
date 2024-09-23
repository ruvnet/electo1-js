from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from api import crud, schemas
from api.database import get_db
from api.dependencies import get_current_user

router = APIRouter()

@router.post("/", response_model=schemas.LibraryItem)
def create_library_item(library_item: schemas.LibraryItemCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return crud.create_library_item(db=db, library_item=library_item)

@router.get("/", response_model=List[schemas.LibraryItem])
def read_library_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    library_items = crud.get_library_items(db, skip=skip, limit=limit)
    return library_items

@router.get("/{library_item_id}", response_model=schemas.LibraryItem)
def read_library_item(library_item_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_library_item = crud.get_library_item(db, library_item_id=library_item_id)
    if db_library_item is None:
        raise HTTPException(status_code=404, detail="Library item not found")
    return db_library_item

@router.put("/{library_item_id}", response_model=schemas.LibraryItem)
def update_library_item(library_item_id: int, library_item: schemas.LibraryItemUpdate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_library_item = crud.update_library_item(db, library_item_id=library_item_id, library_item=library_item)
    if db_library_item is None:
        raise HTTPException(status_code=404, detail="Library item not found")
    return db_library_item

@router.delete("/{library_item_id}", response_model=schemas.LibraryItem)
def delete_library_item(library_item_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_library_item = crud.delete_library_item(db, library_item_id=library_item_id)
    if db_library_item is None:
        raise HTTPException(status_code=404, detail="Library item not found")
    return db_library_item