import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ toggleSidebar, showLogo }) => {
  return (
    <header className="sticky top-0 bg-cyber-black shadow-md z-50 border-b border-cyber-green-700">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center">
                <img src="/placeholder.svg" alt="Logo" className="h-6 w-6 mr-2 filter invert" />
                <span className="text-sm font-mono font-bold text-cyber-green-400">ElectionHack</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <Button variant="ghost" onClick={toggleSidebar} className="text-cyber-green-400 hover:text-cyber-green-200">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
