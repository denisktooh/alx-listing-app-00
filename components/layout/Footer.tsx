import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12 px-6">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Section */}
        <div className="md:col-span-1">
          <img
            src="/assets/logo.png"
            alt="ALX Logo"
            className="w-16 h-10 object-contain mb-4 brightness-0 invert"
          />
          <p className="text-sm leading-relaxed">
            ALX is a platform where travelers can discover and book unique, comfortable, and 
            affordable lodging options worldwide. From cozy city apartments and tranquil 
            countryside retreats to exotic beachside villas, ALX connects you with the perfect 
            place to stay for any trip.
          </p>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Apartments in Dubai
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Hotels in New York
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Villa in Spain
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Mansion in Indonesia
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Career
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Customers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Brand
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Cancel booking
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Refunds Process
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6">
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Cancellation Notice */}
          <p className="text-sm">
            Some hotel requires you to cancel more than 24 hours before check-in. Details{" "}
            <Link href="#" className="text-teal-400 hover:text-teal-300">
              here
            </Link>
          </p>

          {/* Legal Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Policy service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Cookies Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Partners
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;