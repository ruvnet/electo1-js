import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecentActivity = () => {
  const activities = [
    { action: 'Parameter Optimization', timestamp: '2 minutes ago' },
    { action: 'New Data Source Added', timestamp: '15 minutes ago' },
    { action: 'Prediction Model Updated', timestamp: '1 hour ago' },
    { action: 'System Health Check', timestamp: '3 hours ago' },
  ];

  return (
    <Card className="bg-cyber-black border-cyber-green-700">
      <CardHeader>
        <CardTitle className="text-cyber-green-400 text-sm font-mono">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="text-xs font-mono">
              <span className="text-cyber-green-400">{activity.action}</span>
              <span className="text-cyber-green-600 ml-2">- {activity.timestamp}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;