import React, { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import AIInterface from "./components/AIInterface";
import ControlConsole from "./components/ControlConsole";
import Settings from "./components/Settings";

const queryClient = new QueryClient();

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header toggleSidebar={toggleSidebar} />
            <div className="flex flex-1">
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/ai-interface" element={<AIInterface />} />
                  <Route path="/control-console" element={<ControlConsole />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
