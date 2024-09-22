import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AIInterface = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">AI Interface</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Query</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Enter your query here" className="mb-4" />
            <Button>Submit Query</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">AI response will appear here...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIInterface;