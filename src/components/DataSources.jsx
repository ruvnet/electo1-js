import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataSources = () => {
  const sources = [
    { name: 'Polling Data', status: 'Connected' },
    { name: 'Social Media Trends', status: 'Connected' },
    { name: 'Demographic Information', status: 'Connected' },
    { name: 'Historical Election Results', status: 'Connected' },
    { name: 'Economic Indicators', status: 'Pending' },
  ];

  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-xl font-mono font-semibold mb-4">Data Sources</h1>
      <Card className="bg-cyber-black border-cyber-green-700">
        <CardHeader>
          <CardTitle className="text-cyber-green-400 text-sm font-mono">Connected Data Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {sources.map((source, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-xs font-mono text-cyber-green-400">{source.name}</span>
                <span className={`text-xs font-mono ${source.status === 'Connected' ? 'text-cyber-green-500' : 'text-yellow-500'}`}>
                  {source.status}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataSources;