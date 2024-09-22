import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TemplateView = ({ item }) => {
  return (
    <Card className="bg-cyber-black border-cyber-green-700">
      <CardHeader>
        <CardTitle className="text-cyber-green-400">{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-cyber-green-400 mb-2">Type: {item.type}</p>
        <p className="text-cyber-green-400 mb-4">{item.description}</p>
        <Tabs defaultValue="agentDeployment" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="agentDeployment">Agent Deployment</TabsTrigger>
            <TabsTrigger value="aiStrategy">AI Strategy</TabsTrigger>
            <TabsTrigger value="predictionModel">Prediction Model</TabsTrigger>
            <TabsTrigger value="dataSource">Data Source</TabsTrigger>
          </TabsList>
          <TabsContent value="agentDeployment">
            <div className="space-y-2">
              <p><strong>Location:</strong> {item.data.agentDeployment?.location || 'N/A'}</p>
              <p><strong>Demographic:</strong> {item.data.agentDeployment?.demographic || 'N/A'}</p>
              <p><strong>Political Affiliation:</strong> {item.data.agentDeployment?.politicalAffiliation || 'N/A'}</p>
            </div>
          </TabsContent>
          <TabsContent value="aiStrategy">
            <div className="space-y-2">
              <p><strong>AI Model:</strong> {item.data.aiStrategy?.model || 'N/A'}</p>
              <p><strong>Training Data:</strong> {item.data.aiStrategy?.trainingData || 'N/A'}</p>
              <p><strong>Confidence Threshold:</strong> {item.data.aiStrategy?.confidenceThreshold || 'N/A'}</p>
            </div>
          </TabsContent>
          <TabsContent value="predictionModel">
            <div className="space-y-2">
              <p><strong>Algorithm:</strong> {item.data.predictionModel?.algorithm || 'N/A'}</p>
              <p><strong>Features:</strong> {item.data.predictionModel?.features || 'N/A'}</p>
              <p><strong>Accuracy:</strong> {item.data.predictionModel?.accuracy || 'N/A'}</p>
            </div>
          </TabsContent>
          <TabsContent value="dataSource">
            <div className="space-y-2">
              <p><strong>Source Type:</strong> {item.data.dataSource?.sourceType || 'N/A'}</p>
              <p><strong>Update Frequency:</strong> {item.data.dataSource?.updateFrequency || 'N/A'}</p>
              <p><strong>Reliability:</strong> {item.data.dataSource?.reliability || 'N/A'}</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TemplateView;
