import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const DataSourceForm = ({ onSubmit, sourceType }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const sourceData = Object.fromEntries(formData.entries());
    onSubmit(sourceData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-cyber-green-400">Source Name</Label>
        <Input id="name" name="name" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" placeholder="Enter source name" required />
      </div>

      {sourceType === 'web' && (
        <>
          <div>
            <Label htmlFor="url" className="text-cyber-green-400">URL to Scrape</Label>
            <Input id="url" name="url" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" placeholder="https://example.com" required />
          </div>
          <div>
            <Label htmlFor="selector" className="text-cyber-green-400">CSS Selector</Label>
            <Input id="selector" name="selector" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" placeholder=".article-content" />
          </div>
          <div>
            <Label htmlFor="scrapeFrequency" className="text-cyber-green-400">Scrape Frequency</Label>
            <Select name="scrapeFrequency" defaultValue="daily">
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="hourly" className="text-cyber-green-400">Hourly</SelectItem>
                <SelectItem value="daily" className="text-cyber-green-400">Daily</SelectItem>
                <SelectItem value="weekly" className="text-cyber-green-400">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      {sourceType === 'api' && (
        <>
          <div>
            <Label htmlFor="endpoint" className="text-cyber-green-400">API Endpoint</Label>
            <Input id="endpoint" name="endpoint" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" placeholder="https://api.example.com/data" required />
          </div>
          <div>
            <Label htmlFor="method" className="text-cyber-green-400">HTTP Method</Label>
            <Select name="method" defaultValue="GET">
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="GET" className="text-cyber-green-400">GET</SelectItem>
                <SelectItem value="POST" className="text-cyber-green-400">POST</SelectItem>
                <SelectItem value="PUT" className="text-cyber-green-400">PUT</SelectItem>
                <SelectItem value="DELETE" className="text-cyber-green-400">DELETE</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="headers" className="text-cyber-green-400">Headers (JSON)</Label>
            <Textarea id="headers" name="headers" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" placeholder='{"Authorization": "Bearer TOKEN"}' />
          </div>
        </>
      )}

      {sourceType === 'rss' && (
        <div>
          <Label htmlFor="feedUrl" className="text-cyber-green-400">RSS Feed URL</Label>
          <Input id="feedUrl" name="feedUrl" className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700" placeholder="https://example.com/feed.xml" required />
        </div>
      )}

      {sourceType === 'ai' && (
        <div>
          <Label htmlFor="model" className="text-cyber-green-400">AI Model</Label>
          <Select name="model" defaultValue="sentiment-analysis">
            <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
              <SelectValue placeholder="Select AI model" />
            </SelectTrigger>
            <SelectContent className="bg-cyber-black border-cyber-green-700">
              <SelectItem value="sentiment-analysis" className="text-cyber-green-400">Sentiment Analysis</SelectItem>
              <SelectItem value="named-entity-recognition" className="text-cyber-green-400">Named Entity Recognition</SelectItem>
              <SelectItem value="text-classification" className="text-cyber-green-400">Text Classification</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {sourceType === 'schedule' && (
        <>
          <div>
            <Label htmlFor="frequency" className="text-cyber-green-400">Collection Frequency</Label>
            <Select name="frequency" defaultValue="daily">
              <SelectTrigger className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-black border-cyber-green-700">
                <SelectItem value="hourly" className="text-cyber-green-400">Hourly</SelectItem>
                <SelectItem value="daily" className="text-cyber-green-400">Daily</SelectItem>
                <SelectItem value="weekly" className="text-cyber-green-400">Weekly</SelectItem>
                <SelectItem value="monthly" className="text-cyber-green-400">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="active" name="active" />
            <Label htmlFor="active" className="text-cyber-green-400">Active</Label>
          </div>
        </>
      )}

      <Button type="submit" className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
        Add Data Source
      </Button>
    </form>
  );
};

export default DataSourceForm;
