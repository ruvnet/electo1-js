import React from 'react';
import { CheckCircleIcon, AlertTriangleIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SystemStatus = () => {
  return (
    <Card className="bg-cyber-black border-cyber-green-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-cyber-green-400 text-sm font-mono">System Status</CardTitle>
        <CheckCircleIcon className="h-4 w-4 text-cyber-green-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-xs font-mono">
            <CheckCircleIcon className="text-cyber-green-500 h-3 w-3 mr-2" />
            <span className="text-cyber-green-400">System operational</span>
          </div>
          <p className="text-xs font-mono text-cyber-green-400">Uptime: 24:00:00</p>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-cyber-green-400">CPU Usage</span>
              <span className="text-cyber-green-400">45%</span>
            </div>
            <Progress value={45} className="bg-cyber-green-900" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-cyber-green-400">Memory Usage</span>
              <span className="text-cyber-green-400">60%</span>
            </div>
            <Progress value={60} className="bg-cyber-green-900" />
          </div>
          <div className="flex items-center text-xs font-mono">
            <AlertTriangleIcon className="text-yellow-500 h-3 w-3 mr-2" />
            <span className="text-yellow-500">1 non-critical alert</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemStatus;
