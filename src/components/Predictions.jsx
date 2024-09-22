import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PredictionChart from './PredictionChart';
import PredictionList from './PredictionList';

const Predictions = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-xl font-mono font-semibold mb-4">Election Predictions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Short-term Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <PredictionChart />
          </CardContent>
        </Card>
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Long-term Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <PredictionChart />
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <PredictionList />
      </div>
    </div>
  );
};

export default Predictions;