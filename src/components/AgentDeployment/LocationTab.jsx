import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const LocationTab = ({ handleInputChange }) => {
  return (
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
            <SelectItem value="australia" className="text-cyber-green-400">Australia</SelectItem>
            <SelectItem value="germany" className="text-cyber-green-400">Germany</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-cyber-green-600 mt-1">Select the country where the agent will be deployed.</p>
      </div>
      <div>
        <Label htmlFor="state" className="text-cyber-green-400">State/Province</Label>
        <Input id="state" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('state', e.target.value)} placeholder="e.g., California" />
        <p className="text-xs text-cyber-green-600 mt-1">Enter the state or province for more localized deployment.</p>
      </div>
      <div>
        <Label htmlFor="city" className="text-cyber-green-400">City</Label>
        <Input id="city" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('city', e.target.value)} placeholder="e.g., San Francisco" />
        <p className="text-xs text-cyber-green-600 mt-1">Specify the city for precise urban targeting.</p>
      </div>
      <div>
        <Label htmlFor="district" className="text-cyber-green-400">District/Neighborhood</Label>
        <Input id="district" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('district', e.target.value)} placeholder="e.g., Downtown" />
        <p className="text-xs text-cyber-green-600 mt-1">Optional: Enter a specific district or neighborhood for hyper-local focus.</p>
      </div>
    </div>
  );
};

export default LocationTab;