import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, HomeIcon, BrainCircuitIcon, TerminalIcon, SettingsIcon } from 'lucide-react';
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
      }, 300); // Delay navigation to allow for animation
      return () => clearTimeout(timer);
    }
  }, [selectedItem, navigate, toggleSidebar]);

  const handleNavigation = (path) => {
    setSelectedItem(path);
  };

  const navItems = [
    { path: "/", icon: HomeIcon, label: "Dashboard" },
    { path: "/ai-interface", icon: BrainCircuitIcon, label: "AI Interface" },
    { path: "/control-console", icon: TerminalIcon, label: "Control Console" },
    { path: "/settings", icon: SettingsIcon, label: "Settings" },
  ];

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
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
                  onClick={() => handleNavigation(item.path)}
                >
                  <item.icon className="inline-block mr-2 h-5 w-5" /> {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && showLogo && (
          <motion.div
            className="absolute bottom-6 left-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/placeholder.svg" alt="Logo" className="h-8 w-8" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;
