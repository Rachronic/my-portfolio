import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Languages for problem-solving and application development.",
    skills: ["Java", "Python", "C"],
  },
  {
    number: "02",
    title: "Web Development",
    description: "Technologies for building modern web experiences.",
    skills: ["HTML", "CSS", "React"],
  },
  {
    number: "03",
    title: "Database",
    description: "Working with structured data and database queries.",
    skills: ["SQL"],
  },
  {
    number: "04",
    title: "Tools & Technologies",
    description: "Tools for writing code and managing development projects.",
    skills: ["VS Code", "Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            My technical toolkit
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-6xl">
            Skills &amp; <span className="text-cyan-400">Expertise.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I am learning and using as I develop
            my programming and software development skills.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03] sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-cyan-400">
                  {group.number}
                </span>

                <span className="text-2xl text-white/20 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                {group.title}
              </h3>

              <p className="mb-7 text-sm leading-6 text-gray-400">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-xs leading-6 text-gray-500">
          Always learning. Always building. Always improving.
        </p>
      </div>
    </section>
  );
}

export default Skills;