from sqlalchemy.orm import Session
from api import models, schemas

def create_prediction(db: Session, prediction: schemas.PredictionCreate):
    db_prediction = models.Prediction(**prediction.dict())
    db.add(db_prediction)
    db.commit()
    db.refresh(db_prediction)
    return db_prediction

def get_prediction(db: Session, prediction_id: int):
    return db.query(models.Prediction).filter(models.Prediction.id == prediction_id).first()

def get_predictions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Prediction).offset(skip).limit(limit).all()

def update_prediction(db: Session, prediction_id: int, prediction: schemas.PredictionCreate):
    db_prediction = db.query(models.Prediction).filter(models.Prediction.id == prediction_id).first()
    if db_prediction:
        for key, value in prediction.dict().items():
            setattr(db_prediction, key, value)
        db.commit()
        db.refresh(db_prediction)
    return db_prediction

def delete_prediction(db: Session, prediction_id: int):
    db_prediction = db.query(models.Prediction).filter(models.Prediction.id == prediction_id).first()
    if db_prediction:
        db.delete(db_prediction)
        db.commit()
    return db_prediction
