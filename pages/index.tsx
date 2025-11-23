import React from "react";
import Image from "next/image";
import PropertyCard from "@/components/common/Card"
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

const HomePage: React.FC = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] px-6 pt-6">
        {/* Background Image */}
        <div 
          className="w-full h-full bg-cover bg-center rounded-3xl relative"
          style={{
            backgroundImage: "url('/assets/img-1.png')"
          }}
        >
          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center text-white drop-shadow-lg">
              Find your favorite place here!
            </h1>
            <p className="text-xl md:text-2xl text-center text-white drop-shadow-md">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Filter Buttons Group */}
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 rounded-full border-2 border-teal-500 text-teal-500 font-medium bg-white hover:bg-teal-50 transition">
              All
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
              Top Villa
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
              Free Reschedule
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
              Book Now, Pay later
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
              Self CheckIn
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
              Instant Book
            </button>
          </div>

          {/* Filter and Sort Buttons */}
          <div className="flex gap-3">
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition flex items-center gap-2">
              <span>Filter</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
              Sort by: Highest Price
            </button>
          </div>

        </div>
      </div>

      {/* Property Listings Grid */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;