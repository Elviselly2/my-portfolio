import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-emerald-700 tracking-wide">
          Elvis.dev
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 font-medium">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors duration-200 ${
                location.pathname === to
                  ? "text-emerald-600 font-semibold"
                  : "text-gray-500 hover:text-emerald-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        {/* <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition duration-200"
        >
          Resume
        </a> */}
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noreferrer">View CV</a>
      </nav>
    </header>
  );
}

export default Navbar;