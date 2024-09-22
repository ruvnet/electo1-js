import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PredictionChart from './PredictionChart';
import SystemStatus from './SystemStatus';
import MapComponent from './MapComponent';
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, BarChart2, Activity, AlertTriangle, Search, Bot } from 'lucide-react';
import ControlPanel from './ControlPanel';
import PredictionCard from './PredictionCard';

const Dashboard = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const predictionData = {
    shortTerm: { candidate: "Candidate A", probability: 0.65, consensus: 0.8, likelihood: 0.75 },
    midTerm: { candidate: "Candidate A", probability: 0.58, consensus: 0.7, likelihood: 0.68 },
    longTerm: { candidate: "Candidate B", probability: 0.52, consensus: 0.6, likelihood: 0.55 },
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-2xl font-mono font-semibold mb-6">Election Prediction Dashboard</h1>
      <ControlPanel setIsAIModalOpen={setIsAIModalOpen} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PredictionCard title="Short-term" data={predictionData.shortTerm} icon={<TrendingUp className="h-4 w-4 text-cyber-green-400" />} />
        <PredictionCard title="Mid-term" data={predictionData.midTerm} icon={<BarChart2 className="h-4 w-4 text-cyber-green-400" />} />
        <PredictionCard title="Long-term" data={predictionData.longTerm} icon={<TrendingDown className="h-4 w-4 text-cyber-green-400" />} />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-cyber-black border-cyber-green-700 col-span-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Prediction Trend</CardTitle>
            <Activity className="h-4 w-4 text-cyber-green-400" />
          </CardHeader>
          <CardContent>
            <PredictionChart />
          </CardContent>
        </Card>
        <SystemStatus />
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Key Metrics</CardTitle>
            <AlertTriangle className="h-4 w-4 text-cyber-green-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs font-mono text-cyber-green-400">
              <div className="flex justify-between items-center">
                <span>Voter Turnout Prediction:</span>
                <span>67%</span>
              </div>
              <Progress value={67} className="bg-cyber-green-900" />
              <div className="flex justify-between items-center">
                <span>Swing State Confidence:</span>
                <span>82%</span>
              </div>
              <Progress value={82} className="bg-cyber-green-900" />
              <div className="flex justify-between items-center">
                <span>Social Media Sentiment:</span>
                <span>58% Positive</span>
              </div>
              <Progress value={58} className="bg-cyber-green-900" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-cyber-green-400 text-sm font-mono">Geographic Prediction Map</CardTitle>
            <svg className="h-4 w-4 text-cyber-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </CardHeader>
          <CardContent>
            <MapComponent />
          </CardContent>
        </Card>
      </div>
      <Dialog open={isAIModalOpen} onOpenChange={setIsAIModalOpen}>
        <DialogContent className="bg-cyber-black border-cyber-green-700">
          <DialogHeader>
            <DialogTitle className="text-cyber-green-400">AI Assistant</DialogTitle>
          </DialogHeader>
          <div className="text-cyber-green-400 text-sm font-mono">
            <p>Welcome to the AI Assistant. How can I help you with election predictions today?</p>
            <ul className="list-disc list-inside mt-2">
              <li>Analyze specific demographic trends</li>
              <li>Compare candidate performances</li>
              <li>Explore historical election data</li>
              <li>Generate custom prediction reports</li>
            </ul>
          </div>
          <Input 
            placeholder="Ask me anything about the election..." 
            className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700 mt-4"
          />
          <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600 mt-2">
            Submit Query
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
