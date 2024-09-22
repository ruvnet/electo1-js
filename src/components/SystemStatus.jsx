import React from 'react';
import { CheckCircleIcon } from 'lucide-react';

const SystemStatus = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">System Status</h2>
      <div className="flex items-center">
        <CheckCircleIcon className="text-green-500 h-6 w-6 mr-2" />
        <span>System is operational</span>
      </div>
      <p className="mt-2">Uptime: 24 hours</p>
    </div>
  );
};

export default SystemStatus;