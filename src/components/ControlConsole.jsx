import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ControlConsole = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Control Console</h1>
      <Card>
        <CardHeader>
          <CardTitle>System Commands</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Enter command" className="mb-4" />
          <Button>Execute</Button>
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <p className="font-mono">Command output will appear here...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ControlConsole;