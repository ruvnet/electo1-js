# API Reference

## Overview

This document provides detailed information about the API endpoints available in the Agentic Election Prediction System. Each endpoint is described with its purpose, request parameters, and example requests and responses.

## Endpoints

### Create Prediction

- **Endpoint**: `POST /predictions/`
- **Description**: Creates a new prediction.
- **Request Parameters**:
  - `candidate` (string): The name of the candidate.
  - `probability` (float): The probability of the candidate winning.
- **Example Request**:
  ```json
  {
    "candidate": "Test Candidate",
    "probability": 0.75
  }
  ```
- **Example Response**:
  ```json
  {
    "id": 1,
    "candidate": "Test Candidate",
    "probability": 0.75,
    "timestamp": "2023-10-01T12:00:00Z"
  }
  ```

### Read Predictions

- **Endpoint**: `GET /predictions/`
- **Description**: Retrieves a list of all predictions.
- **Request Parameters**:
  - `skip` (integer, optional): Number of records to skip.
  - `limit` (integer, optional): Maximum number of records to return.
- **Example Request**:
  ```
  GET /predictions/?skip=0&limit=10
  ```
- **Example Response**:
  ```json
  [
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
  ]
  ```

### Read Prediction

- **Endpoint**: `GET /predictions/{id}`
- **Description**: Retrieves a specific prediction by its ID.
- **Request Parameters**:
  - `id` (integer): The ID of the prediction.
- **Example Request**:
  ```
  GET /predictions/1
  ```
- **Example Response**:
  ```json
  {
    "id": 1,
    "candidate": "Test Candidate",
    "probability": 0.75,
    "timestamp": "2023-10-01T12:00:00Z"
  }
  ```

### Update Prediction

- **Endpoint**: `PUT /predictions/{id}`
- **Description**: Updates an existing prediction.
- **Request Parameters**:
  - `id` (integer): The ID of the prediction.
  - `candidate` (string): The updated name of the candidate.
  - `probability` (float): The updated probability of the candidate winning.
- **Example Request**:
  ```json
  {
    "candidate": "Updated Candidate",
    "probability": 0.8
  }
  ```
- **Example Response**:
  ```json
  {
    "id": 1,
    "candidate": "Updated Candidate",
    "probability": 0.8,
    "timestamp": "2023-10-01T12:00:00Z"
  }
  ```

### Delete Prediction

- **Endpoint**: `DELETE /predictions/{id}`
- **Description**: Deletes a specific prediction by its ID.
- **Request Parameters**:
  - `id` (integer): The ID of the prediction.
- **Example Request**:
  ```
  DELETE /predictions/1
  ```
- **Example Response**:
  ```json
  {
    "id": 1,
    "candidate": "Test Candidate",
    "probability": 0.75,
    "timestamp": "2023-10-01T12:00:00Z"
  }
  ```

### Get System Status

- **Endpoint**: `GET /status/`
- **Description**: Retrieves the current status of the system.
- **Example Request**:
  ```
  GET /status/
  ```
- **Example Response**:
  ```json
  {
    "status": "ok",
    "uptime": "24 hours"
  }
  ```
