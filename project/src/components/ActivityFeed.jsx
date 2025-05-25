import React from 'react';
import { activityData } from '../data/mockData';
import { Calendar } from 'lucide-react';

const ActivityFeed = () => {
  const max = Math.max(...activityData.data);
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">Activity</h2>
        <div className="flex items-center text-sm text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-md">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{activityData.count} appointments on {activityData.period}</span>
        </div>
      </div>
      
      <div className="h-28 flex items-end justify-between mt-4">
        {activityData.data.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              style={{ height: `${(value / max) * 100}%` }}
              className="w-4 bg-indigo-200 hover:bg-indigo-300 transition-colors duration-200 rounded-t-md"
            ></div>
            <span className="text-xs text-gray-500 mt-1">{String.fromCharCode(65 + index)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;