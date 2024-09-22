import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BrainCircuitIcon, TerminalIcon, SettingsIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <HomeIcon className="inline-block mr-2 h-5 w-5" /> Dashboard
        </Link>
        <Link to="/ai-interface" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <BrainCircuitIcon className="inline-block mr-2 h-5 w-5" /> AI Interface
        </Link>
        <Link to="/control-console" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <TerminalIcon className="inline-block mr-2 h-5 w-5" /> Control Console
        </Link>
        <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <SettingsIcon className="inline-block mr-2 h-5 w-5" /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
