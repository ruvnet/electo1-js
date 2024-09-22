import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Bot } from 'lucide-react';

const ControlPanel = ({ setIsAIModalOpen }) => {
  return (
    <Card className="bg-cyber-black border-cyber-green-700 mb-6">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">Search</label>
            <div className="flex">
              <Input 
                placeholder="Search candidates, districts..." 
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
              />
              <Button className="ml-2 bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">Filter</label>
            <Select className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
              <option value="">All</option>
              <optgroup label="Demographics">
                <option value="18-29">18-29</option>
                <option value="30-44">30-44</option>
                <option value="45-64">45-64</option>
                <option value="65+">65+</option>
              </optgroup>
              <optgroup label="Income Range">
                <option value="low">Low Income</option>
                <option value="middle">Middle Income</option>
                <option value="high">High Income</option>
              </optgroup>
              <optgroup label="Education Level">
                <option value="high-school">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
              </optgroup>
              <optgroup label="Political Affiliation">
                <option value="democrat">Democrat</option>
                <option value="republican">Republican</option>
                <option value="independent">Independent</option>
                <option value="other">Other</option>
              </optgroup>
              <optgroup label="Voting History">
                <option value="first-time">First-time Voter</option>
                <option value="regular">Regular Voter</option>
                <option value="intermittent">Intermittent Voter</option>
              </optgroup>
            </Select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600" onClick={() => setIsAIModalOpen(true)}>
            <Bot className="h-4 w-4 mr-2" />
            AI Assistant
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ControlPanel;