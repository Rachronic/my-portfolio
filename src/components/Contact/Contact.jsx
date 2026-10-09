import { motion } from "framer-motion";

const contactLinks = [
  {
    number: "01",
    title: "Email Me",
    detail: "pattigullarama@gmail.com",
    description: "Have an opportunity or project in mind?",
    href: "mailto:pattigullarama@gmail.com",
    label: "Send an Email",
  },
  {
    number: "02",
    title: "LinkedIn",
    detail: "Connect professionally",
    description: "Let's connect and grow our networks.",
    href: "https://www.linkedin.com/in/pattigulla-rama",
    label: "Visit LinkedIn",
  },
  {
    number: "03",
    title: "GitHub",
    detail: "github.com/Rachronic",
    description: "Explore my code and development projects.",
    href: "https://github.com/Rachronic",
    label: "Explore GitHub",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading and introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            Let's Connect
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            Have an idea?
            <br />
            <span className="text-cyan-400">Let's build it.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I'm interested in software development, innovative projects,
            and opportunities to learn, collaborate, and create meaningful
            digital experiences.
          </p>

          {/* Download Resume Button */}
          <a
            href="/resume/resume.pdf"
            download="Ramachandra_Resume.pdf"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Download My Resume
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {contactLinks.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 sm:p-8"
            >
              {/* Number and arrow */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                  {item.number}
                </span>

                <span className="text-2xl text-cyan-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              {/* Details */}
              <h3 className="mb-3 text-2xl font-bold transition group-hover:text-cyan-300">
                {item.title}
              </h3>

              <p className="mb-2 break-words text-sm font-medium text-gray-200">
                {item.detail}
              </p>

              <p className="mb-8 text-sm leading-6 text-gray-500">
                {item.description}
              </p>

              {/* Action Button */}
              <a
                href={item.href}
                target={item.title === "Email Me" ? undefined : "_blank"}
                rel={
                  item.title === "Email Me"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Location and footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-gray-400">
            <span className="mr-2 text-cyan-400">●</span>
            Based in Vizianagaram, Andhra Pradesh, India
          </p>

          <p className="text-xs tracking-wide text-gray-500">
            OPEN TO LEARNING & COLLABORATION
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;