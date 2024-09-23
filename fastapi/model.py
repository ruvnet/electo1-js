import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

class ElectionPredictor:
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.is_model_trained = False

    def train(self, data: pd.DataFrame) -> float:
        X = data.drop('result', axis=1)
        y = data['result']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        self.model.fit(X_train, y_train)
        self.is_model_trained = True

        y_pred = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)

        # Save the trained model
        joblib.dump(self.model, 'election_model.joblib')

        return accuracy

    def predict(self, data: pd.DataFrame) -> str:
        if not self.is_model_trained:
            raise Exception("Model not trained yet")
        
        prediction = self.model.predict(data)
        return prediction[0]

    def is_trained(self) -> bool:
        return self.is_model_trained

    def load_model(self):
        try:
            self.model = joblib.load('election_model.joblib')
            self.is_model_trained = True
        except:
            print("No saved model found. Please train the model first.")
