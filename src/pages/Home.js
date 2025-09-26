// import profileImage from "../assets/profile.jpeg";

// function Home() {
//     return (
//       <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 text-white">
        
//         {/* Fixed Header */}
//         <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-lg">
//           <nav className="flex justify-between items-center max-w-6xl mx-auto px-6">
//             <h1 className="text-2xl font-bold tracking-wide">Elvis Otieno</h1>
//             <ul className="flex space-x-6">
//               <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
//               <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
//               <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
//               <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
//             </ul>
//           </nav>
//         </header>

//         {/* Main Content */}
//         <main className="flex flex-col items-center justify-center flex-grow text-center p-8 mt-20">
//           <h1 className="text-4xl font-bold tracking-wide text-gray-100">Welcome to My Portfolio</h1>
          
//           <img 
//             src={profileImage} 
//             alt="Elvis Otieno" 
//             className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-gray-800 transform hover:scale-110 transition-transform duration-500 mt-6"
//           />
          
//           <h1 className="text-5xl font-extrabold text-blue-400 mt-6 drop-shadow-lg">Hey, I'm Elvis! 👊</h1>
          
//           <p className="text-lg text-gray-300 mt-4 max-w-lg leading-relaxed">
//             A <strong className="text-white">passionate Full-Stack Developer in training</strong>, crafting 
//             <strong className="text-white"> powerful, scalable, and responsive</strong> web applications.
//           </p>
          
//           <a 
//             href="/projects" 
//             className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
//           >
//             🚀 View My Work
//           </a>
//         </main>
//       </div>
//     );
// }

// export default Home;
import profileImage from "../assets/profile.jpeg";

function Home() {
    // New, expanded professional summary from the user
    const professionalSummary = (
        <p className="text-xl text-gray-300 mt-4 max-w-2xl leading-relaxed">
            Versatile and driven **ICT professional** with specialized training in **Software Development from Moringa School** and a solid foundation in Information and Communication Technology from **RVTTI**. Equipped with strong technical skills in coding, systems analysis, and digital solutions, complemented by certified soft skills training from the **African Management Institute (AMI)**, including communication, teamwork, and leadership. Passionate about using technology to solve real-world problems and improve user experiences. Thrives in collaborative environments and is eager to contribute to innovative projects in tech-driven organizations.
        </p>
    );

    return (
      // Improved gradient for better text contrast
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 shadow-xl z-10">
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

        {/* Main Content (mt-20 ensures content is below the fixed header) */}
        <main className="flex flex-col items-center justify-center flex-grow text-center p-8 mt-20">
          
          {/* SEO Improvement: H2 for a secondary title */}
          <h2 className="text-4xl font-bold tracking-wide text-gray-100">Welcome to My Portfolio</h2> 
          
          {/* Profile Image with polished effects */}
          <img 
            src={profileImage} 
            alt="Elvis Otieno, Full-Stack Developer" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-blue-400 transform hover:scale-105 transition-transform duration-500 mt-6 object-cover"
          />
          
          {/* SEO Improvement: H1 for the main, unique page title */}
          <h1 className="text-5xl font-extrabold text-blue-400 mt-6 drop-shadow-lg">Hey, I'm Elvis! 👊</h1> 
          
          {/* Replaced Content: Professional Summary */}
          {professionalSummary}

          {/* New Content: Tech Stack Badges - Python and SQLite Added */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-xl">
              <span className="px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-full shadow-md">React</span>
              <span className="px-3 py-1 text-sm font-medium bg-green-500 text-white rounded-full shadow-md">Node.js</span>
              <span className="px-3 py-1 text-sm font-medium bg-yellow-400 text-gray-800 rounded-full shadow-md">JavaScript</span>
              
              {/* Python Badge */}
              <span className="px-3 py-1 text-sm font-medium bg-blue-700 text-yellow-300 rounded-full shadow-md">Python/Flask</span>
              
              {/* SQLite Badge */}
              <span className="px-3 py-1 text-sm font-medium bg-indigo-500 text-white rounded-full shadow-md">SQLite</span>
              
              <span className="px-3 py-1 text-sm font-medium bg-teal-500 text-white rounded-full shadow-md">Tailwind CSS</span>
              <span className="px-3 py-1 text-sm font-medium bg-red-500 text-white rounded-full shadow-md">MongoDB</span>
          </div>

          {/* New Content: Highlights/Stats */}
          <div className="flex justify-center gap-10 mt-10 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-center">
                  <p className="text-4xl font-extrabold text-blue-400">5+</p>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Projects Built</p>
              </div>
              <div className="text-center">
                  <p className="text-4xl font-extrabold text-blue-400">1200+</p>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Hours Coded</p>
              </div>
          </div>
          
          {/* Dual CTAs: Primary and Secondary */}
          <div className="flex gap-4 mt-10">
              <a 
                  href="/projects" 
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:scale-[1.02] transition-transform duration-300"
              >
                  🚀 View My Work
              </a>
              <a 
                  href="/resume.pdf" 
                  className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  download
              >
                  📝 Download Resume
              </a>
          </div>

        </main>
      </div>
    );
}

export default Home;