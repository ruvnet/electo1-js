import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Database, Globe, Clock, Robot, FileJson, Rss } from 'lucide-react';
import DataSourceList from './DataSourceList';
import DataSourceForm from './DataSourceForm';

const DataSources = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddSource = (sourceData) => {
    console.log('New data source:', sourceData);
    // Here you would typically add the new source to your state or send it to an API
    setShowAddForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-2xl font-mono font-semibold mb-6">Data Sources</h1>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-cyber-green-900 mb-4">
          <TabsTrigger value="overview" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">
            <Database className="h-4 w-4 lg:mr-2" />
            <span className="hidden lg:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="web" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">
            <Globe className="h-4 w-4 lg:mr-2" />
            <span className="hidden lg:inline">Web Scraping</span>
          </TabsTrigger>
          <TabsTrigger value="api" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">
            <FileJson className="h-4 w-4 lg:mr-2" />
            <span className="hidden lg:inline">API</span>
          </TabsTrigger>
          <TabsTrigger value="rss" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">
            <Rss className="h-4 w-4 lg:mr-2" />
            <span className="hidden lg:inline">RSS Feeds</span>
          </TabsTrigger>
          <TabsTrigger value="ai" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">
            <Robot className="h-4 w-4 lg:mr-2" />
            <span className="hidden lg:inline">AI Processing</span>
          </TabsTrigger>
          <TabsTrigger value="schedule" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">
            <Clock className="h-4 w-4 lg:mr-2" />
            <span className="hidden lg:inline">Scheduling</span>
          </TabsTrigger>
        </TabsList>
        <ScrollArea className="h-[600px]">
          <TabsContent value="overview">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400 text-lg font-mono">Data Source Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <DataSourceList />
                <Button 
                  className="mt-4 bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600"
                  onClick={() => setShowAddForm(true)}
                >
                  Add New Data Source
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="web">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400 text-lg font-mono">Web Scraping Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyber-green-400 mb-4">Configure AI-powered web scraping for unstructured data collection.</p>
                {showAddForm && <DataSourceForm onSubmit={handleAddSource} sourceType="web" />}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="api">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400 text-lg font-mono">API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyber-green-400 mb-4">Set up connections to RESTful APIs or GraphQL endpoints.</p>
                {showAddForm && <DataSourceForm onSubmit={handleAddSource} sourceType="api" />}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="rss">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400 text-lg font-mono">RSS Feed Aggregation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyber-green-400 mb-4">Aggregate and process data from RSS feeds.</p>
                {showAddForm && <DataSourceForm onSubmit={handleAddSource} sourceType="rss" />}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ai">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400 text-lg font-mono">AI Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyber-green-400 mb-4">Configure AI models for data normalization and analysis.</p>
                {showAddForm && <DataSourceForm onSubmit={handleAddSource} sourceType="ai" />}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="schedule">
            <Card className="bg-cyber-black border-cyber-green-700">
              <CardHeader>
                <CardTitle className="text-cyber-green-400 text-lg font-mono">Data Collection Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyber-green-400 mb-4">Set up schedules for automated data collection and processing.</p>
                {showAddForm && <DataSourceForm onSubmit={handleAddSource} sourceType="schedule" />}
              </CardContent>
            </Card>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default DataSources;
