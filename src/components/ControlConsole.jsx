import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ControlConsole = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-cyber-bg">
      <h1 className="text-xl font-mono font-semibold text-cyber-green-400 mb-6">Control Console</h1>
      <Card className="bg-cyber-black border-cyber-green-700">
        <CardHeader>
          <CardTitle className="text-cyber-green-400 text-sm font-mono">System Commands</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Enter command" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700 mb-4" />
          <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">Execute</Button>
          <div className="mt-4 bg-cyber-bg p-4 rounded border border-cyber-green-700">
            <p className="font-mono text-xs text-cyber-green-400">Command output will appear here...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ControlConsole;
