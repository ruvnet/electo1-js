import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-cyber-bg">
      <h1 className="text-xl font-mono font-semibold text-cyber-green-400 mb-6">Settings</h1>
      <Card className="bg-cyber-black border-cyber-green-700">
        <CardHeader>
          <CardTitle className="text-cyber-green-400 text-sm font-mono">System Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="real-time-updates" className="text-cyber-green-400 text-xs font-mono">Real-time Updates</Label>
              <Switch id="real-time-updates" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="text-cyber-green-400 text-xs font-mono">Dark Mode</Label>
              <Switch id="dark-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="text-cyber-green-400 text-xs font-mono">Notifications</Label>
              <Switch id="notifications" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
