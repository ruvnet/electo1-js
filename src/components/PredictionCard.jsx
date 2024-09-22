import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PredictionCard = ({ title, data, icon }) => (
  <Card className="bg-cyber-black border-cyber-green-700">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-cyber-green-400 text-sm font-mono">{title} Forecast</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-xs font-mono text-cyber-green-400">
        <p>Leading: {data.candidate}</p>
        <div className="flex justify-between items-center">
          <span>Probability:</span>
          <span>{(data.probability * 100).toFixed(1)}%</span>
        </div>
        <Progress value={data.probability * 100} className="bg-cyber-green-900" />
        <div className="flex justify-between items-center">
          <span>Consensus:</span>
          <span>{(data.consensus * 100).toFixed(1)}%</span>
        </div>
        <Progress value={data.consensus * 100} className="bg-cyber-green-900" />
        <div className="flex justify-between items-center">
          <span>Likelihood:</span>
          <span>{(data.likelihood * 100).toFixed(1)}%</span>
        </div>
        <Progress value={data.likelihood * 100} className="bg-cyber-green-900" />
      </div>
    </CardContent>
  </Card>
);

export default PredictionCard;