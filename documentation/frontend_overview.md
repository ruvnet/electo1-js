# Frontend Overview

## Implementation Details

The frontend of the Agentic Election Prediction System is implemented using modern web technologies to ensure a responsive and user-friendly interface. The main technologies used are:

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: A library for routing in React applications.
- **React Query**: A library for fetching, caching, and updating data in React applications.
- **Lucide Icons**: A library for using icons in the application.

The frontend is structured into various components, each responsible for a specific part of the user interface. These components are organized in a way that promotes reusability and maintainability.

## Architecture

The architecture of the frontend follows a component-based approach, where each component is responsible for a specific part of the user interface. The main components are:

- **App**: The root component that sets up the application and includes the main layout.
- **Header**: The component responsible for displaying the header of the application.
- **Sidebar**: The component responsible for displaying the sidebar navigation.
- **Footer**: The component responsible for displaying the footer of the application.
- **Dashboard**: The main dashboard component that displays the global election prediction dashboard.
- **AIInterface**: The component for interacting with the AI assistant.
- **ControlConsole**: The component for controlling various aspects of the application.
- **Settings**: The component for managing application settings.
- **Predictions**: The component for displaying election predictions.
- **DataSources**: The component for managing data sources.
- **AgentDeployment**: The component for deploying and managing agents.
- **LibrarySection**: The component for managing reusable components and templates.
- **TacticsSection**: The component for managing civic engagement tactics.

## Development Instructions

To set up the development environment for the frontend, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/ruvnet/Electo1.git
   cd Electo1
   ```

2. **Navigate to the frontend directory**:
   ```sh
   cd frontend
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

4. **Run the development server**:
   ```sh
   npm start
   ```

5. **Open the application in your browser**:
   Open your browser and navigate to `http://localhost:3000`.

## API Details

The frontend interacts with the backend API to fetch and update data. The main API endpoints used by the frontend are:

- **Predictions**: 
  - `POST /api/predictions/`: Create a new prediction
  - `GET /api/predictions/`: List all predictions
  - `GET /api/predictions/{id}`: Get a specific prediction
  - `PUT /api/predictions/{id}`: Update a prediction
  - `DELETE /api/predictions/{id}`: Delete a prediction

- **Data Sources**: 
  - `POST /api/data_sources/`: Add a new data source
  - `GET /api/data_sources/`: List all data sources
  - `GET /api/data_sources/{id}`: Get a specific data source
  - `PUT /api/data_sources/{id}`: Update a data source
  - `DELETE /api/data_sources/{id}`: Delete a data source

- **Agent Deployment**: 
  - `POST /api/agent_deployment/`: Deploy a new agent
  - `GET /api/agent_deployment/`: List all deployed agents
  - `GET /api/agent_deployment/{id}`: Get a specific agent deployment
  - `PUT /api/agent_deployment/{id}`: Update an agent deployment
  - `DELETE /api/agent_deployment/{id}`: Remove an agent deployment

- **Library**: 
  - `POST /api/library/`: Add a new library item
  - `GET /api/library/`: List all library items
  - `GET /api/library/{id}`: Get a specific library item
  - `PUT /api/library/{id}`: Update a library item
  - `DELETE /api/library/{id}`: Delete a library item

- **Settings**: 
  - `POST /api/settings/`: Create a new setting
  - `GET /api/settings/`: List all settings
  - `GET /api/settings/{key}`: Get a specific setting
  - `PUT /api/settings/{key}`: Update a setting
  - `DELETE /api/settings/{key}`: Delete a setting

- **Tactics**: 
  - `POST /api/tactics/`: Create a new tactic
  - `GET /api/tactics/`: List all tactics
  - `GET /api/tactics/{id}`: Get a specific tactic
  - `PUT /api/tactics/{id}`: Update a tactic
  - `DELETE /api/tactics/{id}`: Delete a tactic

## Conclusion

The frontend of the Agentic Election Prediction System is designed to be modular, scalable, and user-friendly. By following the development instructions and understanding the architecture and API details, developers can easily contribute to and extend the functionality of the frontend.
