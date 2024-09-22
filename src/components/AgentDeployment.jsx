import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";

const AgentDeployment = () => {
  const [deploymentConfig, setDeploymentConfig] = useState({
    location: '',
    demographic: '',
    socioeconomic: '',
    cultural: '',
    political: '',
    dataPoints: [],
  });

  const handleInputChange = (field, value) => {
    setDeploymentConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleDeploy = () => {
    console.log('Deploying agent with config:', deploymentConfig);
    // Here you would typically send this configuration to your backend
  };

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
              <TabsTrigger value="location" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">Location</TabsTrigger>
              <TabsTrigger value="demographic" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">Demographic</TabsTrigger>
              <TabsTrigger value="socioeconomic" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">Socioeconomic</TabsTrigger>
              <TabsTrigger value="cultural" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">Cultural</TabsTrigger>
              <TabsTrigger value="political" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">Political</TabsTrigger>
            </TabsList>
            <ScrollArea className="h-[400px] mt-4">
              <TabsContent value="location">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="country" className="text-cyber-green-400">Country</Label>
                    <Select onValueChange={(value) => handleInputChange('country', value)}>
                      <SelectTrigger id="country" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-black border-cyber-green-700">
                        <SelectItem value="usa" className="text-cyber-green-400">USA</SelectItem>
                        <SelectItem value="canada" className="text-cyber-green-400">Canada</SelectItem>
                        <SelectItem value="uk" className="text-cyber-green-400">UK</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-cyber-green-400">State/Province</Label>
                    <Input id="state" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('state', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-cyber-green-400">City</Label>
                    <Input id="city" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('city', e.target.value)} />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="demographic">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="age-range" className="text-cyber-green-400">Age Range</Label>
                    <Select onValueChange={(value) => handleInputChange('ageRange', value)}>
                      <SelectTrigger id="age-range" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-black border-cyber-green-700">
                        <SelectItem value="18-24" className="text-cyber-green-400">18-24</SelectItem>
                        <SelectItem value="25-34" className="text-cyber-green-400">25-34</SelectItem>
                        <SelectItem value="35-44" className="text-cyber-green-400">35-44</SelectItem>
                        <SelectItem value="45-54" className="text-cyber-green-400">45-54</SelectItem>
                        <SelectItem value="55+" className="text-cyber-green-400">55+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="gender" className="text-cyber-green-400">Gender</Label>
                    <Select onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger id="gender" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-black border-cyber-green-700">
                        <SelectItem value="male" className="text-cyber-green-400">Male</SelectItem>
                        <SelectItem value="female" className="text-cyber-green-400">Female</SelectItem>
                        <SelectItem value="non-binary" className="text-cyber-green-400">Non-binary</SelectItem>
                        <SelectItem value="other" className="text-cyber-green-400">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="socioeconomic">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="income" className="text-cyber-green-400">Income Range</Label>
                    <Select onValueChange={(value) => handleInputChange('income', value)}>
                      <SelectTrigger id="income" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-black border-cyber-green-700">
                        <SelectItem value="low" className="text-cyber-green-400">Low Income</SelectItem>
                        <SelectItem value="middle" className="text-cyber-green-400">Middle Income</SelectItem>
                        <SelectItem value="high" className="text-cyber-green-400">High Income</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="education" className="text-cyber-green-400">Education Level</Label>
                    <Select onValueChange={(value) => handleInputChange('education', value)}>
                      <SelectTrigger id="education" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-black border-cyber-green-700">
                        <SelectItem value="high-school" className="text-cyber-green-400">High School</SelectItem>
                        <SelectItem value="bachelors" className="text-cyber-green-400">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters" className="text-cyber-green-400">Master's Degree</SelectItem>
                        <SelectItem value="phd" className="text-cyber-green-400">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="cultural">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="ethnicity" className="text-cyber-green-400">Ethnicity</Label>
                    <Input id="ethnicity" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('ethnicity', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="religion" className="text-cyber-green-400">Religious Affiliation</Label>
                    <Input id="religion" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('religion', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="lgbtq" className="text-cyber-green-400">LGBTQ+ Identity</Label>
                    <Select onValueChange={(value) => handleInputChange('lgbtq', value)}>
                      <SelectTrigger id="lgbtq" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                        <SelectValue placeholder="Select LGBTQ+ identity" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-black border-cyber-green-700">
                        <SelectItem value="yes" className="text-cyber-green-400">Yes</SelectItem>
                        <SelectItem value="no" className="text-cyber-green-400">No</SelectItem>
                        <SelectItem value="prefer-not-to-say" className="text-cyber-green-400">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="political">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="political-affiliation" className="text-cyber-green-400">Political Affiliation</Label>
                    <Select onValueChange={(value) => handleInputChange('politicalAffiliation', value)}>
                      <SelectTrigger id="political-affiliation" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                        <SelectValue placeholder="Select political affiliation" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-black border-cyber-green-700">
                        <SelectItem value="democrat" className="text-cyber-green-400">Democrat</SelectItem>
                        <SelectItem value="republican" className="text-cyber-green-400">Republican</SelectItem>
                        <SelectItem value="independent" className="text-cyber-green-400">Independent</SelectItem>
                        <SelectItem value="other" className="text-cyber-green-400">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ideology" className="text-cyber-green-400">Political Ideology</Label>
                    <Slider
                      id="ideology"
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => handleInputChange('ideology', value[0])}
                    />
                    <div className="flex justify-between text-xs mt-1">
                      <span>Liberal</span>
                      <span>Moderate</span>
                      <span>Conservative</span>
                    </div>
                  </div>
                </div>
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