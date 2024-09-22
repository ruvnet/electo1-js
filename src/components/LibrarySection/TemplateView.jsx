import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TemplateView = ({ item }) => {
  return (
    <Card className="bg-cyber-black border-cyber-green-700">
      <CardHeader>
        <CardTitle className="text-cyber-green-400">{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-cyber-green-400 mb-2">Type: {item.type}</p>
        <p className="text-cyber-green-400 mb-4">{item.description}</p>
        <h3 className="text-cyber-green-400 font-semibold mb-2">Template Data:</h3>
        <pre className="bg-cyber-bg p-2 rounded text-cyber-green-400 overflow-x-auto">
          {JSON.stringify(item.data, null, 2)}
        </pre>
      </CardContent>
    </Card>
  );
};

export default TemplateView;