import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">Election Predictor</span>
        </Link>
        <Button variant="ghost" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
