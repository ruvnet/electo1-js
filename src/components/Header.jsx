import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" className="md:hidden mr-2" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="text-xl font-bold text-gray-800">Election Predictor</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
          <Link to="/ai-interface" className="text-gray-600 hover:text-gray-800">AI Interface</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-600 hover:text-gray-800">
              More <ChevronDown className="h-4 w-4 inline-block ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/control-console" className="w-full">Control Console</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="w-full">Settings</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white py-2">
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Dashboard</Link>
          <Link to="/ai-interface" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">AI Interface</Link>
          <Link to="/control-console" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Control Console</Link>
          <Link to="/settings" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Settings</Link>
        </div>
      )}
    </header>
  );
};

export default Header;