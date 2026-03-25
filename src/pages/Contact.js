import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("6pN7uSUcpDtCd-8ml");

const socialLinks = [
  {
    icon: "📧",
    label: "Email",
    value: "elvisotieno24@gmail.com",
    href: "mailto:elvisotieno24@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Elvis Otieno",
    href: "https://www.linkedin.com/in/elviselly",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "Elviselly2",
    href: "https://github.com/Elviselly2",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+254 740 279 346",
    href: "tel:+254740279346",
  },
];

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_s08jkto", "template_shxv9k8", form.current)
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-8 text-gray-800">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-emerald-700 mb-3">Contact Me</h1>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-lg">
            If you'd like to collaborate, ask a question, or connect — I'd love to hear from you.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-4">
            {socialLinks.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 transition group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white text-lg flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{label}</p>
                  <p className="text-emerald-700 font-medium text-sm group-hover:underline">{value}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-emerald-600 text-sm mt-6 font-medium">
            I usually respond within 24–48 hours. Let's connect!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-gray-600 text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold text-white transition duration-200 ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-700 hover:bg-emerald-800"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && (
            <p className="text-center mt-4 font-medium text-emerald-600">{status}</p>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;