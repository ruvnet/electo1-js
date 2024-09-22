import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Database, Globe, Clock, Cpu, FileJson, Rss, Plus } from 'lucide-react';
import DataSourceList from './DataSourceList';
import DataSourceForm from './DataSourceForm';
import DataSourceWizard from './DataSourceWizard';

const DataSources = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleAddSource = (sourceData) => {
    console.log('New data source:', sourceData);
    // Here you would typically add the new source to your state or send it to an API
    setIsWizardOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-cyber-bg text-cyber-green-400">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-mono font-semibold">Data Sources</h1>
        <Dialog open={isWizardOpen} onOpenChange={setIsWizardOpen}>
          <DialogTrigger asChild>
            <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
              <Plus className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Add New Source</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-cyber-black border-cyber-green-700 text-cyber-green-400 w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] h-[90vh] max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-cyber-green-400 text-xl font-mono">Add New Data Source</DialogTitle>
            </DialogHeader>
            <DataSourceWizard onComplete={handleAddSource} />
          </DialogContent>
        </Dialog>
      </div>
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
            <Cpu className="h-4 w-4 lg:mr-2" />
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
                <DataSourceForm onSubmit={handleAddSource} sourceType="web" />
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
                <DataSourceForm onSubmit={handleAddSource} sourceType="api" />
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
                <DataSourceForm onSubmit={handleAddSource} sourceType="rss" />
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
                <DataSourceForm onSubmit={handleAddSource} sourceType="ai" />
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
                <DataSourceForm onSubmit={handleAddSource} sourceType="schedule" />
              </CardContent>
            </Card>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default DataSources;
