import React from 'react';
import { Link } from 'react-router-dom';
import { X, HomeIcon, BrainCircuitIcon, TerminalIcon, SettingsIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 right-0 w-64 bg-gray-800 text-white p-6 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <Button variant="ghost" className="absolute top-4 right-4 text-white" onClick={toggleSidebar}>
        <X className="h-6 w-6" />
      </Button>
      <nav className="mt-8">
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
