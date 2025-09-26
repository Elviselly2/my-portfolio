// function About() {
//     return (
//       <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
//         <div className="max-w-3xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-6">
//           <h1 className="text-4xl font-bold text-blue-400 text-center mb-4">About Me</h1>
//           <p className="text-lg leading-relaxed text-gray-300">
//             Hi, I’m <span className="font-semibold text-blue-500">Elvis</span>, a passionate and dedicated **Full-Stack Developer in training**, with a strong foundation in front-end development.  
//             Having completed my front-end training at **Moringa School**, I specialize in **HTML, CSS, JavaScript, React, Tailwind CSS, and Git**, crafting responsive and interactive web applications.
//           </p>

//           <div className="mt-6">
//             <h2 className="text-2xl font-semibold text-blue-400">💻 Hands-on Experience</h2>
//             <p className="text-lg leading-relaxed text-gray-300">
//               I've gained valuable hands-on experience as an **attaché at Kibabii University**, where I honed my technical skills in a real-world environment.  
//               Currently, I'm diving deeper into **back-end technologies**, working toward becoming a fully skilled **Full-Stack Developer**.
//             </p>
//           </div>

//           <div className="mt-6">
//             <h2 className="text-2xl font-semibold text-blue-400">🚀 Soft Skills & Growth</h2>
//             <p className="text-lg leading-relaxed text-gray-300">
//               Beyond coding, I have developed essential **soft skills** like **communication, teamwork, self-leadership, and productivity** through personal development courses at the **African Management Institute**.  
//               These skills enable me to collaborate effectively and contribute meaningfully to any team.
//             </p>
//           </div>

//           <div className="mt-6 text-center">
//             <h2 className="text-2xl font-semibold text-blue-400">📢 Open to Opportunities</h2>
//             <p className="text-lg leading-relaxed text-gray-300">
//               I am now open to **internship opportunities**, where I can apply my front-end expertise, continue mastering back-end development, and grow through mentorship and teamwork.  
//               If you're looking for a **motivated and eager developer** to join your team, let's connect!
//             </p>
//           </div>

//           <div className="mt-6 text-center">
//             <a 
//               href="/contact" 
//               className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition duration-300"
//             >
//               📩 Contact Me
//             </a>
//           </div>
//         </div>
//       </section>
//     );
// }

// export default About;
function About() {
    return (
      // Updated Background: Deeper, less noisy gradient with a subtle texture feel
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white p-8">
        
        {/* Main Container: Larger max-width, increased padding, premium frosted glass effect */}
        <div className="max-w-5xl w-full bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-gray-700/50">
          
          {/* Heading: Slightly larger and more vibrant */}
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-10 tracking-tighter">
            A Bit About Elvis
          </h1>
          
          {/* Introduction & Value Proposition: Clean border, slightly larger text */}
          <div className="mb-10 p-5 border-l-4 border-cyan-500 bg-gray-700/30 rounded-r-lg">
            <p className="text-xl leading-relaxed text-gray-200">
              Hello! I'm **Elvis Otieno**, a dedicated **Full-Stack Developer** focused on building efficient, scalable, and responsive web applications. My comprehensive background in **ICT** and specialized training ensure I approach development with both technical depth and practical expertise across the entire computing stack.
            </p>
          </div>

          {/* Grid Layout: Consistent gap and structure */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Technical Foundation (RVTTI Diploma and Skills Highlighted) */}
            <div className="p-6 bg-gray-700/50 rounded-lg shadow-inner border border-gray-600">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span role="img" aria-label="code" className="text-3xl mr-2">💻</span> Technical Foundation
              </h2>
              
              {/* Highlight the broad ICT Diploma background */}
              <p className="text-lg leading-snug text-gray-300 mb-4">
                My skills are grounded in a **Diploma in ICT from RVTTI**, where I gained hands-on expertise in:
              </p>
              
              <ul className="list-none space-y-3 text-lg text-gray-300">
                <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span> 
                    **Software Development:** <span className="text-blue-300">React, JavaScript, Python/Flask, Node.js</span>
                </li>
                <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span> 
                    **Hardware:** <span className="text-blue-300">Component assembly, diagnostics, and maintenance.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span> 
                    **Networking:** <span className="text-blue-300">Configuration, troubleshooting, and system connectivity.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span> 
                    **Databases:** <span className="text-yellow-300">SQLite, MongoDB</span>
                </li>
              </ul>
            </div>
            
            {/* Experience */}
            <div className="p-6 bg-gray-700/50 rounded-lg shadow-inner border border-gray-600">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span role="img" aria-label="lightbulb" className="text-3xl mr-2">💡</span> Professional Experience
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                I've applied my skills as an **attaché at Kibabii University** and focused on rapid personal growth:
              </p>
              <ul className="list-none space-y-3 text-lg text-gray-300 mt-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">✔</span> 
                    **Real-World Application:** Honed technical skills and troubleshooting in a structured environment.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">✔</span> 
                    **Back-End Mastery:** Actively developing complex APIs using my Python/Flask stack.
                  </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="p-6 bg-gray-700/50 rounded-lg shadow-inner border border-gray-600">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span role="img" aria-label="rocket" className="text-3xl mr-2">🚀</span> Soft Skills & Mindset
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Certified by the **African Management Institute**, I bring robust professional skills:
              </p>
              <ul className="list-none space-y-3 text-lg text-gray-300 mt-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">💬</span> 
                    **Communication:** Clear, effective team and stakeholder interaction.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">🤝</span> 
                    **Teamwork & Leadership:** Proven ability to collaborate and take initiative.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">🧠</span> 
                    **Self-Driven:** High productivity and commitment to continuous learning.
                  </li>
              </ul>
            </div>
          </div> {/* End of Grid */}
          
          <hr className="my-10 border-gray-700/50" />

          {/* Call to Action: More dominant and inviting */}
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-300 mb-4">
              Ready to Contribute from Day One.
            </h3>
            <p className="text-xl leading-relaxed text-gray-400 mb-8 max-w-2xl mx-auto">
              I am actively seeking an **internship or junior developer role** to transition my training into impactful development work. 
            </p>
            
            <a 
              href="/contact" 
              className="inline-block px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-extrabold text-xl rounded-full shadow-2xl shadow-blue-500/50 hover:from-blue-600 hover:to-cyan-600 hover:scale-[1.03] transition-all duration-300 transform"
            >
              📩 Connect with Elvis &rarr;
            </a>
          </div>

        </div>
      </section>
    );
}

export default About;