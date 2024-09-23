# Developer Guide

## Introduction

Welcome to the Developer Guide for the Agentic Election Prediction System! This guide provides instructions on how to set up the development environment, understand the code structure, and contribute to the project.

## Setting Up the Development Environment

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

## Code Structure

The project is organized into several directories, each serving a specific purpose. Here is an overview of the main directories and their contents:

- **agents/**: Contains the various agents responsible for data ingestion, processing, analysis, prediction, and optimization.
  - `data_ingestion.py`: Handles data fetching from various sources.
  - `data_processing.py`: Cleans and preprocesses the ingested data.
  - `analysis.py`: Performs exploratory data analysis and feature extraction.
  - `prediction.py`: Trains machine learning models and generates predictions.
  - `optimization.py`: Manages parameter tuning and model optimization.

- **api/**: Implements the FastAPI application with routers and schemas for handling API requests.
  - `main.py`: Initializes the FastAPI app and includes routers.
  - `routers/`: Contains the API endpoints.
    - `predictions.py`: Handles endpoints related to election predictions.
  - `schemas/`: Defines request and response models for API endpoints.
    - `prediction.py`: Defines the schema for prediction-related endpoints.

- **data/**: Stores raw, processed, and external data used by the system.
  - `raw/`: Contains unprocessed data from various sources.
  - `processed/`: Stores cleaned and normalized data ready for analysis.
  - `external/`: Holds additional datasets like demographic information and historical election results.

- **models/**: Contains machine learning models used for predictions.
  - `election_model.pkl`: The trained election prediction model.

- **tests/**: Contains unit and integration tests for the system.
  - `test_agents.py`: Tests for the agents.
  - `test_api.py`: Tests for the API endpoints.

- **docs/**: Documentation files for the system, including overview, installation, usage, and API reference.

## Adding New Features

To contribute to the project, follow these steps:

1. **Fork the repository**: Create a fork of the repository on GitHub.

2. **Create a new branch**: Create a new branch for your feature or bug fix.
   ```sh
   git checkout -b feature-name
   ```

3. **Implement the feature**: Make your changes in the appropriate files. Ensure that your code follows the project's coding standards and conventions.

4. **Write tests**: Add unit and integration tests for your feature in the `tests/` directory.

5. **Run tests**: Ensure all tests pass before committing your changes.
   ```sh
   poetry run pytest
   ```

6. **Commit your changes**: Commit your changes with a descriptive commit message.
   ```sh
   git commit -m "Add feature-name"
   ```

7. **Push to your fork**: Push your changes to your forked repository.
   ```sh
   git push origin feature-name
   ```

8. **Create a pull request**: Create a pull request on GitHub to merge your changes into the main repository.

## Conclusion

This developer guide provides an overview of how to set up the development environment, understand the code structure, and contribute to the Agentic Election Prediction System. For more detailed information on specific topics, refer to the respective documentation files in the `/documentation` folder.
