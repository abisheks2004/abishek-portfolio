import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-24 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Form + Map */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 📬 Form */}
        <motion.form
          className="w-full bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-yellow-500/20 backdrop-blur-md transition group hover:shadow-yellow-400/30 hover:ring-2 hover:ring-yellow-300/60"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          action="https://formspree.io/f/xeokpzwb"
          method="POST"
        >
          <input type="hidden" name="Form Name" value="Abishek Portfolio Contact" />

          {/* Input fields */}
          {[
            { name: "Project", type: "text" },
            { name: "name", type: "text" },
            { name: "email", type: "email" },
          ].map((field, i) => (
            <div className="relative mb-6" key={i}>
              <input
                type={field.type}
                name={field.name}
                required
                className="peer w-full px-4 py-3 bg-transparent border border-yellow-400 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:shadow-[0_0_12px_rgba(234,179,8,0.5)] hover:ring-2 hover:ring-yellow-300 hover:shadow-[0_0_10px_rgba(234,179,8,0.3)] transition"
                placeholder={field.name}
              />
              <label className="absolute left-4 top-3 text-sm text-yellow-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-300">
                {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
              </label>
            </div>
          ))}

          {/* Textarea */}
          <div className="relative mb-6">
            <textarea
              name="message"
              rows="5"
              required
              className="peer w-full px-4 py-3 bg-transparent border border-yellow-400 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:shadow-[0_0_12px_rgba(234,179,8,0.5)] hover:ring-2 hover:ring-yellow-300 hover:shadow-[0_0_10px_rgba(234,179,8,0.3)] transition resize-none"
              placeholder="Message"
            />
            <label className="absolute left-4 top-3 text-sm text-yellow-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-300">
              Message
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-md w-full transition"
          >
            Send Message 🚀
          </button>
        </motion.form>

        {/* 🗺️ Map */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-yellow-500/20 shadow-xl h-full min-h-[400px] lg:h-[500px] transition group hover:shadow-yellow-400/30 hover:ring-2 hover:ring-yellow-300/60"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <iframe
            title="Abishek Location"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1468.156376750375!2d78.2765776973738!3d11.140350081253532!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1751006182302!5m2!1sen!2sus"></iframe>
        </motion.div>
      </div>
          
      {/* 🔗 Socials */}
      <motion.div
        className="mt-12 flex gap-6 justify-center text-white text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a href="mailto:abisheka067@gmail.com" className="hover:text-yellow-400 transition">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/abisheks2004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/abishek-s-3aa542269"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
