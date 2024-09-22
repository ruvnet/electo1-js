import React from 'react';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
