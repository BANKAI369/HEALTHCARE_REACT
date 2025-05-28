import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-2 px-6 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-indigo-600"><span className="text-red">Health</span>care.</h1>
          <div className="ml-10 relative hidden md:block">
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 w--full">
              <Search className="h-3 w-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none text-sm h-2 w-60 "
              />
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
            <Bell className="h-5 w-5 text-gray-500" />
            <span></span>
          </button>
            </div>
            
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center mr-2">
              <span className="text-indigo-700 font-medium text-sm"></span>
            </div>
          </div>
          <button className="hidden md:flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 transition-colors duration-200">
            <Plus className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;