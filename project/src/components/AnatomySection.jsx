import React from 'react';
import { healthIndicators } from '../data/mockData';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import anatomyImg from '../assets/Anatomy.png';

const AnatomySection = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'critical':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="w-full flex flex-col items-center md:flex-row md:items-start md:space-x-8">
      <img
        src={anatomyImg}
        alt="Anatomy"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg mb-4 md:mb-0"
      />
      {/* Example: Add health indicators next to the image for responsiveness */}
      
    </div>
  );
};

export default AnatomySection;