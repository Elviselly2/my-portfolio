// function Contact() {
//   return (
//     <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
//       <div className="max-w-3xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-6">
//         <h1 className="text-4xl font-bold text-blue-400 text-center mb-4">📞 Get in Touch</h1>
//         <p className="text-lg text-gray-300 text-center">
//           I’m **open to opportunities** and would love to **connect**!
//         </p>

//         <div className="mt-6 text-center">
//           <p className="text-lg text-gray-300">
//             📞 <strong>Phone:</strong> <a href="tel:+254740279346" className="text-blue-400 hover:underline">+254 740 279 346</a>
//           </p>
//           <p className="text-lg text-gray-300">
//             📧 <strong>Email:</strong> <a href="mailto:elvisotieno24@gmail.com" className="text-blue-400 hover:underline">elvisotieno24@gmail.com</a>
//           </p>
//         </div>

//         <h2 className="text-2xl font-semibold text-blue-400 text-center mt-6">🌐 Connect with Me</h2>
//         <div className="mt-4 flex flex-wrap justify-center gap-4">
//           <a href="https://www.linkedin.com/in/elvis-elly-0367ab166" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
//             LinkedIn
//           </a>
//           <a href="https://www.instagram.com/elviselly7100" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
//             Instagram
//           </a>
//           <a href="https://www.facebook.com/elvis.elly.7923" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
//             Facebook
//           </a>
//           <a href="https://www.github.com/Elviselly2" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
//             GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("6pN7uSUcpDtCd-8ml"); // Your public key

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
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="max-w-3xl w-full bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-4">📞 Get in Touch</h1>
        <p className="text-lg text-gray-300 text-center mb-8">
          I’m <strong>open to opportunities</strong> and would love to <strong>connect</strong>!
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold rounded-lg shadow-md transition duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p className="text-center mt-4 text-green-400 font-medium">{status}</p>}

        <div className="mt-10 text-center space-y-2">
          <p className="text-lg text-gray-300">
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:+254740279346" className="text-blue-400 hover:underline">
              +254 740 279 346
            </a>
          </p>
          <p className="text-lg text-gray-300">
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:elvisotieno24@gmail.com" className="text-blue-400 hover:underline">
              elvisotieno24@gmail.com
            </a>
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-400 text-center mt-8">🌐 Connect with Me</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/elvis-elly-0367ab166"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/elviselly7100"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/elvis.elly.7923"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.github.com/Elviselly2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
