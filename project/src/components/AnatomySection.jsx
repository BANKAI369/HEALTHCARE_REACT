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
    <img src={anatomyImg} alt="Anatomy" className='h-80 rounded-lg mr-6'/>
  );

};

export default AnatomySection;