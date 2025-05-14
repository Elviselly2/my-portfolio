import profileImage from "../assets/profile.jpeg";

function Home() {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 text-white">
        
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-lg">
          <nav className="flex justify-between items-center max-w-6xl mx-auto px-6">
            <h1 className="text-2xl font-bold tracking-wide">Elvis Otieno</h1>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-grow text-center p-8 mt-20">
          <h1 className="text-4xl font-bold tracking-wide text-gray-100">Welcome to My Portfolio</h1>
          
          <img 
            src={profileImage} 
            alt="Elvis Otieno" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-gray-800 transform hover:scale-110 transition-transform duration-500 mt-6"
          />
          
          <h1 className="text-5xl font-extrabold text-blue-400 mt-6 drop-shadow-lg">Hey, I'm Elvis! 👊</h1>
          
          <p className="text-lg text-gray-300 mt-4 max-w-lg leading-relaxed">
            A <strong className="text-white">passionate Full-Stack Developer in training</strong>, crafting 
            <strong className="text-white"> powerful, scalable, and responsive</strong> web applications.
          </p>
          
          <a 
            href="/projects" 
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
          >
            🚀 View My Work
          </a>
        </main>
      </div>
    );
}

export default Home;
