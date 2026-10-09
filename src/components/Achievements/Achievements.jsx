import { motion } from "framer-motion";

const achievements = [
  {
    number: "01",
    category: "INNOVATION PROJECT",
    title: "MAPSS",
    subtitle: "Mental and Psychological Student Support",
    description:
      "An AI-powered student support concept focused on mental-health guidance, psychological screening, and helping students find appropriate support.",
    tags: ["Artificial Intelligence", "Student Support", "Healthcare"],
    highlight: true,
  },
  {
    number: "02",
    category: "INNOVATION & DEVELOPMENT",
    title: "SIH 2025",
    subtitle: "Smart India Hackathon",
    description:
      "Highlighting my MAPSS project in the context of Smart India Hackathon 2025 and my interest in developing technology-driven solutions to real-world problems.",
    tags: ["Problem Solving", "Innovation", "Technology"],
    highlight: false,
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-32 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            My Journey So Far
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-6xl">
            Achievements &
            <br />
            <span className="text-cyan-400">Recognition.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A glimpse into my project journey, innovation interests, and
            efforts to build meaningful technology solutions.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-2 sm:p-9 ${
                item.highlight
                  ? "border-cyan-400/40 bg-gradient-to-br from-cyan-950/40 to-[#080808]"
                  : "border-white/10 bg-[#0b0b0b] hover:border-cyan-400/40"
              }`}
            >
              {/* Number and icon */}
              <div className="mb-9 flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                  {item.number}
                </span>

                <span className="text-3xl text-cyan-400 transition duration-300 group-hover:scale-110">
                  ↗
                </span>
              </div>

              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                {item.category}
              </p>

              <h3 className="mb-2 text-3xl font-black sm:text-4xl">
                {item.title}
              </h3>

              <h4 className="mb-5 text-base font-medium text-gray-300 sm:text-lg">
                {item.subtitle}
              </h4>

              <p className="mb-8 text-sm leading-7 text-gray-400 sm:text-base">
                {item.description}
              </p>

              {/* Technology and interest tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;