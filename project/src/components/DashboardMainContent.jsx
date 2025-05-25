import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">Anatomy</h2>
              <AnatomySection />
              <HealthStatusCards />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">Calendar</h2>
              <CalendarView />
            </div>
          </div>
          <div className="mt-6">
            <ActivityFeed />
          </div>
        </div>
        <div>
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;