from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from api import crud, schemas
from api.database import get_db
from api.dependencies import get_current_user

router = APIRouter()

@router.post("/", response_model=schemas.AgentDeployment)
def create_agent_deployment(agent_deployment: schemas.AgentDeploymentCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return crud.create_agent_deployment(db=db, agent_deployment=agent_deployment)

@router.get("/", response_model=List[schemas.AgentDeployment])
def read_agent_deployments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    agent_deployments = crud.get_agent_deployments(db, skip=skip, limit=limit)
    return agent_deployments

@router.get("/{agent_deployment_id}", response_model=schemas.AgentDeployment)
def read_agent_deployment(agent_deployment_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_agent_deployment = crud.get_agent_deployment(db, agent_deployment_id=agent_deployment_id)
    if db_agent_deployment is None:
        raise HTTPException(status_code=404, detail="Agent deployment not found")
    return db_agent_deployment

@router.put("/{agent_deployment_id}", response_model=schemas.AgentDeployment)
def update_agent_deployment(agent_deployment_id: int, agent_deployment: schemas.AgentDeploymentUpdate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_agent_deployment = crud.update_agent_deployment(db, agent_deployment_id=agent_deployment_id, agent_deployment=agent_deployment)
    if db_agent_deployment is None:
        raise HTTPException(status_code=404, detail="Agent deployment not found")
    return db_agent_deployment

@router.delete("/{agent_deployment_id}", response_model=schemas.AgentDeployment)
def delete_agent_deployment(agent_deployment_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db_agent_deployment = crud.delete_agent_deployment(db, agent_deployment_id=agent_deployment_id)
    if db_agent_deployment is None:
        raise HTTPException(status_code=404, detail="Agent deployment not found")
    return db_agent_deployment