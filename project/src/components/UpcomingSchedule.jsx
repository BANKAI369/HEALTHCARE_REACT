import React from 'react';
import { upcomingSchedule } from '../data/mockData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
  <div className="bg-white rounded-xl p-4 w-full">
    <h2 className="text-lg font-medium text-gray-800 mb-4">The Upcoming Schedule</h2>

    <div className="gap-2 w-full">
      {upcomingSchedule.map((day) => (
        <div
          key={day.day}
          className="border border-gray-200 rounded-lg p-2 bg-gray-50 mb-2"
        >
          <h3 className="text-sm font-medium text-gray-500 mb-2">On {day.day}</h3>
          <div className='flex flex-row gap-2 w-full'>
            {day.appointments.map((appointment) => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default UpcomingSchedule;