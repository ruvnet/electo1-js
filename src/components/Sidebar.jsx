import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, HomeIcon, BrainCircuitIcon, TerminalIcon, SettingsIcon, BarChartIcon, DatabaseIcon, UserIcon, BookIcon, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, toggleSidebar, showLogo }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedItem) {
      const timer = setTimeout(() => {
        navigate(selectedItem);
        toggleSidebar();
        setSelectedItem(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedItem, navigate, toggleSidebar]);

  const handleNavigation = (path) => {
    setSelectedItem(path);
  };

  const navItems = [
    { path: "/", icon: HomeIcon, label: "Dashboard" },
    { path: "/predictions", icon: BarChartIcon, label: "Predictions" },
    { path: "/tactics", icon: Target, label: "Tactics" },
    { path: "/data-sources", icon: DatabaseIcon, label: "Data Sources" },
    { path: "/ai-interface", icon: BrainCircuitIcon, label: "AI Interface" },
    { path: "/control-console", icon: TerminalIcon, label: "Control Console" },
    { path: "/agent-deployment", icon: UserIcon, label: "Agent Deployment" },
    { path: "/library", icon: BookIcon, label: "Library" },
    { path: "/settings", icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <motion.div
      className="fixed inset-y-0 right-0 w-48 md:w-64 bg-cyber-black text-cyber-green-400 p-4 z-50 border-l border-cyber-green-700"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Button variant="ghost" className="absolute top-2 right-2 text-cyber-green-400 hover:text-cyber-green-200" onClick={toggleSidebar}>
        <X className="h-4 w-4" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mt-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className="block py-2 px-3 rounded text-xs md:text-sm font-mono transition duration-200 hover:bg-cyber-green-900 hover:text-cyber-green-200"
                  onClick={() => handleNavigation(item.path)}
                >
                  <item.icon className="inline-block mr-2 h-3 w-3 md:h-4 md:w-4" /> {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && showLogo && (
          <motion.div
            className="absolute bottom-4 left-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/placeholder.svg" alt="Logo" className="h-6 w-6 filter invert" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;
