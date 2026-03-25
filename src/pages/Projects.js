function Projects() {
  const projects = [
    {
      title: "LearnHub LMS",
      type: "Full-Stack",
      status: "Live",
      desc: "Full-stack Learning Management System with authentication, courses, lessons, and progress tracking.",
      tech: ["React", "Node.js", "PostgreSQL", "MongoDB"],
      codeLink: "https://github.com/Elviselly2/lms",
      liveLink: null,
    },
    {
      title: "Moringa Marketplace",
      type: "Frontend",
      status: "Live",
      desc: "Platform for developers to showcase and sell their projects to potential buyers.",
      tech: ["React", "Tailwind CSS"],
      codeLink: null,
      liveLink: "https://moringa-marketplace-3bpi.vercel.app/",
    },
  ];

  const statusColor = {
    Live: "bg-lime-400 text-lime-900",
    Complete: "bg-blue-100 text-blue-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
  };

  const typeColor = {
    "Full-Stack": "bg-emerald-100 text-emerald-700",
    Frontend: "bg-teal-100 text-teal-700",
    Backend: "bg-indigo-100 text-indigo-700",
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-8 text-gray-800">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-lime-400 text-emerald-900 text-sm font-bold px-4 py-1 rounded-full mb-4">
            Portfolio Showcase
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">My Creative Journey</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Each project tells a story of problem-solving, creativity, and technical growth.
            Explore the solutions I've crafted with passion.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition duration-300"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  🗂 {p.title}
                </h2>
                <div className="flex gap-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColor[p.type]}`}>
                    {p.type}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor[p.status]}`}>
                    {p.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>

              {/* Tech Stack */}
              <div className="mb-5">
                <p className="text-xs text-gray-400 font-semibold mb-2 flex items-center gap-1">
                  ⚙ Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                {p.codeLink && (
                  <a
                    href={p.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-emerald-700 text-white text-sm py-2 rounded-lg font-semibold hover:bg-emerald-800 transition"
                  >
                    🔗 View Code
                  </a>
                )}
                {p.liveLink && (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-emerald-600 text-emerald-700 text-sm py-2 rounded-lg font-semibold hover:bg-emerald-50 transition"
                  >
                    🚀 View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;