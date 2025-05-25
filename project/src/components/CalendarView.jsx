import React from 'react';
import { calendarDays, calendarAppointments } from '../data/mockData';
import { Calendar, Clock } from 'lucide-react';

const CalendarView = () => {
  // Generate a 7x5 grid for calendar days (October 2021)
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Current month name
  const currentMonth = 'October 2021';
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">{currentMonth}</h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Days of week headers */}
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500 py-1">
            {day}
          </div>
        ))}
        
        {/* Empty cells for September (if October starts on a Friday, we need 5 empty cells) */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={`empty-${index}`} className="h-9 text-center text-xs text-gray-400 py-1"></div>
        ))}
        
        {/* Calendar days */}
        {calendarDays.map((day, index) => (
          <div
            key={`day-${index}`}
            className={`h-9 text-center rounded-md relative
              ${day.appointments.length > 0 ? 'bg-indigo-50' : 'hover:bg-gray-50'}
              ${index === 4 ? 'ring-2 ring-indigo-500 bg-indigo-50' : ''}
              transition-all duration-200 cursor-pointer
            `}
          >
            <span className={`text-xs ${index === 4 ? 'font-bold text-indigo-700' : 'text-gray-700'}`}>
              {day.day}
            </span>
            {day.appointments.length > 0 && (
              <div className="absolute -bottom-1 left-0 right-0 flex justify-center">
                <div className="h-1 w-1 bg-indigo-500 rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Appointment cards */}
      <div className="mt-6 space-y-3">
        {calendarAppointments.map((appointment) => (
          <div key={appointment.id} className="p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800">{appointment.title}</h3>
                <p className="text-xs text-gray-500">{appointment.doctor}</p>
              </div>
              <div className="flex items-center text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                <Clock className="h-3 w-3 mr-1" />
                <span className="text-xs font-medium">{appointment.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;