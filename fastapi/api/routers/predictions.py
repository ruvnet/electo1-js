from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from api import crud, schemas, models
from api.database import get_db
from api.dependencies import get_current_user

router = APIRouter()

@router.post("/predictions/", response_model=schemas.Prediction)
def create_prediction(prediction: schemas.PredictionCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return crud.create_prediction(db=db, prediction=prediction)

@router.get("/predictions/", response_model=List[schemas.Prediction])
def read_predictions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    predictions = crud.get_predictions(db, skip=skip, limit=limit)
    return predictions

@router.get("/predictions/{prediction_id}", response_model=schemas.Prediction)
def read_prediction(prediction_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_prediction = crud.get_prediction(db, prediction_id=prediction_id)
    if db_prediction is None:
        raise HTTPException(status_code=404, detail="Prediction not found")
    return db_prediction

@router.put("/predictions/{prediction_id}", response_model=schemas.Prediction)
def update_prediction(prediction_id: int, prediction: schemas.PredictionCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_prediction = crud.update_prediction(db, prediction_id=prediction_id, prediction=prediction)
    if db_prediction is None:
        raise HTTPException(status_code=404, detail="Prediction not found")
    return db_prediction

@router.delete("/predictions/{prediction_id}", response_model=schemas.Prediction)
def delete_prediction(prediction_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_prediction = crud.delete_prediction(db, prediction_id=prediction_id)
    if db_prediction is None:
        raise HTTPException(status_code=404, detail="Prediction not found")
    return db_prediction
