import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const SocioeconomicTab = ({ handleInputChange }) => {
  return (
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
            <SelectItem value="affluent" className="text-cyber-green-400">Affluent</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-cyber-green-600 mt-1">Select the income bracket for the target demographic.</p>
      </div>
      <div>
        <Label htmlFor="occupation" className="text-cyber-green-400">Occupation Sector</Label>
        <Select onValueChange={(value) => handleInputChange('occupation', value)}>
          <SelectTrigger id="occupation" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
            <SelectValue placeholder="Select occupation sector" />
          </SelectTrigger>
          <SelectContent className="bg-cyber-black border-cyber-green-700">
            <SelectItem value="technology" className="text-cyber-green-400">Technology</SelectItem>
            <SelectItem value="healthcare" className="text-cyber-green-400">Healthcare</SelectItem>
            <SelectItem value="education" className="text-cyber-green-400">Education</SelectItem>
            <SelectItem value="finance" className="text-cyber-green-400">Finance</SelectItem>
            <SelectItem value="retail" className="text-cyber-green-400">Retail</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-cyber-green-600 mt-1">Choose the primary occupation sector for the agent's focus.</p>
      </div>
      <div>
        <Label htmlFor="social-mobility" className="text-cyber-green-400">Social Mobility</Label>
        <Slider
          id="social-mobility"
          min={1}
          max={10}
          step={1}
          className="w-full"
          onValueChange={(value) => handleInputChange('socialMobility', value[0])}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
        <p className="text-xs text-cyber-green-600 mt-1">Adjust the slider to set the perceived social mobility level.</p>
      </div>
      <div>
        <Label htmlFor="economic-outlook" className="text-cyber-green-400">Economic Outlook</Label>
        <Slider
          id="economic-outlook"
          min={1}
          max={10}
          step={1}
          className="w-full"
          onValueChange={(value) => handleInputChange('economicOutlook', value[0])}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>Pessimistic</span>
          <span>Neutral</span>
          <span>Optimistic</span>
        </div>
        <p className="text-xs text-cyber-green-600 mt-1">Set the economic outlook perception of the target group.</p>
      </div>
    </div>
  );
};

export default SocioeconomicTab;