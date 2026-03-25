function About() {
  const toolkit = ["VS Code", "GitHub", "React", "Tailwind CSS", "Node.js", "Python/Flask", "PostgreSQL", "MongoDB", "SQLite"];

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-20 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-emerald-700 mb-3">About Me</h1>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-lg">Passionate ICT professional crafting digital solutions</p>
        </div>

        {/* Profile + Intro Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10 flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar Placeholder */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-28 h-28 rounded-full bg-emerald-700 flex items-center justify-center text-white text-4xl font-bold shadow-md">
              EO
            </div>
            <p className="font-semibold text-emerald-700 text-lg">Elvis Otieno</p>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              I'm <strong className="text-gray-900">Elvis Otieno</strong>, a dedicated{" "}
              <strong className="text-emerald-700">Full-Stack Developer</strong> focused on building
              efficient, scalable, and responsive web applications. My comprehensive background in{" "}
              <strong>ICT from RVTTI</strong> and specialized front-end training at{" "}
              <strong>Moringa School</strong> give me both technical depth and practical expertise.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              I specialize in both frontend and backend development, building full-stack applications
              using{" "}
              <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                React, JavaScript, Python-Flask, Node.js
              </span>
            </p>
          </div>
        </div>

        {/* 3-column skills grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* Technical Foundation */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">💻</span> Technical Foundation
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Grounded in a <strong>Diploma in ICT from RVTTI</strong>, with hands-on expertise in:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                ["Software Dev", "React, JS, Python/Flask, Node.js"],
                ["Hardware", "Assembly, diagnostics & maintenance"],
                ["Networking", "Configuration & troubleshooting"],
                ["Databases", "SQLite, MongoDB, PostgreSQL"],
              ].map(([label, value]) => (
                <li key={label} className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">▸</span>
                  <span>
                    <strong>{label}:</strong> {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span> Experience
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Gained real-world experience as an <strong>attaché at Kibabii University</strong>.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Honed technical skills in a structured environment",
                "Developing complex APIs using Python/Flask",
                "Front-end training completed at Moringa School",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🚀</span> Soft Skills
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Certified by the <strong>African Management Institute (AMI)</strong>:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                ["💬", "Communication", "Clear team & stakeholder interaction"],
                ["🤝", "Teamwork", "Proven collaboration & leadership"],
                ["🧠", "Self-Driven", "High productivity & continuous learning"],
              ].map(([icon, label, desc]) => (
                <li key={label} className="flex items-start gap-2">
                  <span>{icon}</span>
                  <span>
                    <strong>{label}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Toolkit */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-10">
          <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">My Toolkit</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {toolkit.map((tool) => (
              <span
                key={tool}
                className="border border-emerald-300 text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-6">
            I am actively seeking an <strong>internship or junior developer role</strong>.
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-700 text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-emerald-800 transition shadow-md"
          >
            📩 Connect with Elvis →
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;