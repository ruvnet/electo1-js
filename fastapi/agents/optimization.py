from sklearn.model_selection import RandomizedSearchCV
from sklearn.ensemble import RandomForestClassifier
import numpy as np
from logger import logger

def optimize_model(X, y):
    param_dist = {
        'n_estimators': [100, 200, 300, 400, 500],
        'max_depth': [5, 10, 15, 20, 25, 30],
        'min_samples_split': [2, 5, 10],
        'min_samples_leaf': [1, 2, 4],
        'bootstrap': [True, False]
    }

    rf = RandomForestClassifier(random_state=42)
    
    random_search = RandomizedSearchCV(estimator=rf, param_distributions=param_dist, 
                                       n_iter=100, cv=5, verbose=2, random_state=42, n_jobs=-1)
    
    random_search.fit(X, y)
    
    logger.info(f"Best parameters found: {random_search.best_params_}")
    logger.info(f"Best cross-validation score: {random_search.best_score_}")
    
    return random_search.best_estimator_

if __name__ == "__main__":
    # Test with sample data
    X = np.random.rand(100, 2)
    y = np.random.choice(['A', 'B', 'C'], size=100)
    best_model = optimize_model(X, y)
    print(best_model)
