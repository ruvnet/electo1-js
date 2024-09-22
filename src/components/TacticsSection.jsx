import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

const TacticsSection = () => {
  const [tactics, setTactics] = useState([]);
  const [newTactic, setNewTactic] = useState({
    name: '',
    targetDemographic: '',
    description: '',
    implementationMethod: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTactic(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setNewTactic(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTactics(prev => [...prev, newTactic]);
    setNewTactic({
      name: '',
      targetDemographic: '',
      description: '',
      implementationMethod: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-cyber-bg">
      <h1 className="text-xl font-mono font-semibold text-cyber-green-400 mb-6">Civic Engagement Tactics</h1>
      <Card className="bg-cyber-black border-cyber-green-700">
        <CardHeader>
          <CardTitle className="text-cyber-green-400 text-lg font-mono">Create New Tactic</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <Label htmlFor="name" className="text-cyber-green-400">Tactic Name</Label>
              <Input
                id="name"
                name="name"
                value={newTactic.name}
                onChange={handleInputChange}
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
                placeholder="e.g., Community Town Hall"
              />
            </div>
            <div>
              <Label htmlFor="targetDemographic" className="text-cyber-green-400">Target Demographic</Label>
              <Select
                onValueChange={(value) => handleSelectChange('targetDemographic', value)}
                value={newTactic.targetDemographic}
              >
                <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                  <SelectValue placeholder="Select target demographic" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-black border-cyber-green-700">
                  <SelectItem value="youth" className="text-cyber-green-400">Youth (18-29)</SelectItem>
                  <SelectItem value="seniors" className="text-cyber-green-400">Seniors (65+)</SelectItem>
                  <SelectItem value="minorities" className="text-cyber-green-400">Minority Communities</SelectItem>
                  <SelectItem value="suburban" className="text-cyber-green-400">Suburban Residents</SelectItem>
                  <SelectItem value="rural" className="text-cyber-green-400">Rural Communities</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description" className="text-cyber-green-400">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={newTactic.description}
                onChange={handleInputChange}
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
                placeholder="Describe the tactic and its goals"
              />
            </div>
            <div>
              <Label htmlFor="implementationMethod" className="text-cyber-green-400">Implementation Method</Label>
              <Select
                onValueChange={(value) => handleSelectChange('implementationMethod', value)}
                value={newTactic.implementationMethod}
              >
                <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                  <SelectValue placeholder="Select implementation method" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-black border-cyber-green-700">
                  <SelectItem value="digital" className="text-cyber-green-400">Digital Campaign</SelectItem>
                  <SelectItem value="grassroots" className="text-cyber-green-400">Grassroots Organizing</SelectItem>
                  <SelectItem value="media" className="text-cyber-green-400">Media Outreach</SelectItem>
                  <SelectItem value="event" className="text-cyber-green-400">Community Event</SelectItem>
                  <SelectItem value="door-to-door" className="text-cyber-green-400">Door-to-Door Canvassing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
              Add Tactic
            </Button>
          </form>
          <ScrollArea className="h-[300px] w-full rounded-md border border-cyber-green-700 p-4">
            <h3 className="text-cyber-green-400 font-mono mb-2">Saved Tactics</h3>
            {tactics.map((tactic, index) => (
              <Card key={index} className="bg-cyber-bg border-cyber-green-700 mb-2 p-2">
                <h4 className="text-cyber-green-400 font-mono">{tactic.name}</h4>
                <p className="text-cyber-green-400 text-sm">Target: {tactic.targetDemographic}</p>
                <p className="text-cyber-green-400 text-sm">Method: {tactic.implementationMethod}</p>
              </Card>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default TacticsSection;
