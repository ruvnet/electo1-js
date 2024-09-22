import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import AIInterface from "./components/AIInterface";
import ControlConsole from "./components/ControlConsole";
import Settings from "./components/Settings";
import Predictions from "./components/Predictions";
import DataSources from "./components/DataSources";
import AgentDeployment from "./components/AgentDeployment";
import LibrarySection from "./components/LibrarySection";
import TacticsSection from "./components/TacticsSection";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setShowLogo(false);
    const timer = setTimeout(() => setShowLogo(true), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-cyber-bg">
      <Header toggleSidebar={toggleSidebar} showLogo={showLogo} />
      <div className="flex flex-1">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/tactics" element={<TacticsSection />} />
            <Route path="/data-sources" element={<DataSources />} />
            <Route path="/ai-interface" element={<AIInterface />} />
            <Route path="/control-console" element={<ControlConsole />} />
            <Route path="/agent-deployment" element={<AgentDeployment />} />
            <Route path="/library" element={<LibrarySection />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} showLogo={showLogo} />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
