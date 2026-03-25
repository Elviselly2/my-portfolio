import profileImage from "../assets/profile.jpeg";
import { Link } from "react-router-dom";

function Home() {
  const techs = ["React", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "Python/Flask"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center">
      <div className="max-w-6xl mx-auto px-8 py-16 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Text Content */}
        <div>
          <p className="text-emerald-600 font-semibold text-lg mb-2 tracking-wide">
            Full Stack Developer | Creative Problem Solver
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-emerald-700">Elvis Otieno</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
            I build functional and elegant web solutions using modern technologies.
            Welcome to my professional portfolio where creativity meets code.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-10">
            {techs.map((tech) => (
              <span
                key={tech}
                className="border border-emerald-300 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/projects"
              className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition flex items-center gap-2"
            >
              🗂 View My Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-emerald-700 text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition flex items-center gap-2"
            >
              👤 Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT: Profile Image with decorative blobs */}
        <div className="flex justify-center items-center relative">
          {/* Decorative floating dots */}
          <div className="absolute top-8 left-1/2 w-5 h-5 bg-lime-400 rounded-full opacity-80"></div>
          <div className="absolute bottom-12 right-10 w-4 h-4 bg-emerald-300 rounded-full opacity-60"></div>

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-700 shadow-2xl">
            <img
              src={profileImage}
              alt="Elvis Otieno"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;