import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PredictionChart from './PredictionChart';
import SystemStatus from './SystemStatus';
import MapComponent from './MapComponent';
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const predictionData = {
    shortTerm: { candidate: "Candidate A", probability: 0.65, consensus: 0.8, likelihood: 0.75 },
    midTerm: { candidate: "Candidate A", probability: 0.58, consensus: 0.7, likelihood: 0.68 },
    longTerm: { candidate: "Candidate B", probability: 0.52, consensus: 0.6, likelihood: 0.55 },
  };

  const renderPredictionCard = (title, data) => (
    <Card className="bg-cyber-black border-cyber-green-700">
      <CardHeader>
        <CardTitle className="text-cyber-green-400 text-sm font-mono">{title} Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-xs font-mono">
          <p>Leading: {data.candidate}</p>
          <p>Probability: {(data.probability * 100).toFixed(1)}%</p>
          <p>Consensus: {(data.consensus * 100).toFixed(1)}%</p>
          <p>Likelihood: {(data.likelihood * 100).toFixed(1)}%</p>
          <Progress value={data.probability * 100} className="bg-cyber-green-900" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-2xl font-mono font-semibold mb-6">Election Prediction Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderPredictionCard("Short-term", predictionData.shortTerm)}
        {renderPredictionCard("Mid-term", predictionData.midTerm)}
        {renderPredictionCard("Long-term", predictionData.longTerm)}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-cyber-black border-cyber-green-700 col-span-full">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Prediction Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <PredictionChart />
          </CardContent>
        </Card>
        <SystemStatus />
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs font-mono">
              <p>Voter Turnout Prediction: 67%</p>
              <p>Swing State Confidence: 82%</p>
              <p>Social Media Sentiment: 58% Positive</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Geographic Prediction Map</CardTitle>
          </CardHeader>
          <CardContent>
            <MapComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
