function Projects() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
        <div className="max-w-4xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-6">
          <h1 className="text-4xl font-bold text-blue-400 text-center mb-4">🚀 My Projects</h1>
          <p className="text-lg text-gray-300 text-center">
            Here are some of the **cool projects** I've worked on, showcasing my skills in **front-end and back-end development**.
          </p>

          {/* Placeholder for future project cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold text-blue-300">Project 1</h2>
              <p className="text-gray-400">A responsive web app built with React and Tailwind CSS.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold text-blue-300">Project 2</h2>
              <p className="text-gray-400">A full-stack application using Node.js and MongoDB.</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition duration-300"
            >
              📩 Contact Me
            </a>
          </div>
        </div>
      </section>
    );
}

export default Projects;
