// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} StraySafe. All rights reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="text-gray-400 hover:text-white mr-4">
            Terms of Service
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
