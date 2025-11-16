import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      
      <div className="flex-shrink-0">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-12 md:w-14 object-contain"
        />
      </div>

      <div className="flex items-end bg-white rounded-full shadow-md px-6 py-3 space-x-6 border border-gray-200">
        
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Location</label>
          <input
            type="text"
            placeholder="Search for destination"
            className="outline-none text-sm text-gray-800 placeholder-gray-400 w-40"
          />
        </div>

        <div className="flex flex-col border-l border-gray-200 pl-6">
          <label className="text-xs text-gray-600 mb-1">Check in</label>
          <input
            type="text"
            placeholder="Add date"
            className="outline-none text-sm text-gray-400 w-24"
          />
        </div>

        <div className="flex flex-col border-l border-gray-200 pl-6">
          <label className="text-xs text-gray-600 mb-1">Check out</label>
          <input
            type="text"
            placeholder="Add date"
            className="outline-none text-sm text-gray-400 w-24"
          />
        </div>

        <div className="flex flex-col border-l border-gray-200 pl-6">
          <label className="text-xs text-gray-600 mb-1">People</label>
          <input
            type="text"
            placeholder="Add guest"
            className="outline-none text-sm text-gray-400 w-24"
          />
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-3 flex-shrink-0">
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-sm transition">
          Sign in
        </button>

        <button className="text-gray-700 hover:text-black text-sm font-medium">
          Sign up
        </button>
      </div>

    </header>
  );
};

export default Header;
