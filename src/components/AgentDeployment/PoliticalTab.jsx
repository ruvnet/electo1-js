import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const PoliticalTab = ({ handleInputChange }) => {
  return (
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
            <SelectItem value="libertarian" className="text-cyber-green-400">Libertarian</SelectItem>
            <SelectItem value="green" className="text-cyber-green-400">Green Party</SelectItem>
            <SelectItem value="other" className="text-cyber-green-400">Other</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-cyber-green-600 mt-1">Select the primary political affiliation of the target group.</p>
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
          <span>Far Left</span>
          <span>Center</span>
          <span>Far Right</span>
        </div>
        <p className="text-xs text-cyber-green-600 mt-1">Adjust the slider to set the political ideology spectrum.</p>
      </div>
      <div>
        <Label htmlFor="voter-turnout" className="text-cyber-green-400">Voter Turnout Likelihood</Label>
        <Slider
          id="voter-turnout"
          min={0}
          max={100}
          step={1}
          className="w-full"
          onValueChange={(value) => handleInputChange('voterTurnout', value[0])}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
        <p className="text-xs text-cyber-green-600 mt-1">Estimate the likelihood of voter turnout for this group.</p>
      </div>
      <div>
        <Label htmlFor="key-issues" className="text-cyber-green-400">Key Political Issues</Label>
        <Select onValueChange={(value) => handleInputChange('keyIssues', value)}>
          <SelectTrigger id="key-issues" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
            <SelectValue placeholder="Select key issues" />
          </SelectTrigger>
          <SelectContent className="bg-cyber-black border-cyber-green-700">
            <SelectItem value="economy" className="text-cyber-green-400">Economy</SelectItem>
            <SelectItem value="healthcare" className="text-cyber-green-400">Healthcare</SelectItem>
            <SelectItem value="environment" className="text-cyber-green-400">Environment</SelectItem>
            <SelectItem value="education" className="text-cyber-green-400">Education</SelectItem>
            <SelectItem value="foreign-policy" className="text-cyber-green-400">Foreign Policy</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-cyber-green-600 mt-1">Choose the most important political issues for this group.</p>
      </div>
      <div>
        <Label htmlFor="media-influence" className="text-cyber-green-400">Media Influence</Label>
        <Slider
          id="media-influence"
          min={0}
          max={100}
          step={1}
          className="w-full"
          onValueChange={(value) => handleInputChange('mediaInfluence', value[0])}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
        <p className="text-xs text-cyber-green-600 mt-1">Rate the level of media influence on this group's political views.</p>
      </div>
    </div>
  );
};

export default PoliticalTab;