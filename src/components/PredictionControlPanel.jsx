import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const PredictionControlPanel = ({ onParamChange }) => {
  const handleChange = (param, value) => {
    onParamChange({ [param]: value });
  };

  return (
    <Card className="bg-cyber-black border-cyber-green-700 mb-6">
      <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Region</Label>
          <Select onValueChange={(value) => handleChange('region', value)}>
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
          <Label className="text-cyber-green-400 text-xs font-mono">Election Type</Label>
          <Select onValueChange={(value) => handleChange('electionType', value)}>
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

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Time Frame</Label>
          <Select onValueChange={(value) => handleChange('timeFrame', value)}>
            <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
              <SelectValue placeholder="Select time frame" />
            </SelectTrigger>
            <SelectContent className="bg-cyber-black border-cyber-green-700">
              <SelectItem value="short" className="text-cyber-green-400">Short-term (1-3 months)</SelectItem>
              <SelectItem value="medium" className="text-cyber-green-400">Medium-term (3-12 months)</SelectItem>
              <SelectItem value="long" className="text-cyber-green-400">Long-term (1-5 years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Demographic Factors</Label>
          <Select onValueChange={(value) => handleChange('demographicFactor', value)}>
            <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
              <SelectValue placeholder="Select demographic factor" />
            </SelectTrigger>
            <SelectContent className="bg-cyber-black border-cyber-green-700">
              <SelectItem value="age" className="text-cyber-green-400">Age</SelectItem>
              <SelectItem value="gender" className="text-cyber-green-400">Gender</SelectItem>
              <SelectItem value="education" className="text-cyber-green-400">Education Level</SelectItem>
              <SelectItem value="income" className="text-cyber-green-400">Income Level</SelectItem>
              <SelectItem value="ethnicity" className="text-cyber-green-400">Ethnicity</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Political Factors</Label>
          <Select onValueChange={(value) => handleChange('politicalFactor', value)}>
            <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
              <SelectValue placeholder="Select political factor" />
            </SelectTrigger>
            <SelectContent className="bg-cyber-black border-cyber-green-700">
              <SelectItem value="ideology" className="text-cyber-green-400">Political Ideology</SelectItem>
              <SelectItem value="party" className="text-cyber-green-400">Party Affiliation</SelectItem>
              <SelectItem value="incumbency" className="text-cyber-green-400">Incumbency</SelectItem>
              <SelectItem value="approval" className="text-cyber-green-400">Approval Ratings</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Economic Factors</Label>
          <Select onValueChange={(value) => handleChange('economicFactor', value)}>
            <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
              <SelectValue placeholder="Select economic factor" />
            </SelectTrigger>
            <SelectContent className="bg-cyber-black border-cyber-green-700">
              <SelectItem value="gdp" className="text-cyber-green-400">GDP Growth</SelectItem>
              <SelectItem value="unemployment" className="text-cyber-green-400">Unemployment Rate</SelectItem>
              <SelectItem value="inflation" className="text-cyber-green-400">Inflation Rate</SelectItem>
              <SelectItem value="stockmarket" className="text-cyber-green-400">Stock Market Performance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Media Influence</Label>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            onValueChange={(value) => handleChange('mediaInfluence', value[0])}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Social Media Impact</Label>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            onValueChange={(value) => handleChange('socialMediaImpact', value[0])}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">International Relations Factor</Label>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            onValueChange={(value) => handleChange('internationalRelations', value[0])}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Voter Turnout Prediction</Label>
          <Input
            type="number"
            placeholder="Enter predicted turnout %"
            className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
            onChange={(e) => handleChange('voterTurnout', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Campaign Finance Impact</Label>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            onValueChange={(value) => handleChange('campaignFinance', value[0])}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-cyber-green-400 text-xs font-mono">Historical Voting Patterns Weight</Label>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            onValueChange={(value) => handleChange('historicalPatterns', value[0])}
          />
        </div>
      </CardContent>
      <CardContent className="p-4">
        <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600 w-full">
          Generate Prediction
        </Button>
      </CardContent>
    </Card>
  );
};

export default PredictionControlPanel;