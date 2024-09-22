import React from 'react';
import { Link } from 'react-router-dom';
import { X, HomeIcon, BrainCircuitIcon, TerminalIcon, SettingsIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, toggleSidebar, showLogo }) => {
  return (
    <motion.div
      className="fixed inset-y-0 right-0 w-64 bg-gray-800 text-white p-6 z-50"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Button variant="ghost" className="absolute top-4 right-4 text-white" onClick={toggleSidebar}>
        <X className="h-6 w-6" />
      </Button>
      <motion.nav
        className="mt-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isOpen && !showLogo ? 1 : 0, x: isOpen && !showLogo ? 0 : 50 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
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
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
