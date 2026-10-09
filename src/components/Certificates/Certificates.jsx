import { motion } from "framer-motion";

const certificates = [
  {
    number: "01",
    title: "Java Full Stack Developer",
    subtitle: "Virtual Internship",
    organization: "AICTE · EduSkills",
    duration: "April – June 2025",
    details: "10-week virtual internship",
    filename: "/certificates/javafullstack.pdf",
    featured: true,
  },
  {
    number: "02",
    title: "Android Developer",
    subtitle: "Virtual Internship",
    organization: "AICTE · EduSkills",
    duration: "July – September 2025",
    details: "10-week virtual internship",
    filename: "/certificates/Andriod_developers.pdf",
    featured: false,
  },
 {
  number: "03",
  title: "Machine Learning & Data Science",
  subtitle: "Virtual Internship",
  organization: "AICTE · EduSkills",
  duration: "June – August 2026",
  details: "8-week virtual internship",
  filename: "/certificates/machine-learning.pdf",
  featured: false,
},
{
  number: "04",
  title: "Privacy and Security in Online Social Media",
  subtitle: "NPTEL Elite Certification",
  organization: "NPTEL · SWAYAM",
  duration: "July – October 2025",
  details: "12-week course · Score: 60%",
  filename: "/certificates/nptel-privacy.pdf",
  featured: false,
},
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            Learning & Development
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-6xl">
            Certificates &
            <br />
            <span className="text-cyan-400">Credentials.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Professional learning experiences and certifications that reflect
            my commitment to continuous learning and technical growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex min-w-0 flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-2 sm:p-8 ${
                certificate.featured
                  ? "border-cyan-400/40 bg-gradient-to-br from-cyan-950/40 to-[#0a0a0a]"
                  : "border-white/10 bg-[#0b0b0b] hover:border-cyan-400/40"
              }`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                  CERTIFICATE / {certificate.number}
                </span>

                <span className="text-2xl text-cyan-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                {certificate.organization}
              </p>

              <h3 className="mb-2 break-words text-2xl font-bold leading-snug text-white transition group-hover:text-cyan-300 sm:text-3xl">
                {certificate.title}
              </h3>

              <p className="mb-5 text-sm font-medium text-gray-300">
                {certificate.subtitle}
              </p>

              <div className="mb-8 border-l-2 border-cyan-400/50 pl-4">
                <p className="text-sm text-gray-300">
                  {certificate.duration}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {certificate.details}
                </p>
              </div>

              <a
                href={certificate.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                View Certificate
                <span aria-hidden="true">↗</span>
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-xs leading-6 text-gray-500">
          Each certificate opens in a new browser tab.
        </p>
      </div>
    </section>
  );
}

export default Certificates;