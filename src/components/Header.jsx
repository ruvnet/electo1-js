import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ toggleSidebar, showLogo }) => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center">
                <img src="/placeholder.svg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold text-gray-800">Election Predictor</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <Button variant="ghost" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
