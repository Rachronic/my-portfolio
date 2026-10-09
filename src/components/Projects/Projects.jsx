import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "MAPSS",
    subtitle: "Mental and Psychological Student Support",
    description:
      "An AI-powered student support concept designed to provide accessible mental-health guidance, psychological screening, and pathways to appropriate support.",
    tags: ["AI Concept", "Student Support", "SIH 2025"],
    featured: true,
  },
  {
    number: "02",
    title: "AI Smart Home Assistant",
    subtitle: "Intelligent Home Automation",
    description:
      "An AI-powered assistant concept for managing smart-home devices through natural-language prompts, energy-saving suggestions, and security reminders.",
    tags: ["Artificial Intelligence", "Smart Home"],
  },
  {
    number: "03",
    title: "E-Wallet Canteen System",
    subtitle: "Cashless Canteen Management",
    description:
      "A digital canteen management concept focused on simplifying payments and making everyday canteen transactions more convenient.",
    tags: ["E-Wallet", "Digital Payments"],
  },
  {
    number: "04",
    title: "Cricket Score App",
    subtitle: "Match and Score Tracking",
    description:
      "A Flutter application for updating cricket match scores, player names, and match information.",
    tags: ["Flutter", "Mobile App"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            Things I've worked on
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-6xl">
            Featured <span className="text-cyan-400">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A selection of projects exploring AI, software development,
            mobile applications, and practical digital solutions.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group flex min-w-0 flex-col rounded-2xl border p-6 sm:p-8 ${
                project.featured
                  ? "border-cyan-400/40 bg-gradient-to-br from-cyan-950/40 to-[#101010]"
                  : "border-white/10 bg-[#0b0b0b]"
              } transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40`}
            >
              {/* Card heading */}
              <div className="mb-8 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 sm:text-sm">
                  PROJECT / {project.number}
                </span>

                {project.featured && (
                  <span className="shrink-0 rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300">
                    Featured
                  </span>
                )}
              </div>

              {/* Project content */}
              <p className="mb-2 text-sm text-gray-500">
                {project.subtitle}
              </p>

              <h3 className="mb-4 break-words text-2xl font-bold leading-snug text-white group-hover:text-cyan-300">
                {project.title}
              </h3>

              <p className="mb-8 text-sm leading-7 text-gray-400 sm:text-base">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;