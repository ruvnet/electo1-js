import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AIInterface = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-cyber-bg">
      <h1 className="text-xl font-mono font-semibold text-cyber-green-400 mb-6">AI Interface</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">AI Query</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Enter your query here" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700 mb-4" />
            <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">Submit Query</Button>
          </CardContent>
        </Card>
        <Card className="bg-cyber-black border-cyber-green-700">
          <CardHeader>
            <CardTitle className="text-cyber-green-400 text-sm font-mono">AI Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-cyber-green-400 text-xs font-mono">AI response will appear here...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIInterface;
