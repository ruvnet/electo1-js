import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Bot, Filter } from 'lucide-react';

const ControlPanel = ({ setIsAIModalOpen }) => {
  return (
    <Card className="bg-cyber-black border-cyber-green-700 mb-6">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">Search</label>
            <div className="flex">
              <Input 
                placeholder="Search candidates, districts, countries..." 
                className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700 placeholder-cyber-green-700"
              />
              <Button className="ml-2 bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">Region</label>
            <Select>
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="global" className="text-cyber-green-400">Global</SelectItem>
                <SelectItem value="north-america" className="text-cyber-green-400">North America</SelectItem>
                <SelectItem value="south-america" className="text-cyber-green-400">South America</SelectItem>
                <SelectItem value="europe" className="text-cyber-green-400">Europe</SelectItem>
                <SelectItem value="asia" className="text-cyber-green-400">Asia</SelectItem>
                <SelectItem value="africa" className="text-cyber-green-400">Africa</SelectItem>
                <SelectItem value="oceania" className="text-cyber-green-400">Oceania</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">Election Type</label>
            <Select>
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select election type" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="presidential" className="text-cyber-green-400">Presidential</SelectItem>
                <SelectItem value="parliamentary" className="text-cyber-green-400">Parliamentary</SelectItem>
                <SelectItem value="local" className="text-cyber-green-400">Local/Municipal</SelectItem>
                <SelectItem value="referendum" className="text-cyber-green-400">Referendum</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">Demographics</label>
            <Select>
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select demographic" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="age" className="text-cyber-green-400">Age Group</SelectItem>
                <SelectItem value="gender" className="text-cyber-green-400">Gender</SelectItem>
                <SelectItem value="ethnicity" className="text-cyber-green-400">Ethnicity</SelectItem>
                <SelectItem value="education" className="text-cyber-green-400">Education Level</SelectItem>
                <SelectItem value="income" className="text-cyber-green-400">Income Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">Political Factors</label>
            <Select>
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select political factor" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="ideology" className="text-cyber-green-400">Political Ideology</SelectItem>
                <SelectItem value="party" className="text-cyber-green-400">Party Affiliation</SelectItem>
                <SelectItem value="issues" className="text-cyber-green-400">Key Issues</SelectItem>
                <SelectItem value="approval" className="text-cyber-green-400">Approval Ratings</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-cyber-green-400 text-xs font-mono">External Factors</label>
            <Select>
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select external factor" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="economy" className="text-cyber-green-400">Economic Indicators</SelectItem>
                <SelectItem value="media" className="text-cyber-green-400">Media Influence</SelectItem>
                <SelectItem value="events" className="text-cyber-green-400">Major Events</SelectItem>
                <SelectItem value="international" className="text-cyber-green-400">International Relations</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
            <Filter className="h-4 w-4 mr-2" />
            Apply Filters
          </Button>
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
