import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PredictionChart from './PredictionChart';
import SystemStatus from './SystemStatus';
import AgentStatus from './AgentStatus';
import DataSourceStatus from './DataSourceStatus';
import RecentActivity from './RecentActivity';
import MapComponent from './MapComponent';
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Dashboard = () => {
  const keyMetrics = {
    voterTurnout: "67%",
    swingStateConfidence: "82%",
    socialMediaSentiment: "58% Positive",
  };

  const dataSourceSummary = {
    pollingData: 15,
    socialMediaFeeds: 5,
    newsArticles: 25,
    historicalElectionData: "10 years",
  };

  const aiModelPerformance = {
    accuracy: "92%",
    lastTrained: "2 hours ago",
    confidenceScore: 0.87,
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-2xl font-mono font-semibold mb-6">Agentic Election Prediction System Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-cyber-black border-cyber-green-700 col-span-full">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Election Prediction Map</CardTitle>
          </CardHeader>
          <CardContent>
            <MapComponent />
          </CardContent>
        </Card>
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
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-xs font-mono">Voter Turnout Prediction: {keyMetrics.voterTurnout}</p>
              <p className="text-xs font-mono">Swing State Confidence: {keyMetrics.swingStateConfidence}</p>
              <p className="text-xs font-mono">Social Media Sentiment: {keyMetrics.socialMediaSentiment}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Prediction Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono mb-1 block">Region</label>
                <Select>
                  <option>National</option>
                  <option>State-level</option>
                  <option>County-level</option>
                </Select>
              </div>
              <div>
                <label className="text-xs font-mono mb-1 block">Time Range</label>
                <Slider defaultValue={[30]} max={365} step={1} />
              </div>
            </div>
          </CardContent>
        </Card>
        <RecentActivity />
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Data Source Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-xs font-mono space-y-1">
              <li>Polling Data: {dataSourceSummary.pollingData} sources</li>
              <li>Social Media Feeds: {dataSourceSummary.socialMediaFeeds} platforms</li>
              <li>News Articles: {dataSourceSummary.newsArticles} outlets</li>
              <li>Historical Election Data: {dataSourceSummary.historicalElectionData}</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">AI Model Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs font-mono">
              <p>Accuracy: {aiModelPerformance.accuracy}</p>
              <p>Last Trained: {aiModelPerformance.lastTrained}</p>
              <p>Confidence Score: {aiModelPerformance.confidenceScore}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
