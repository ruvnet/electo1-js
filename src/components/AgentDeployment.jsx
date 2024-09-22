import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { MapPin, Users, DollarSign, Globe, Vote } from 'lucide-react';
import LocationTab from './AgentDeployment/LocationTab';
import DemographicTab from './AgentDeployment/DemographicTab';
import SocioeconomicTab from './AgentDeployment/SocioeconomicTab';
import CulturalTab from './AgentDeployment/CulturalTab';
import PoliticalTab from './AgentDeployment/PoliticalTab';

const AgentDeployment = () => {
  const [deploymentConfig, setDeploymentConfig] = useState({});

  const handleInputChange = (field, value) => {
    setDeploymentConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleDeploy = () => {
    console.log('Deploying agent with config:', deploymentConfig);
  };

  const tabs = [
    { id: "location", label: "Location", icon: MapPin },
    { id: "demographic", label: "Demographic", icon: Users },
    { id: "socioeconomic", label: "Socioeconomic", icon: DollarSign },
    { id: "cultural", label: "Cultural", icon: Globe },
    { id: "political", label: "Political", icon: Vote },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-2xl font-mono font-semibold mb-6">Agent Deployment</h1>
      <Card className="bg-cyber-black border-cyber-green-700">
        <CardHeader>
          <CardTitle className="text-cyber-green-400 text-lg font-mono">Configure Agent Deployment</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="location" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-cyber-green-900">
              {tabs.map(tab => (
                <TabsTrigger key={tab.id} value={tab.id} className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">
                  <tab.icon className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollArea className="h-[400px] mt-4">
              <TabsContent value="location">
                <LocationTab handleInputChange={handleInputChange} />
              </TabsContent>
              <TabsContent value="demographic">
                <DemographicTab handleInputChange={handleInputChange} />
              </TabsContent>
              <TabsContent value="socioeconomic">
                <SocioeconomicTab handleInputChange={handleInputChange} />
              </TabsContent>
              <TabsContent value="cultural">
                <CulturalTab handleInputChange={handleInputChange} />
              </TabsContent>
              <TabsContent value="political">
                <PoliticalTab handleInputChange={handleInputChange} />
              </TabsContent>
            </ScrollArea>
          </Tabs>
          <Button className="w-full mt-6 bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600" onClick={handleDeploy}>
            Deploy Agent
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentDeployment;
