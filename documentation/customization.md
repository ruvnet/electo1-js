# Customization Guide

## Introduction

This guide provides instructions for customizing the Agentic Election Prediction System. You will learn how to modify configuration files, add new data sources, and update the model to suit your specific needs.

## Modifying Configuration Files

### Configuration File Structure

The configuration files are located in the `config/` directory. They are written in YAML format and contain various settings for the system.

### Editing Configuration Files

1. **Open the configuration file**:
   ```sh
   nano config/settings.yaml
   ```

2. **Modify the settings**:
   - Update the API endpoints for data sources.
   - Change the parameters for data processing and model training.
   - Adjust the logging and monitoring settings.

3. **Save the changes**:
   ```sh
   Ctrl + O
   Ctrl + X
   ```

### Example Configuration

```yaml
data_sources:
  - url: "https://api.example1.com/election_data"
  - url: "https://api.example2.com/polling_data"

model_parameters:
  n_estimators: 100
  max_depth: 20

logging:
  level: INFO
  file: "logs/system.log"
```

## Adding New Data Sources

### Steps to Add a New Data Source

1. **Identify the new data source**:
   - Obtain the API endpoint or file location for the new data source.

2. **Update the configuration file**:
   - Add the new data source URL to the `data_sources` section in the `config/settings.yaml` file.

3. **Modify the data ingestion script**:
   - Open the `agents/data_ingestion.py` file.
   - Add a new function to fetch data from the new source.
   - Update the `ingest_data` function to include the new data source.

### Example Code for Adding a New Data Source

```python
async def fetch_new_data_source(session, url):
    async with session.get(url) as response:
        return await response.json()

async def ingest_data():
    sources = [
        "https://api.example1.com/election_data",
        "https://api.example2.com/polling_data",
        "https://api.newsource.com/new_data"
    ]

    async with aiohttp.ClientSession() as session:
        tasks = [fetch_data(session, url) for url in sources]
        results = await asyncio.gather(*tasks)

    logger.info(f"Data ingested from {len(results)} sources")
    return results
```

## Updating the Model

### Steps to Update the Model

1. **Prepare the new data**:
   - Ensure the new data is ingested and processed correctly.

2. **Retrain the model**:
   - Open the `agents/prediction.py` file.
   - Load the new data and retrain the model using the `train_model` function.

3. **Save the updated model**:
   - Save the retrained model to a file for future use.

### Example Code for Updating the Model

```python
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

def save_model(model, filename='election_model.joblib'):
    joblib.dump(model, filename)
    logger.info(f"Model saved to {filename}")

if __name__ == "__main__":
    # Ingest and process new data
    new_data = asyncio.run(ingest_data())
    processed_data = process_data(new_data)
    
    # Retrain and save the model
    updated_model = train_model(processed_data)
    save_model(updated_model)
```

## Conclusion

This customization guide provides instructions on how to modify configuration files, add new data sources, and update the model for the Agentic Election Prediction System. By following these steps, you can tailor the system to meet your specific requirements and ensure it remains up-to-date with the latest data and configurations.
