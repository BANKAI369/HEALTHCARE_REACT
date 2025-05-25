import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="ml-16 md:ml-64 w-full pb-8">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;