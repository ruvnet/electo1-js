from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from model import ElectionPredictor
from data_handler import DataHandler

app = FastAPI()

# Initialize DataHandler and ElectionPredictor
data_handler = DataHandler()
predictor = ElectionPredictor()

class PredictionInput(BaseModel):
    region: str
    population: int
    gdp: float
    unemployment: float

@app.on_event("startup")
async def startup_event():
    # Initialize the database and train the model
    data_handler.initialize_database()
    if not predictor.is_trained():
        print("Training the model...")
        training_data = data_handler.load_training_data()
        predictor.train(training_data)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Election Prediction System"}

@app.post("/predict")
def predict(input_data: PredictionInput):
    try:
        # Preprocess input data
        processed_data = data_handler.preprocess_input(input_data.dict())
        
        # Make prediction
        prediction = predictor.predict(processed_data)
        
        return {"prediction": prediction}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/train")
def train_model():
    try:
        # Load and preprocess training data
        training_data = data_handler.load_training_data()
        
        # Train the model
        accuracy = predictor.train(training_data)
        
        return {"message": "Model trained successfully", "accuracy": accuracy}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
