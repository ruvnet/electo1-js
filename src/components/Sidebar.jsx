import React from 'react';
import { HomeIcon, ChartBarIcon, CogIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <HomeIcon className="inline-block mr-2 h-5 w-5" /> Dashboard
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <ChartBarIcon className="inline-block mr-2 h-5 w-5" /> Predictions
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <CogIcon className="inline-block mr-2 h-5 w-5" /> Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;