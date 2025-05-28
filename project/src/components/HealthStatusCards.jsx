import React from 'react';
import { healthCards } from '../data/mockData';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const HealthStatusCards = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'critical':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-3 mt-4 flex flex-col">
      {healthCards.map((card) => (
        <div 
          key={card.id}
          className={`p-3 rounded-lg border ${getStatusClass(card.status)} transition-all duration-300`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{card.title}</h3>
              <p className="text-xs text-gray-500">{card.date}</p>
            </div>
            {getStatusIcon(card.status)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;