import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

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
            My Academic Journey
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-6xl">
            Education &
            <br />
            <span className="text-cyan-400">Learning.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My academic journey is helping me build a strong foundation in
            computer science, software development, and emerging technologies.
          </p>
        </motion.div>

        {/* Education card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950/30 via-[#0b0b0b] to-black p-6 transition duration-300 hover:border-cyan-400/60 sm:p-10 md:p-12"
        >
          {/* Decorative number */}
          <div className="pointer-events-none absolute -right-3 -top-10 text-[150px] font-black leading-none text-white/[0.025] sm:right-4 sm:text-[220px]">
            01
          </div>

          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  Currently Pursuing
                </span>
              </div>

              <p className="mb-3 text-sm font-medium text-gray-400">
                Undergraduate Degree
              </p>

              <h3 className="mb-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Bachelor of
                <br className="hidden sm:block" /> Technology
                <span className="text-cyan-400"> (B.Tech)</span>
              </h3>

              <h4 className="mb-5 text-lg font-semibold leading-relaxed text-gray-200 sm:text-xl">
                Lendi Institute of Engineering & Technology
                <span className="block text-sm font-normal text-gray-500">
                  Autonomous
                </span>
              </h4>

              <p className="max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Computer Science & System Engineering (CSSE)
              </p>
            </div>

            {/* Academic information */}
            <div className="grid grid-cols-2 gap-3 md:w-56 md:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">
                  Degree
                </p>
                <p className="text-lg font-bold text-white">B.Tech</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">
                  Branch
                </p>
                <p className="text-lg font-bold text-cyan-400">CSSE</p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 h-px w-full bg-gradient-to-r from-cyan-400/50 via-white/10 to-transparent" />

          <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-gray-500 sm:text-sm">
              Building knowledge. Developing skills. Creating solutions.
            </p>

            <span className="text-sm font-semibold text-cyan-400">
              Academic Journey ↗
            </span>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Education;