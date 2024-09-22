import React from 'react';
import { CheckCircleIcon } from 'lucide-react';

const SystemStatus = () => {
  return (
    <div className="bg-cyber-black p-4 rounded-sm border border-cyber-green-700">
      <h2 className="text-sm font-mono font-semibold mb-2 text-cyber-green-400">System Status</h2>
      <div className="flex items-center text-xs font-mono">
        <CheckCircleIcon className="text-cyber-green-500 h-3 w-3 mr-2" />
        <span className="text-cyber-green-400">System operational</span>
      </div>
      <p className="mt-2 text-xs font-mono text-cyber-green-400">Uptime: 24:00:00</p>
    </div>
  );
};

export default SystemStatus;
