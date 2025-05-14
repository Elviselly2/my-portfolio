function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="max-w-3xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-6">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-4">📞 Get in Touch</h1>
        <p className="text-lg text-gray-300 text-center">
          I’m **open to opportunities** and would love to **connect**!
        </p>

        <div className="mt-6 text-center">
          <p className="text-lg text-gray-300">
            📞 <strong>Phone:</strong> <a href="tel:+254740279346" className="text-blue-400 hover:underline">+254 740 279 346</a>
          </p>
          <p className="text-lg text-gray-300">
            📧 <strong>Email:</strong> <a href="mailto:elvisotieno24@gmail.com" className="text-blue-400 hover:underline">elvisotieno24@gmail.com</a>
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-400 text-center mt-6">🌐 Connect with Me</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a href="https://www.linkedin.com/in/elvis-elly-0367ab166" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/elviselly7100" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
            Instagram
          </a>
          <a href="https://www.facebook.com/elvis.elly.7923" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
            Facebook
          </a>
          <a href="https://www.github.com/Elviselly2" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
