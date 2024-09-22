import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const TemplateForm = ({ item, onSave }) => {
  const [formData, setFormData] = useState(item || {
    name: '',
    type: '',
    description: '',
    data: {
      agentDeployment: {},
      aiStrategy: {},
      predictionModel: {},
      dataSource: {},
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (value) => {
    setFormData(prev => ({ ...prev, type: value }));
  };

  const handleDataChange = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [category]: {
          ...prev.data[category],
          [field]: value
        }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-cyber-green-400">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
        />
      </div>
      <div>
        <Label htmlFor="type" className="text-cyber-green-400">Type</Label>
        <Select onValueChange={handleTypeChange} value={formData.type}>
          <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent className="bg-cyber-black border-cyber-green-700">
            <SelectItem value="Agent Deployment" className="text-cyber-green-400">Agent Deployment</SelectItem>
            <SelectItem value="AI Strategy" className="text-cyber-green-400">AI Strategy</SelectItem>
            <SelectItem value="Prediction Model" className="text-cyber-green-400">Prediction Model</SelectItem>
            <SelectItem value="Data Source" className="text-cyber-green-400">Data Source</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="description" className="text-cyber-green-400">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
        />
      </div>
      <Tabs defaultValue="agentDeployment" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="agentDeployment">Agent Deployment</TabsTrigger>
          <TabsTrigger value="aiStrategy">AI Strategy</TabsTrigger>
          <TabsTrigger value="predictionModel">Prediction Model</TabsTrigger>
          <TabsTrigger value="dataSource">Data Source</TabsTrigger>
        </TabsList>
        <TabsContent value="agentDeployment">
          <div className="space-y-4">
            <div>
              <Label htmlFor="location" className="text-cyber-green-400">Location</Label>
              <Input
                id="location"
                value={formData.data.agentDeployment.location || ''}
                onChange={(e) => handleDataChange('agentDeployment', 'location', e.target.value)}
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
              />
            </div>
            <div>
              <Label htmlFor="demographic" className="text-cyber-green-400">Demographic</Label>
              <Input
                id="demographic"
                value={formData.data.agentDeployment.demographic || ''}
                onChange={(e) => handleDataChange('agentDeployment', 'demographic', e.target.value)}
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
              />
            </div>
            <div>
              <Label htmlFor="politicalAffiliation" className="text-cyber-green-400">Political Affiliation</Label>
              <Select
                onValueChange={(value) => handleDataChange('agentDeployment', 'politicalAffiliation', value)}
                value={formData.data.agentDeployment.politicalAffiliation || ''}
              >
                <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                  <SelectValue placeholder="Select affiliation" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-black border-cyber-green-700">
                  <SelectItem value="democrat" className="text-cyber-green-400">Democrat</SelectItem>
                  <SelectItem value="republican" className="text-cyber-green-400">Republican</SelectItem>
                  <SelectItem value="independent" className="text-cyber-green-400">Independent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="aiStrategy">
          <div className="space-y-4">
            <div>
              <Label htmlFor="model" className="text-cyber-green-400">AI Model</Label>
              <Input
                id="model"
                value={formData.data.aiStrategy.model || ''}
                onChange={(e) => handleDataChange('aiStrategy', 'model', e.target.value)}
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
              />
            </div>
            <div>
              <Label htmlFor="trainingData" className="text-cyber-green-400">Training Data</Label>
              <Input
                id="trainingData"
                value={formData.data.aiStrategy.trainingData || ''}
                onChange={(e) => handleDataChange('aiStrategy', 'trainingData', e.target.value)}
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
              />
            </div>
            <div>
              <Label htmlFor="confidenceThreshold" className="text-cyber-green-400">Confidence Threshold</Label>
              <Slider
                id="confidenceThreshold"
                min={0}
                max={100}
                step={1}
                value={[formData.data.aiStrategy.confidenceThreshold || 0]}
                onValueChange={(value) => handleDataChange('aiStrategy', 'confidenceThreshold', value[0])}
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="predictionModel">
          <div className="space-y-4">
            <div>
              <Label htmlFor="algorithm" className="text-cyber-green-400">Algorithm</Label>
              <Select
                onValueChange={(value) => handleDataChange('predictionModel', 'algorithm', value)}
                value={formData.data.predictionModel.algorithm || ''}
              >
                <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                  <SelectValue placeholder="Select algorithm" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-black border-cyber-green-700">
                  <SelectItem value="randomForest" className="text-cyber-green-400">Random Forest</SelectItem>
                  <SelectItem value="neuralNetwork" className="text-cyber-green-400">Neural Network</SelectItem>
                  <SelectItem value="svm" className="text-cyber-green-400">Support Vector Machine</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="features" className="text-cyber-green-400">Features</Label>
              <Input
                id="features"
                value={formData.data.predictionModel.features || ''}
                onChange={(e) => handleDataChange('predictionModel', 'features', e.target.value)}
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
              />
            </div>
            <div>
              <Label htmlFor="accuracy" className="text-cyber-green-400">Accuracy</Label>
              <Slider
                id="accuracy"
                min={0}
                max={100}
                step={1}
                value={[formData.data.predictionModel.accuracy || 0]}
                onValueChange={(value) => handleDataChange('predictionModel', 'accuracy', value[0])}
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="dataSource">
          <div className="space-y-4">
            <div>
              <Label htmlFor="sourceType" className="text-cyber-green-400">Source Type</Label>
              <Select
                onValueChange={(value) => handleDataChange('dataSource', 'sourceType', value)}
                value={formData.data.dataSource.sourceType || ''}
              >
                <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                  <SelectValue placeholder="Select source type" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-black border-cyber-green-700">
                  <SelectItem value="api" className="text-cyber-green-400">API</SelectItem>
                  <SelectItem value="database" className="text-cyber-green-400">Database</SelectItem>
                  <SelectItem value="webscraping" className="text-cyber-green-400">Web Scraping</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="updateFrequency" className="text-cyber-green-400">Update Frequency</Label>
              <Select
                onValueChange={(value) => handleDataChange('dataSource', 'updateFrequency', value)}
                value={formData.data.dataSource.updateFrequency || ''}
              >
                <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                  <SelectValue placeholder="Select update frequency" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-black border-cyber-green-700">
                  <SelectItem value="realtime" className="text-cyber-green-400">Real-time</SelectItem>
                  <SelectItem value="hourly" className="text-cyber-green-400">Hourly</SelectItem>
                  <SelectItem value="daily" className="text-cyber-green-400">Daily</SelectItem>
                  <SelectItem value="weekly" className="text-cyber-green-400">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="reliability" className="text-cyber-green-400">Reliability</Label>
              <Slider
                id="reliability"
                min={0}
                max={100}
                step={1}
                value={[formData.data.dataSource.reliability || 0]}
                onValueChange={(value) => handleDataChange('dataSource', 'reliability', value[0])}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <Button type="submit" className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
        Save Template
      </Button>
    </form>
  );
};

export default TemplateForm;
