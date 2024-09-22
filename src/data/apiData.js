export const apiEndpoints = [
  {
    name: "Create Prediction",
    method: "POST",
    path: "/predictions/",
    description: "Creates a new prediction.",
    requestParams: [
      { name: "candidate", type: "string", description: "The name of the candidate." },
      { name: "probability", type: "float", description: "The probability of the candidate winning." }
    ],
    exampleRequest: `{
  "candidate": "Test Candidate",
  "probability": 0.75
}`,
    exampleResponse: `{
  "id": 1,
  "candidate": "Test Candidate",
  "probability": 0.75,
  "timestamp": "2023-10-01T12:00:00Z"
}`
  },
  {
    name: "Read Predictions",
    method: "GET",
    path: "/predictions/",
    description: "Retrieves a list of all predictions.",
    requestParams: [
      { name: "skip", type: "integer", description: "Number of records to skip (optional)." },
      { name: "limit", type: "integer", description: "Maximum number of records to return (optional)." }
    ],
    exampleRequest: "GET /predictions/?skip=0&limit=10",
    exampleResponse: `[
  {
    "id": 1,
    "candidate": "Test Candidate",
    "probability": 0.75,
    "timestamp": "2023-10-01T12:00:00Z"
  },
  {
    "id": 2,
    "candidate": "Another Candidate",
    "probability": 0.65,
    "timestamp": "2023-10-01T12:05:00Z"
  }
]`
  },
  {
    name: "Read Prediction",
    method: "GET",
    path: "/predictions/{id}",
    description: "Retrieves a specific prediction by its ID.",
    requestParams: [
      { name: "id", type: "integer", description: "The ID of the prediction." }
    ],
    exampleRequest: "GET /predictions/1",
    exampleResponse: `{
  "id": 1,
  "candidate": "Test Candidate",
  "probability": 0.75,
  "timestamp": "2023-10-01T12:00:00Z"
}`
  },
  {
    name: "Update Prediction",
    method: "PUT",
    path: "/predictions/{id}",
    description: "Updates an existing prediction.",
    requestParams: [
      { name: "id", type: "integer", description: "The ID of the prediction." },
      { name: "candidate", type: "string", description: "The updated name of the candidate." },
      { name: "probability", type: "float", description: "The updated probability of the candidate winning." }
    ],
    exampleRequest: `{
  "candidate": "Updated Candidate",
  "probability": 0.8
}`,
    exampleResponse: `{
  "id": 1,
  "candidate": "Updated Candidate",
  "probability": 0.8,
  "timestamp": "2023-10-01T12:00:00Z"
}`
  },
  {
    name: "Delete Prediction",
    method: "DELETE",
    path: "/predictions/{id}",
    description: "Deletes a specific prediction by its ID.",
    requestParams: [
      { name: "id", type: "integer", description: "The ID of the prediction." }
    ],
    exampleRequest: "DELETE /predictions/1",
    exampleResponse: `{
  "id": 1,
  "candidate": "Test Candidate",
  "probability": 0.75,
  "timestamp": "2023-10-01T12:00:00Z"
}`
  },
  {
    name: "Get System Status",
    method: "GET",
    path: "/status/",
    description: "Retrieves the current status of the system.",
    requestParams: [],
    exampleRequest: "GET /status/",
    exampleResponse: `{
  "status": "ok",
  "uptime": "24 hours"
}`
  }
];

export const algorithms = [
  {
    name: "Data Ingestion",
    description: "Asynchronous data fetching from multiple sources.",
    code: `import aiohttp
import asyncio

async def fetch_data(session, url):
    async with session.get(url) as response:
        return await response.json()

async def ingest_data():
    sources = [
        "https://api.example1.com/election_data",
        "https://api.example2.com/polling_data"
    ]

    async with aiohttp.ClientSession() as session:
        tasks = [fetch_data(session, url) for url in sources]
        results = await asyncio.gather(*tasks)

    return results`
  },
  {
    name: "Data Processing",
    description: "Data cleaning and normalization.",
    code: `import pandas as pd

def process_data(raw_data):
    processed_data = []
    for dataset in raw_data:
        df = pd.DataFrame(dataset)
        
        # Remove rows with missing values
        df.dropna(inplace=True)
        
        # Normalize numerical columns
        numerical_columns = df.select_dtypes(include=['float64', 'int64']).columns
        df[numerical_columns] = (df[numerical_columns] - df[numerical_columns].mean()) / df[numerical_columns].std()
        
        processed_data.append(df)
    
    return processed_data`
  },
  {
    name: "Prediction",
    description: "Random Forest Classifier for election outcome prediction.",
    code: `from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pandas as pd
import numpy as np

def train_model(data):
    combined_data = pd.concat(data, ignore_index=True)
    X = combined_data.drop(['candidate'], axis=1)
    y = combined_data['candidate']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    return model

def make_prediction(model, input_data):
    prediction = model.predict_proba(input_data)
    candidates = model.classes_
    result = [{"candidate": c, "probability": p} for c, p in zip(candidates, prediction[0])]
    return sorted(result, key=lambda x: x['probability'], reverse=True)`
  },
  {
    name: "Optimization",
    description: "Hyperparameter tuning with RandomizedSearchCV.",
    code: `from sklearn.model_selection import RandomizedSearchCV
from sklearn.ensemble import RandomForestClassifier
import numpy as np

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
    
    return random_search.best_estimator_`
  }
];