import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <p>&copy; 2024 Spiritual Awakening. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-yellow-500">Facebook</a>
        <a href="#" className="hover:text-yellow-500">Instagram</a>
        <a href="#" className="hover:text-yellow-500">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
