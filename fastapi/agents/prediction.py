from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pandas as pd
import numpy as np
from logger import logger

def train_model(data):
    # Combine all datasets
    combined_data = pd.concat(data, ignore_index=True)
    
    # Prepare features and target
    X = combined_data.drop(['candidate'], axis=1)
    y = combined_data['candidate']
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Evaluate model
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    logger.info(f"Model trained with accuracy: {accuracy}")
    return model

def make_prediction(model, input_data):
    prediction = model.predict_proba(input_data)
    candidates = model.classes_
    result = [{"candidate": c, "probability": p} for c, p in zip(candidates, prediction[0])]
    return sorted(result, key=lambda x: x['probability'], reverse=True)

if __name__ == "__main__":
    # Test with sample data
    sample_data = [
        pd.DataFrame({'candidate': ['A', 'B', 'C'] * 10, 'votes': np.random.randint(100, 200, 30), 'popularity': np.random.random(30)}),
        pd.DataFrame({'candidate': ['X', 'Y', 'Z'] * 10, 'votes': np.random.randint(150, 250, 30), 'popularity': np.random.random(30)})
    ]
    model = train_model(sample_data)
    sample_input = pd.DataFrame({'votes': [180], 'popularity': [0.6]})
    prediction = make_prediction(model, sample_input)
    print(prediction)
