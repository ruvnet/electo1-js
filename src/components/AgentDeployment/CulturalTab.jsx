import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const CulturalTab = ({ handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="ethnicity" className="text-cyber-green-400">Ethnicity</Label>
        <Input id="ethnicity" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('ethnicity', e.target.value)} placeholder="e.g., Hispanic, Asian, African American" />
        <p className="text-xs text-cyber-green-600 mt-1">Enter the primary ethnicity of the target demographic.</p>
      </div>
      <div>
        <Label htmlFor="religion" className="text-cyber-green-400">Religious Affiliation</Label>
        <Input id="religion" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('religion', e.target.value)} placeholder="e.g., Christianity, Islam, Buddhism" />
        <p className="text-xs text-cyber-green-600 mt-1">Specify the religious affiliation, if applicable.</p>
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
        <p className="text-xs text-cyber-green-600 mt-1">Indicate if the target demographic identifies as LGBTQ+.</p>
      </div>
      <div>
        <Label htmlFor="cultural-values" className="text-cyber-green-400">Cultural Values Importance</Label>
        <Slider
          id="cultural-values"
          min={1}
          max={10}
          step={1}
          className="w-full"
          onValueChange={(value) => handleInputChange('culturalValues', value[0])}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
        <p className="text-xs text-cyber-green-600 mt-1">Rate the importance of cultural values to the target group.</p>
      </div>
      <div>
        <Label htmlFor="language" className="text-cyber-green-400">Primary Language</Label>
        <Input id="language" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" onChange={(e) => handleInputChange('language', e.target.value)} placeholder="e.g., English, Spanish, Mandarin" />
        <p className="text-xs text-cyber-green-600 mt-1">Enter the primary language of the target demographic.</p>
      </div>
    </div>
  );
};

export default CulturalTab;