import React from 'react';
import { Link } from 'react-router-dom';
// IMPORTANT: You must install the react-icons package to use these:
// npm install react-icons
import { FaGithub, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  // Define a style for hoverable links for consistency
  const linkStyle = "hover:text-yellow-400 transition-colors duration-200";

  return (
    // Main container with the dark green background color
    <footer className="bg-gray-800 text-gray-200 pt-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Description & Socials */}
        <div className="space-y-6">
          <p className="text-sm leading-relaxed text-green-300">
            Turning ideas into beautiful code. Passionate about design, driven by innovation. Let's connect and create magic together.
          </p>
          <h4 className="font-bold text-lg text-white tracking-widest mt-4">CONNECT</h4>
          
          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/Elviselly2" target="_blank" rel="noreferrer" className={linkStyle}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/elviselly" target="_blank" rel="noreferrer" className={linkStyle}>
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/elviselly7100" target="_blank" rel="noreferrer" className={linkStyle}>
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-white tracking-widest">NAVIGATION</h4>
          <ul className="space-y-2 text-sm">
            {/* Using <Link> and correct paths for navigation */}
            <li><Link to="/" className={linkStyle}>Home</Link></li>
            <li><Link to="/about" className={linkStyle}>About</Link></li>
            {/* <li><Link to="/services" className={linkStyle}>Services</Link></li> */}
            <li><Link to="/projects" className={linkStyle}>Projects</Link></li>
            {/* <li><Link to="/blog" className={linkStyle}>Blog</Link></li>
            <li><Link to="/reviews" className={linkStyle}>Reviews</Link></li> */}
          </ul>
        </div>

        {/* Column 3: Contact Details & Button */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-white tracking-widest">CONTACT</h4>
          
          {/* Phone Number */}
          <div className="space-y-1">
            <p className="text-xs text-gray-400">Support Number</p>
            <a href="tel:+254740279346" className="flex items-center space-x-2 text-sm">
              <FaPhoneAlt size={14} className="text-yellow-400" />
              <span>+254 740 279 346</span>
            </a>
          </div>
          
          {/* Email */}
          <div className="space-y-1">
            <p className="text-xs text-gray-400">Support Email</p>
            <a href="mailto:elvisotieno24@gmail.com" className="flex items-center space-x-2 text-sm">
              <FaEnvelope size={14} className="text-yellow-400" />
              <span>elvisotieno24@gmail.com</span>
            </a>
          </div>
          
          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full 
                       shadow-xl hover:bg-yellow-300 transition-colors transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10 mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-400">
             
          <p>&copy; 2025 Elvis Otieno. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;