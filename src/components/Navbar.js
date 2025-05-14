

function Navbar() {
 

 

  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Elvis Otieno</h1>
      <div className="flex items-center gap-4">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="/about" className="hover:text-blue-500">About</a>
        <a href="/projects" className="hover:text-blue-500">Projects</a>
        <a href="/contact" className="hover:text-blue-500">Contact</a>

        {/* Toggle Button */}
       
      </div>
    </nav>
  );
}

export default Navbar;
