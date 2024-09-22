import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700 placeholder-cyber-green-700"
              />
              <Button className="ml-2 bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">Filter</label>
            <Select>
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select filter" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="demographics" className="text-cyber-green-400">Demographics</SelectItem>
                <SelectItem value="income" className="text-cyber-green-400">Income Range</SelectItem>
                <SelectItem value="education" className="text-cyber-green-400">Education Level</SelectItem>
                <SelectItem value="political" className="text-cyber-green-400">Political Affiliation</SelectItem>
                <SelectItem value="voting" className="text-cyber-green-400">Voting History</SelectItem>
              </SelectContent>
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
