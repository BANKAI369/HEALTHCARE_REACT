import React from 'react';
import { Clock, CheckCircle, AlertCircle, User } from 'lucide-react';

const SimpleAppointmentCard = ({ appointment }) => {
  const getStatusIcon = () => {
    if (appointment.status === 'completed') {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
    
    switch (appointment.type) {
      case 'checkup':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'specialist':
        return <User className="h-4 w-4 text-indigo-500" />;
      case 'followup':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };
  
  const getStatusClass = () => {
    if (appointment.status === 'completed') {
      return 'bg-green-50 border-green-100';
    }
    
    switch (appointment.type) {
      case 'checkup':
        return 'bg-blue-50 border-blue-100';
      case 'specialist':
        return 'bg-indigo-50 border-indigo-100';
      case 'followup':
        return 'bg-yellow-50 border-yellow-100';
      default:
        return 'bg-gray-50 border-gray-100';
    }
  };
  
  return (
    <div className={`flex flex-row p-3 rounded-lg border ${getStatusClass()} mb-2 transition-all duration-200 w-1/2`}>
      <div className="flex flex-row items-center justify-between w-full">
        <div>
          <h4 className="font-medium text-gray-800">{appointment.title}</h4>
          <p className="text-xs text-gray-500">{appointment.doctor}</p>
        </div>
        <div className="flex flex-row">
          <div className="text-xs font-medium text-gray-600 flex items-center">
            <Clock className="h-3 w-3 justify-between" />
            {appointment.time}
          </div>
          <div className="flex-shrink-0">
            {getStatusIcon()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;