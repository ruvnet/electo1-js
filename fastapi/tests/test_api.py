from fastapi.testclient import TestClient
from api.main import app
from api.database import Base, engine
import pytest

client = TestClient(app)

@pytest.fixture(scope="module")
def test_db():
    Base.metadata.create_all(bind=engine)
    yield
    Base.metadata.drop_all(bind=engine)

def test_create_prediction(test_db):
    response = client.post(
        "/predictions/",
        json={"candidate": "Test Candidate", "probability": 0.75}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["candidate"] == "Test Candidate"
    assert data["probability"] == 0.75

def test_read_predictions(test_db):
    response = client.get("/predictions/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0

def test_read_prediction(test_db):
    # First, create a prediction
    create_response = client.post(
        "/predictions/",
        json={"candidate": "Test Candidate", "probability": 0.75}
    )
    created_prediction = create_response.json()

    # Then, read the created prediction
    response = client.get(f"/predictions/{created_prediction['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["candidate"] == "Test Candidate"
    assert data["probability"] == 0.75

def test_update_prediction(test_db):
    # First, create a prediction
    create_response = client.post(
        "/predictions/",
        json={"candidate": "Test Candidate", "probability": 0.75}
    )
    created_prediction = create_response.json()

    # Then, update the created prediction
    update_response = client.put(
        f"/predictions/{created_prediction['id']}",
        json={"candidate": "Updated Candidate", "probability": 0.8}
    )
    assert update_response.status_code == 200
    updated_data = update_response.json()
    assert updated_data["candidate"] == "Updated Candidate"
    assert updated_data["probability"] == 0.8

def test_delete_prediction(test_db):
    # First, create a prediction
    create_response = client.post(
        "/predictions/",
        json={"candidate": "Test Candidate", "probability": 0.75}
    )
    created_prediction = create_response.json()

    # Then, delete the created prediction
    delete_response = client.delete(f"/predictions/{created_prediction['id']}")
    assert delete_response.status_code == 200

    # Try to read the deleted prediction
    read_response = client.get(f"/predictions/{created_prediction['id']}")
    assert read_response.status_code == 404
