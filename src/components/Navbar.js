import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaEnvelope } from 'react-icons/fa';

function Navbar({ appName }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
            >
              <a
                href="#events" // แก้ไขตรงนี้
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                News / Events
              </a>
              
            </div>
          )}
        </div>
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-xl ml-4">
            {appName}
          </a>
          <a
            href="/contact"
            className="text-white hover:text-gray-200 ml-4"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;