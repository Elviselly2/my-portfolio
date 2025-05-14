function About() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
        <div className="max-w-3xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-6">
          <h1 className="text-4xl font-bold text-blue-400 text-center mb-4">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I’m <span className="font-semibold text-blue-500">Elvis</span>, a passionate and dedicated **Full-Stack Developer in training**, with a strong foundation in front-end development.  
            Having completed my front-end training at **Moringa School**, I specialize in **HTML, CSS, JavaScript, React, Tailwind CSS, and Git**, crafting responsive and interactive web applications.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-blue-400">💻 Hands-on Experience</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              I've gained valuable hands-on experience as an **attaché at Kibabii University**, where I honed my technical skills in a real-world environment.  
              Currently, I'm diving deeper into **back-end technologies**, working toward becoming a fully skilled **Full-Stack Developer**.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-blue-400">🚀 Soft Skills & Growth</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Beyond coding, I have developed essential **soft skills** like **communication, teamwork, self-leadership, and productivity** through personal development courses at the **African Management Institute**.  
              These skills enable me to collaborate effectively and contribute meaningfully to any team.
            </p>
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-400">📢 Open to Opportunities</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              I am now open to **internship opportunities**, where I can apply my front-end expertise, continue mastering back-end development, and grow through mentorship and teamwork.  
              If you're looking for a **motivated and eager developer** to join your team, let's connect!
            </p>
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

export default About;
