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

### Data Sources

- `POST /api/data_sources/`: Add a new data source
- `GET /api/data_sources/`: List all data sources
- `GET /api/data_sources/{id}`: Get a specific data source
- `PUT /api/data_sources/{id}`: Update a data source
- `DELETE /api/data_sources/{id}`: Delete a data source

### Agent Deployment

- `POST /api/agent_deployment/`: Deploy a new agent
- `GET /api/agent_deployment/`: List all deployed agents
- `GET /api/agent_deployment/{id}`: Get a specific agent deployment
- `PUT /api/agent_deployment/{id}`: Update an agent deployment
- `DELETE /api/agent_deployment/{id}`: Remove an agent deployment

### Library

- `POST /api/library/`: Add a new library item
- `GET /api/library/`: List all library items
- `GET /api/library/{id}`: Get a specific library item
- `PUT /api/library/{id}`: Update a library item
- `DELETE /api/library/{id}`: Delete a library item

### Settings

- `POST /api/settings/`: Create a new setting
- `GET /api/settings/`: List all settings
- `GET /api/settings/{key}`: Get a specific setting
- `PUT /api/settings/{key}`: Update a setting
- `DELETE /api/settings/{key}`: Delete a setting

### Tactics

- `POST /api/tactics/`: Create a new tactic
- `GET /api/tactics/`: List all tactics
- `GET /api/tactics/{id}`: Get a specific tactic
- `PUT /api/tactics/{id}`: Update a tactic
- `DELETE /api/tactics/{id}`: Delete a tactic

## Request and Response Formats

### Predictions

#### Create Prediction

Request:
