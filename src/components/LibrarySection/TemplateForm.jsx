import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const TemplateForm = ({ item, onSave }) => {
  const [formData, setFormData] = useState(item || {
    name: '',
    type: '',
    description: '',
    data: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (value) => {
    setFormData(prev => ({ ...prev, type: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-cyber-green-400">Name</label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
        />
      </div>
      <div>
        <label htmlFor="type" className="text-cyber-green-400">Type</label>
        <Select onValueChange={handleTypeChange} value={formData.type}>
          <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent className="bg-cyber-black border-cyber-green-700">
            <SelectItem value="Agent Deployment" className="text-cyber-green-400">Agent Deployment</SelectItem>
            <SelectItem value="AI Strategy" className="text-cyber-green-400">AI Strategy</SelectItem>
            <SelectItem value="Prediction Model" className="text-cyber-green-400">Prediction Model</SelectItem>
            <SelectItem value="Data Source" className="text-cyber-green-400">Data Source</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="description" className="text-cyber-green-400">Description</label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700"
        />
      </div>
      <Button type="submit" className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
        Save Template
      </Button>
    </form>
  );
};

export default TemplateForm;