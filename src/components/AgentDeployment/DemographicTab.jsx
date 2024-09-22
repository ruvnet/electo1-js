import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const DemographicTab = ({ handleInputChange }) => {
  return (
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
        <p className="text-xs text-cyber-green-600 mt-1">Select the target age group for the agent.</p>
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
        <p className="text-xs text-cyber-green-600 mt-1">Choose the gender demographic for the agent's focus.</p>
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
        <p className="text-xs text-cyber-green-600 mt-1">Specify the education level of the target demographic.</p>
      </div>
      <div>
        <Label htmlFor="family-size" className="text-cyber-green-400">Family Size</Label>
        <Slider
          id="family-size"
          min={1}
          max={10}
          step={1}
          className="w-full"
          onValueChange={(value) => handleInputChange('familySize', value[0])}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>1</span>
          <span>5</span>
          <span>10+</span>
        </div>
        <p className="text-xs text-cyber-green-600 mt-1">Adjust the slider to set the target family size.</p>
      </div>
    </div>
  );
};

export default DemographicTab;