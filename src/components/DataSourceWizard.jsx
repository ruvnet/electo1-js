import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Globe, FileJson, Rss, Cpu, Clock, Check } from 'lucide-react';

const DataSourceWizard = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    url: '',
    method: 'GET',
    frequency: 'daily',
  });

  const steps = [
    { id: 'type', label: 'Source Type', icon: Globe },
    { id: 'details', label: 'Source Details', icon: FileJson },
    { id: 'schedule', label: 'Schedule', icon: Clock },
    { id: 'review', label: 'Review', icon: Check },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <Tabs value={steps[currentStep].id} className="flex-grow">
        <TabsList className="grid w-full grid-cols-4 bg-cyber-green-900">
          {steps.map((step, index) => (
            <TabsTrigger
              key={step.id}
              value={step.id}
              disabled={index !== currentStep}
              className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700"
            >
              <step.icon className="h-4 w-4 mr-2 sm:mr-0 md:mr-2" />
              <span className="hidden sm:inline">{step.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollArea className="flex-grow mt-4">
          <TabsContent value="type" className="h-full">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400">Select Data Source Type</CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                    <SelectValue placeholder="Choose a data source type" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-black border-cyber-green-700">
                    <SelectItem value="web" className="text-cyber-green-400">Web Scraping</SelectItem>
                    <SelectItem value="api" className="text-cyber-green-400">API</SelectItem>
                    <SelectItem value="rss" className="text-cyber-green-400">RSS Feed</SelectItem>
                    <SelectItem value="ai" className="text-cyber-green-400">AI Processing</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="details" className="h-full">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400">Enter Source Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-cyber-green-400">Source Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
                  />
                </div>
                <div>
                  <Label htmlFor="url" className="text-cyber-green-400">URL</Label>
                  <Input
                    id="url"
                    value={formData.url}
                    onChange={(e) => handleInputChange('url', e.target.value)}
                    className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
                  />
                </div>
                {formData.type === 'api' && (
                  <div>
                    <Label htmlFor="method" className="text-cyber-green-400">HTTP Method</Label>
                    <Select onValueChange={(value) => handleInputChange('method', value)}>
                      <SelectTrigger id="method" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                        <SelectValue placeholder="Select HTTP method" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-black border-cyber-green-700">
                        <SelectItem value="GET" className="text-cyber-green-400">GET</SelectItem>
                        <SelectItem value="POST" className="text-cyber-green-400">POST</SelectItem>
                        <SelectItem value="PUT" className="text-cyber-green-400">PUT</SelectItem>
                        <SelectItem value="DELETE" className="text-cyber-green-400">DELETE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="schedule" className="h-full">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400">Set Collection Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => handleInputChange('frequency', value)}>
                  <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                    <SelectValue placeholder="Choose collection frequency" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-black border-cyber-green-700">
                    <SelectItem value="hourly" className="text-cyber-green-400">Hourly</SelectItem>
                    <SelectItem value="daily" className="text-cyber-green-400">Daily</SelectItem>
                    <SelectItem value="weekly" className="text-cyber-green-400">Weekly</SelectItem>
                    <SelectItem value="monthly" className="text-cyber-green-400">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="review" className="h-full">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400">Review Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="font-bold">Name:</span> {formData.name}</p>
                  <p><span className="font-bold">Type:</span> {formData.type}</p>
                  <p><span className="font-bold">URL:</span> {formData.url}</p>
                  {formData.type === 'api' && <p><span className="font-bold">Method:</span> {formData.method}</p>}
                  <p><span className="font-bold">Frequency:</span> {formData.frequency}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </ScrollArea>
      </Tabs>
      <div className="mt-4 flex justify-between">
        <Button onClick={handleBack} disabled={currentStep === 0} className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
          Back
        </Button>
        <Button onClick={handleNext} className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
          {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default DataSourceWizard;
