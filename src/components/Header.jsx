import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { language, toggleLanguage, translations } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="top-0 right-0 left-0 z-50 fixed bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400 shadow-lg w-full h-16">
        <div className="flex justify-between items-center mx-auto px-8 py-4 container">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-60 h-12 transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Navigation (visible on larger screens) */}
          <nav className="md:flex space-x-8 hidden text-white">
            <Link
              to="/"
              className={`hover:text-yellow-200 transition-all duration-300 ${
                activeLink === 'home' ? 'text-yellow-200 underline' : ''
              }`}
              onClick={() => handleLinkClick('home')}
            >
              {translations[language].navbar.home}
            </Link>
            <Link
              to="/bio"
              className={`hover:text-yellow-200 transition-all duration-300 ${
                activeLink === 'bio' ? 'text-yellow-200 underline' : ''
              }`}
              onClick={() => handleLinkClick('bio')}
            >
              {translations[language].navbar.bio}
            </Link>
            <Link
              to="/contact"
              className={`hover:text-yellow-200 transition-all duration-300 ${
                activeLink === 'contact' ? 'text-yellow-200 underline' : ''
              }`}
              onClick={() => handleLinkClick('contact')}
            >
              {translations[language].navbar.contact}
            </Link>
          </nav>

          {/* Language Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="md:block hidden bg-orange-700 hover:bg-orange-800 px-6 py-2 rounded-full text-white transition-all duration-300"
            >
              {language === 'en' ? 'English' : 'हिंदी'}
            </button>
            {isDropdownOpen && (
              <div className="right-0 absolute bg-white shadow-lg mt-2 rounded-md w-40">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="hover:bg-orange-500 px-4 py-2 w-full text-left hover:text-white"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('hi')}
                  className="hover:bg-orange-500 px-4 py-2 w-full text-left hover:text-white"
                >
                  हिंदी
                </button>
              </div>
            )}
          </div>

          {/* Menu Button (visible on all screens) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16">
        {/* Your main content goes here */}
      </div>

      {/* Sidebar (visible on smaller screens) */}
      {isSidebarOpen && (
        <div className="z-40 fixed inset-0 flex justify-end bg-gray-800 bg-opacity-75">
          <div className="space-y-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400 shadow-lg p-6 w-64 h-full">
            <button
              className="mb-6 text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="space-y-4">
              <Link
                to="/"
                className={`block text-white hover:text-yellow-200 transition-all duration-300 ${
                  activeLink === 'home' ? 'text-yellow-200 underline' : ''
                }`}
                onClick={() => {
                  handleLinkClick('home');
                  toggleSidebar();
                }}
              >
                {translations[language].navbar.home}
              </Link>
              <Link
                to="/bio"
                className={`block text-white hover:text-yellow-200 transition-all duration-300 ${
                  activeLink === 'bio' ? 'text-yellow-200 underline' : ''
                }`}
                onClick={() => {
                  handleLinkClick('bio');
                  toggleSidebar();
                }}
              >
                {translations[language].navbar.bio}
              </Link>
              <Link
                to="/contact"
                className={`block text-white hover:text-yellow-200 transition-all duration-300 ${
                  activeLink === 'contact' ? 'text-yellow-200 underline' : ''
                }`}
                onClick={() => {
                  handleLinkClick('contact');
                  toggleSidebar();
                }}
              >
                {translations[language].navbar.contact}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
