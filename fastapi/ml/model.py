from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib
from logger import logger

class ElectionModel:
    def __init__(self):
        self.model = None

    def train(self, X, y):
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.model.fit(X_train, y_train)
        
        y_pred = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        
        logger.info(f"Model trained with accuracy: {accuracy}")

    def predict(self, X):
        if self.model is None:
            raise ValueError("Model not trained. Call train() first.")
        return self.model.predict_proba(X)

    def save(self, filename='election_model.joblib'):
        if self.model is None:
            raise ValueError("Model not trained. Call train() first.")
        joblib.dump(self.model, filename)
        logger.info(f"Model saved to {filename}")

    def load(self, filename='election_model.joblib'):
        self.model = joblib.load(filename)
        logger.info(f"Model loaded from {filename}")

if __name__ == "__main__":
    # Test the model
    import numpy as np
    X = np.random.rand(100, 2)
    y = np.random.choice(['A', 'B', 'C'], size=100)

    model = ElectionModel()
    model.train(X, y)
    
    test_X = np.random.rand(5, 2)
    predictions = model.predict(test_X)
    print("Predictions:", predictions)

    model.save()
    
    new_model = ElectionModel()
    new_model.load()
    new_predictions = new_model.predict(test_X)
    print("New predictions:", new_predictions)
