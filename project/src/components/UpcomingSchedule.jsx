import React from 'react';
import { upcomingSchedule } from '../data/mockData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 h-full">
      <h2 className="text-lg font-medium text-gray-800 mb-4">The Upcoming Schedule</h2>
      
      <div className="space-y-4">
        {upcomingSchedule.map((day) => (
          <div key={day.day}>
            <h3 className="text-sm font-medium text-gray-500 mb-2">On {day.day}</h3>
            {day.appointments.map((appointment) => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;