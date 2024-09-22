import React from 'react';
import PredictionChart from './PredictionChart';
import PredictionList from './PredictionList';
import SystemStatus from './SystemStatus';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Election Prediction Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PredictionChart />
        <SystemStatus />
      </div>
      <div className="mt-8">
        <PredictionList />
      </div>
    </div>
  );
};

export default Dashboard;