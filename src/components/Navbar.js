
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 md:px-8 shadow-xl bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white flex justify-between items-center">
      
      {/* Name and Navigation Links */}
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold tracking-wider text-blue-600 dark:text-blue-400">
          Elvis Otieno
        </h1>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          {/* FIX 1: Removed '#' */}
          <Link to="/about" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
          {/* FIX 1: Removed '#' */}
          <Link to="/projects" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
        </div>
      </div>

      {/* Contact Link as a Button (CTA) */}
      <Link 
        // FIX 1: Removed '#'
        to="/contact" 
        className="px-5 py-2.5 text-white bg-blue-600 rounded-full 
                   shadow-lg hover:bg-blue-700 
                   transform hover:scale-105 transition-all duration-300
                   font-semibold"
      >
        Get in Touch
      </Link>
      
    </nav>
  );
}

export default Navbar;