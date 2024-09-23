# API Reference

## Overview

This document provides detailed information about the API endpoints available in the Agentic Election Prediction System.

## Endpoints

### Predictions

- `POST /api/predictions/`: Create a new prediction
- `GET /api/predictions/`: List all predictions
- `GET /api/predictions/{id}`: Get a specific prediction
- `PUT /api/predictions/{id}`: Update a prediction
- `DELETE /api/predictions/{id}`: Delete a prediction

#### Create Prediction

**Request:**

```json
{
  "candidate": "string",
  "probability": 0.75
}
```

**Response:**

```json
{
  "id": 1,
  "candidate": "string",
  "probability": 0.75,
  "timestamp": "2023-01-01T00:00:00Z"
}
```

#### List Predictions

**Request:**

```http
GET /api/predictions/
```

**Response:**

```json
[
  {
    "id": 1,
    "candidate": "string",
    "probability": 0.75,
    "timestamp": "2023-01-01T00:00:00Z"
  }
]
```

#### Get Prediction

**Request:**

```http
GET /api/predictions/{id}
```

**Response:**

```json
{
  "id": 1,
  "candidate": "string",
  "probability": 0.75,
  "timestamp": "2023-01-01T00:00:00Z"
}
```

#### Update Prediction

**Request:**

```json
{
  "candidate": "string",
  "probability": 0.8
}
```

**Response:**

```json
{
  "id": 1,
  "candidate": "string",
  "probability": 0.8,
  "timestamp": "2023-01-01T00:00:00Z"
}
```

#### Delete Prediction

**Request:**

```http
DELETE /api/predictions/{id}
```

**Response:**

```json
{
  "id": 1,
  "candidate": "string",
  "probability": 0.75,
  "timestamp": "2023-01-01T00:00:00Z"
}
```

### Data Sources

- `POST /api/data_sources/`: Add a new data source
- `GET /api/data_sources/`: List all data sources
- `GET /api/data_sources/{id}`: Get a specific data source
- `PUT /api/data_sources/{id}`: Update a data source
- `DELETE /api/data_sources/{id}`: Delete a data source

#### Add Data Source

**Request:**

```json
{
  "name": "string",
  "type": "API",
  "url": "https://example.com",
  "status": "Active"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "type": "API",
  "url": "https://example.com",
  "status": "Active",
  "last_updated": "2023-01-01T00:00:00Z"
}
```

#### List Data Sources

**Request:**

```http
GET /api/data_sources/
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "string",
    "type": "API",
    "url": "https://example.com",
    "status": "Active",
    "last_updated": "2023-01-01T00:00:00Z"
  }
]
```

#### Get Data Source

**Request:**

```http
GET /api/data_sources/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "type": "API",
  "url": "https://example.com",
  "status": "Active",
  "last_updated": "2023-01-01T00:00:00Z"
}
```

#### Update Data Source

**Request:**

```json
{
  "name": "string",
  "type": "API",
  "url": "https://example.com",
  "status": "Inactive"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "type": "API",
  "url": "https://example.com",
  "status": "Inactive",
  "last_updated": "2023-01-01T00:00:00Z"
}
```

#### Delete Data Source

**Request:**

```http
DELETE /api/data_sources/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "type": "API",
  "url": "https://example.com",
  "status": "Active",
  "last_updated": "2023-01-01T00:00:00Z"
}
```

### Agent Deployment

- `POST /api/agent_deployment/`: Deploy a new agent
- `GET /api/agent_deployment/`: List all deployed agents
- `GET /api/agent_deployment/{id}`: Get a specific agent deployment
- `PUT /api/agent_deployment/{id}`: Update an agent deployment
- `DELETE /api/agent_deployment/{id}`: Remove an agent deployment

#### Deploy Agent

**Request:**

```json
{
  "name": "string",
  "location": {},
  "demographic": {},
  "socioeconomic": {},
  "cultural": {},
  "political": {}
}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "location": {},
  "demographic": {},
  "socioeconomic": {},
  "cultural": {},
  "political": {},
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### List Agent Deployments

**Request:**

```http
GET /api/agent_deployment/
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "string",
    "location": {},
    "demographic": {},
    "socioeconomic": {},
    "cultural": {},
    "political": {},
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
  }
]
```

#### Get Agent Deployment

**Request:**

```http
GET /api/agent_deployment/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "location": {},
  "demographic": {},
  "socioeconomic": {},
  "cultural": {},
  "political": {},
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### Update Agent Deployment

**Request:**

```json
{
  "name": "string",
  "location": {},
  "demographic": {},
  "socioeconomic": {},
  "cultural": {},
  "political": {}
}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "location": {},
  "demographic": {},
  "socioeconomic": {},
  "cultural": {},
  "political": {},
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### Remove Agent Deployment

**Request:**

```http
DELETE /api/agent_deployment/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "location": {},
  "demographic": {},
  "socioeconomic": {},
  "cultural": {},
  "political": {},
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

### Library

- `POST /api/library/`: Add a new library item
- `GET /api/library/`: List all library items
- `GET /api/library/{id}`: Get a specific library item
- `PUT /api/library/{id}`: Update a library item
- `DELETE /api/library/{id}`: Delete a library item

#### Add Library Item

**Request:**

```json
{
  "name": "string",
  "type": "string",
  "description": "string",
  "data": {}
}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "type": "string",
  "description": "string",
  "data": {},
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### List Library Items

**Request:**

```http
GET /api/library/
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "string",
    "type": "string",
    "description": "string",
    "data": {},
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
  }
]
```

#### Get Library Item

**Request:**

```http
GET /api/library/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "type": "string",
  "description": "string",
  "data": {},
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### Update Library Item

**Request:**

```json
{
  "name": "string",
  "type": "string",
  "description": "string",
  "data": {}
}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "type": "string",
  "description": "string",
  "data": {},
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### Delete Library Item

**Request:**

```http
DELETE /api/library/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "type": "string",
  "description": "string",
  "data": {},
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

### Settings

- `POST /api/settings/`: Create a new setting
- `GET /api/settings/`: List all settings
- `GET /api/settings/{key}`: Get a specific setting
- `PUT /api/settings/{key}`: Update a setting
- `DELETE /api/settings/{key}`: Delete a setting

#### Create Setting

**Request:**

```json
{
  "key": "string",
  "value": {}
}
```

**Response:**

```json
{
  "id": 1,
  "key": "string",
  "value": {},
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### List Settings

**Request:**

```http
GET /api/settings/
```

**Response:**

```json
[
  {
    "id": 1,
    "key": "string",
    "value": {},
    "updated_at": "2023-01-01T00:00:00Z"
  }
]
```

#### Get Setting

**Request:**

```http
GET /api/settings/{key}
```

**Response:**

```json
{
  "id": 1,
  "key": "string",
  "value": {},
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### Update Setting

**Request:**

```json
{
  "value": {}
}
```

**Response:**

```json
{
  "id": 1,
  "key": "string",
  "value": {},
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### Delete Setting

**Request:**

```http
DELETE /api/settings/{key}
```

**Response:**

```json
{
  "id": 1,
  "key": "string",
  "value": {},
  "updated_at": "2023-01-01T00:00:00Z"
}
```

### Tactics

- `POST /api/tactics/`: Create a new tactic
- `GET /api/tactics/`: List all tactics
- `GET /api/tactics/{id}`: Get a specific tactic
- `PUT /api/tactics/{id}`: Update a tactic
- `DELETE /api/tactics/{id}`: Delete a tactic

#### Create Tactic

**Request:**

```json
{
  "name": "string",
  "description": "string",
  "target_demographic": "string",
  "implementation_method": "string"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "description": "string",
  "target_demographic": "string",
  "implementation_method": "string",
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### List Tactics

**Request:**

```http
GET /api/tactics/
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "string",
    "description": "string",
    "target_demographic": "string",
    "implementation_method": "string",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
  }
]
```

#### Get Tactic

**Request:**

```http
GET /api/tactics/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "description": "string",
  "target_demographic": "string",
  "implementation_method": "string",
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### Update Tactic

**Request:**

```json
{
  "name": "string",
  "description": "string",
  "target_demographic": "string",
  "implementation_method": "string"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "description": "string",
  "target_demographic": "string",
  "implementation_method": "string",
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

#### Delete Tactic

**Request:**

```http
DELETE /api/tactics/{id}
```

**Response:**

```json
{
  "id": 1,
  "name": "string",
  "description": "string",
  "target_demographic": "string",
  "implementation_method": "string",
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```
