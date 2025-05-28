import React from 'react';
import { navItems } from '../data/mockData';
import * as LucideIcons from 'lucide-react';

const Sidebar = () => {
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };
  
  return (
    <aside className="bg-white shadow-sm w-16 md:w-64 h-screen fixed left-0 top-0 pt-20 pb-4 overflow-y-auto transition-all duration-300 z-20">
      <div className="px-4">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:block mb-4 pl-2">
          General
        </h2>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`group flex items-center px-2 py-3 rounded-lg transition-colors duration-200 
              ${item.id === 'dashboard' 
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8">
                {getIcon(item.icon)}
              </div>
              <span className="ml-3 text-sm font-medium hidden md:block">{item.title}</span>
              {item.id === 'dashboard' && (
                <div className="h-full w-1 bg-indigo-600 rounded-l-md absolute right-0 hidden md:block"></div>
              )}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;