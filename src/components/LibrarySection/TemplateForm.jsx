import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Users, DollarSign, Globe, Vote, BrainCircuit, BarChart2, Database } from 'lucide-react';

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
      socioeconomic: {},
      cultural: {},
      political: {},
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

  const tabs = [
    { id: "general", label: "General", icon: Home },
    { id: "agentDeployment", label: "Agent", icon: Users },
    { id: "aiStrategy", label: "AI", icon: BrainCircuit },
    { id: "predictionModel", label: "Prediction", icon: BarChart2 },
    { id: "dataSource", label: "Data", icon: Database },
    { id: "socioeconomic", label: "Socioeconomic", icon: DollarSign },
    { id: "cultural", label: "Cultural", icon: Globe },
    { id: "political", label: "Political", icon: Vote },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <ScrollArea className="h-[calc(90vh-10rem)]">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex flex-col items-center lg:flex-row lg:justify-start">
                <tab.icon className="h-4 w-4 lg:mr-2" />
                <span className="hidden lg:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-4 space-y-4">
            <TabsContent value="general">
              <GeneralFields formData={formData} handleChange={handleChange} handleTypeChange={handleTypeChange} />
            </TabsContent>
            <TabsContent value="agentDeployment">
              <AgentDeploymentFields formData={formData.data.agentDeployment} handleDataChange={handleDataChange} />
            </TabsContent>
            <TabsContent value="aiStrategy">
              <AIStrategyFields formData={formData.data.aiStrategy} handleDataChange={handleDataChange} />
            </TabsContent>
            <TabsContent value="predictionModel">
              <PredictionModelFields formData={formData.data.predictionModel} handleDataChange={handleDataChange} />
            </TabsContent>
            <TabsContent value="dataSource">
              <DataSourceFields formData={formData.data.dataSource} handleDataChange={handleDataChange} />
            </TabsContent>
            <TabsContent value="socioeconomic">
              <SocioeconomicFields formData={formData.data.socioeconomic} handleDataChange={handleDataChange} />
            </TabsContent>
            <TabsContent value="cultural">
              <CulturalFields formData={formData.data.cultural} handleDataChange={handleDataChange} />
            </TabsContent>
            <TabsContent value="political">
              <PoliticalFields formData={formData.data.political} handleDataChange={handleDataChange} />
            </TabsContent>
          </div>
        </Tabs>
      </ScrollArea>
      <Button type="submit" className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600 w-full">
        Save Template
      </Button>
    </form>
  );
};

const GeneralFields = ({ formData, handleChange, handleTypeChange }) => (
  <div className="space-y-4">
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
  </div>
);

const AgentDeploymentFields = ({ formData, handleDataChange }) => (
  <div className="space-y-4">
    <Input
      placeholder="Location"
      value={formData.location || ''}
      onChange={(e) => handleDataChange('agentDeployment', 'location', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
    <Input
      placeholder="Demographic"
      value={formData.demographic || ''}
      onChange={(e) => handleDataChange('agentDeployment', 'demographic', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
  </div>
);

const AIStrategyFields = ({ formData, handleDataChange }) => (
  <div className="space-y-4">
    <Input
      placeholder="AI Model"
      value={formData.model || ''}
      onChange={(e) => handleDataChange('aiStrategy', 'model', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
    <Input
      placeholder="Training Data"
      value={formData.trainingData || ''}
      onChange={(e) => handleDataChange('aiStrategy', 'trainingData', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
    <Label className="text-cyber-green-400">Confidence Threshold</Label>
    <Slider
      min={0}
      max={100}
      step={1}
      value={[formData.confidenceThreshold || 0]}
      onValueChange={(value) => handleDataChange('aiStrategy', 'confidenceThreshold', value[0])}
    />
  </div>
);

const PredictionModelFields = ({ formData, handleDataChange }) => (
  <div className="space-y-4">
    <Select onValueChange={(value) => handleDataChange('predictionModel', 'algorithm', value)} value={formData.algorithm || ''}>
      <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
        <SelectValue placeholder="Select algorithm" />
      </SelectTrigger>
      <SelectContent className="bg-cyber-black border-cyber-green-700">
        <SelectItem value="randomForest" className="text-cyber-green-400">Random Forest</SelectItem>
        <SelectItem value="neuralNetwork" className="text-cyber-green-400">Neural Network</SelectItem>
        <SelectItem value="svm" className="text-cyber-green-400">Support Vector Machine</SelectItem>
      </SelectContent>
    </Select>
    <Input
      placeholder="Features"
      value={formData.features || ''}
      onChange={(e) => handleDataChange('predictionModel', 'features', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
    <Label className="text-cyber-green-400">Accuracy</Label>
    <Slider
      min={0}
      max={100}
      step={1}
      value={[formData.accuracy || 0]}
      onValueChange={(value) => handleDataChange('predictionModel', 'accuracy', value[0])}
    />
  </div>
);

const DataSourceFields = ({ formData, handleDataChange }) => (
  <div className="space-y-4">
    <Select onValueChange={(value) => handleDataChange('dataSource', 'sourceType', value)} value={formData.sourceType || ''}>
      <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
        <SelectValue placeholder="Select source type" />
      </SelectTrigger>
      <SelectContent className="bg-cyber-black border-cyber-green-700">
        <SelectItem value="api" className="text-cyber-green-400">API</SelectItem>
        <SelectItem value="database" className="text-cyber-green-400">Database</SelectItem>
        <SelectItem value="webscraping" className="text-cyber-green-400">Web Scraping</SelectItem>
      </SelectContent>
    </Select>
    <Select onValueChange={(value) => handleDataChange('dataSource', 'updateFrequency', value)} value={formData.updateFrequency || ''}>
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
    <Label className="text-cyber-green-400">Reliability</Label>
    <Slider
      min={0}
      max={100}
      step={1}
      value={[formData.reliability || 0]}
      onValueChange={(value) => handleDataChange('dataSource', 'reliability', value[0])}
    />
  </div>
);

const SocioeconomicFields = ({ formData, handleDataChange }) => (
  <div className="space-y-4">
    <Select onValueChange={(value) => handleDataChange('socioeconomic', 'incomeRange', value)} value={formData.incomeRange || ''}>
      <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
        <SelectValue placeholder="Select income range" />
      </SelectTrigger>
      <SelectContent className="bg-cyber-black border-cyber-green-700">
        <SelectItem value="low" className="text-cyber-green-400">Low Income</SelectItem>
        <SelectItem value="middle" className="text-cyber-green-400">Middle Income</SelectItem>
        <SelectItem value="high" className="text-cyber-green-400">High Income</SelectItem>
      </SelectContent>
    </Select>
    <Input
      placeholder="Occupation"
      value={formData.occupation || ''}
      onChange={(e) => handleDataChange('socioeconomic', 'occupation', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
  </div>
);

const CulturalFields = ({ formData, handleDataChange }) => (
  <div className="space-y-4">
    <Input
      placeholder="Ethnicity"
      value={formData.ethnicity || ''}
      onChange={(e) => handleDataChange('cultural', 'ethnicity', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
    <Input
      placeholder="Language"
      value={formData.language || ''}
      onChange={(e) => handleDataChange('cultural', 'language', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
  </div>
);

const PoliticalFields = ({ formData, handleDataChange }) => (
  <div className="space-y-4">
    <Select onValueChange={(value) => handleDataChange('political', 'affiliation', value)} value={formData.affiliation || ''}>
      <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
        <SelectValue placeholder="Select political affiliation" />
      </SelectTrigger>
      <SelectContent className="bg-cyber-black border-cyber-green-700">
        <SelectItem value="democrat" className="text-cyber-green-400">Democrat</SelectItem>
        <SelectItem value="republican" className="text-cyber-green-400">Republican</SelectItem>
        <SelectItem value="independent" className="text-cyber-green-400">Independent</SelectItem>
      </SelectContent>
    </Select>
    <Input
      placeholder="Key Issues"
      value={formData.keyIssues || ''}
      onChange={(e) => handleDataChange('political', 'keyIssues', e.target.value)}
      className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
    />
  </div>
);

export default TemplateForm;
