import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgentStatus = () => {
  const agents = [
    { name: 'Data Ingestion', status: 'Active' },
    { name: 'Data Processing', status: 'Active' },
    { name: 'Trend Detection', status: 'Active' },
    { name: 'Model Training', status: 'Active' },
    { name: 'Result Aggregation', status: 'Active' },
  ];

  return (
    <Card className="bg-cyber-black border-cyber-green-700">
      <CardHeader>
        <CardTitle className="text-cyber-green-400 text-sm font-mono">Agent Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {agents.map((agent, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-xs font-mono text-cyber-green-400">{agent.name}</span>
              <span className="text-xs font-mono text-cyber-green-500">{agent.status}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AgentStatus;