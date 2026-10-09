import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            About <span className="text-cyan-400">Me.</span>
          </h2>
        </motion.div>

        {/* Photo and introduction */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Cyan border accent */}
            <div className="absolute -inset-3 rounded-3xl border border-cyan-400/20" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
              <img
                src="/images/about.png"
                alt="Ramachandra wearing a navy-blue shirt"
                loading="lazy"
                className="h-[420px] w-full object-cover object-center sm:h-[500px]"
              />

              {/* Photo information overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-24">
                <p className="text-xl font-bold">
                  Ramachandra
                </p>

                <p className="mt-1 text-sm text-cyan-300">
                  Computer Science Student
                </p>
              </div>
            </div>
          </motion.div>

          {/* Personal introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="mb-5 text-lg leading-8 text-gray-300">
              Hello, I'm{" "}
              <span className="font-semibold text-white">
                Pattigulla Ramachandra
              </span>
              , a Computer Science and System Engineering student at
              Lendi Institute of Engineering &amp; Technology.
            </p>

            <p className="mb-5 leading-8 text-gray-400">
              I'm passionate about technology, programming, and
              developing practical solutions. I enjoy learning new
              concepts, experimenting with development tools, and
              strengthening my skills through hands-on projects.
            </p>

            <p className="mb-8 leading-8 text-gray-400">
              I'm working towards becoming a skilled software developer
              by building projects, improving my problem-solving
              abilities, and turning ideas into useful digital
              experiences.
            </p>

            {/* Information cards */}
            <div className="mb-8 grid grid-cols-2 gap-4">

              {/* Education card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-400/40">
                <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                  Education
                </p>

                <p className="text-sm font-semibold">
                  B.Tech Student
                </p>
              </div>

              {/* Focus card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-400/40">
                <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                  Focus
                </p>

                <p className="text-sm font-semibold">
                  Software Development
                </p>
              </div>
            </div>

            {/* Projects button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 px-6 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-black"
            >
              Discover My Projects
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;