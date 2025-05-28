import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="rounded-lg ">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className=' bg-[#f8f9fa] flex flex-row rounded-lg '>
        <div className='flex flex-col w-1/2'>
          <div className='flex flex-row bg-[#f8f9fa] p-4 rounded-lg shadow-sm mb-2'>
            <AnatomySection />
            <HealthStatusCards />
            
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>
        <div className='flex flex-col w-1/2 p-2'>
          <CalendarView />
          <UpcomingSchedule />
          
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;