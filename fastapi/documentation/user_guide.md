# User Guide

## Introduction

Welcome to the Agentic Election Prediction System! This user guide will help you understand how to set up, run, and use the system effectively.

## Setting Up the System

### Prerequisites

Before you begin, ensure you have the following installed on your machine:
- Python 3.11 or higher
- Poetry for dependency management

### Installation Steps

1. **Clone the repository**:
   ```sh
   git clone https://github.com/ruvnet/Electo1.git
   cd Electo1
   ```

2. **Install dependencies**:
   ```sh
   poetry install
   ```

3. **Run the application**:
   ```sh
   poetry run uvicorn api.main:app --reload
   ```

## Running the System

### Starting the Application

To start the application, run the following command:
```sh
poetry run uvicorn api.main:app --reload
```
This will start the FastAPI server, and you can access the API at `http://127.0.0.1:8000`.

### API Endpoints

The system provides several API endpoints for interacting with the election prediction model. Here are some of the key endpoints:

- **Create Prediction**: `POST /predictions/`
- **Read Prediction**: `GET /predictions/{id}/`
- **Update Prediction**: `PUT /predictions/{id}/`
- **Delete Prediction**: `DELETE /predictions/{id}/`
- **Get System Status**: `GET /status/`

## Main Features and Functionalities

### Data Ingestion

The system ingests data from multiple sources, including polling data, social media trends, and historical election results. The data ingestion process is handled by the `data_ingestion.py` script.

### Data Processing

Once the data is ingested, it is processed to ensure consistency and accuracy. The `data_processing.py` script handles data cleaning, normalization, and preprocessing.

### Prediction Modeling

The core functionality of the system is to predict election outcomes using machine learning models. The `prediction.py` script trains a Random Forest classifier on the processed data and generates predictions.

### Optimization

The system continuously optimizes model parameters to enhance prediction accuracy. The `optimization.py` script uses libraries like Optuna to perform hyperparameter tuning.

### Advanced Use Cases

The system can be used for real-time election monitoring and integration with other applications. Detailed instructions on advanced use cases are provided in the `advanced_uses.md` document.

## Conclusion

This user guide provides an overview of how to set up, run, and use the Agentic Election Prediction System. For more detailed information on customization, API reference, developer guide, algorithms, and advanced uses, please refer to the respective documentation files in the `/documentation` folder.
