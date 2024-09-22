import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PredictionChart from './PredictionChart';
import PredictionList from './PredictionList';
import PredictionControlPanel from './PredictionControlPanel';
import PredictionModal from './PredictionModal';
import TacticsSection from './TacticsSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Predictions = () => {
  const [predictionParams, setPredictionParams] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleParamChange = (newParams) => {
    setPredictionParams({ ...predictionParams, ...newParams });
  };

  const handleGeneratePrediction = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-xl font-mono font-semibold mb-4">Election Predictions and Tactics</h1>
      <PredictionControlPanel onParamChange={handleParamChange} />
      <div className="mt-4">
        <Button onClick={handleGeneratePrediction} className="w-full sm:w-auto bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
          Generate Prediction
        </Button>
      </div>
      <Tabs defaultValue="predictions" className="mt-6">
        <TabsList>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="tactics">Tactics</TabsTrigger>
        </TabsList>
        <TabsContent value="predictions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400 text-sm font-mono">Short-term Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <PredictionChart />
              </CardContent>
            </Card>
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400 text-sm font-mono">Long-term Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <PredictionChart />
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <PredictionList params={predictionParams} />
          </div>
        </TabsContent>
        <TabsContent value="tactics">
          <TacticsSection />
        </TabsContent>
      </Tabs>
      <PredictionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} params={predictionParams} />
    </div>
  );
};

export default Predictions;
