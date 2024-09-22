import React from 'react';
import PredictionChart from './PredictionChart';
import PredictionList from './PredictionList';
import SystemStatus from './SystemStatus';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-black text-cyber-green-400">
      <h1 className="text-xl font-mono font-semibold mb-4">Election Hack Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PredictionChart />
        <SystemStatus />
      </div>
      <div className="mt-6">
        <PredictionList />
      </div>
    </div>
  );
};

export default Dashboard;
