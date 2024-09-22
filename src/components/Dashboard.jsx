import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PredictionChart from './PredictionChart';
import PredictionList from './PredictionList';
import SystemStatus from './SystemStatus';
import AgentStatus from './AgentStatus';
import DataSourceStatus from './DataSourceStatus';
import RecentActivity from './RecentActivity';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-2xl font-mono font-semibold mb-6">Agentic Election Prediction System Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Current Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <PredictionChart />
          </CardContent>
        </Card>
        <SystemStatus />
        <AgentStatus />
        <DataSourceStatus />
        <Card className="bg-cyber-black border-cyber-green-700 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Recent Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            <PredictionList />
          </CardContent>
        </Card>
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
