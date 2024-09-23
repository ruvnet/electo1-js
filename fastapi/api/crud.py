from sqlalchemy.orm import Session
from api import models, schemas
from datetime import datetime

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

def create_data_source(db: Session, data_source: schemas.DataSourceCreate):
    db_data_source = models.DataSource(**data_source.dict())
    db.add(db_data_source)
    db.commit()
    db.refresh(db_data_source)
    return db_data_source

def get_data_source(db: Session, data_source_id: int):
    return db.query(models.DataSource).filter(models.DataSource.id == data_source_id).first()

def get_data_sources(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.DataSource).offset(skip).limit(limit).all()

def update_data_source(db: Session, data_source_id: int, data_source: schemas.DataSourceUpdate):
    db_data_source = db.query(models.DataSource).filter(models.DataSource.id == data_source_id).first()
    if db_data_source:
        for key, value in data_source.dict(exclude_unset=True).items():
            setattr(db_data_source, key, value)
        db_data_source.last_updated = datetime.utcnow()
        db.commit()
        db.refresh(db_data_source)
    return db_data_source

def delete_data_source(db: Session, data_source_id: int):
    db_data_source = db.query(models.DataSource).filter(models.DataSource.id == data_source_id).first()
    if db_data_source:
        db.delete(db_data_source)
        db.commit()
    return db_data_source
