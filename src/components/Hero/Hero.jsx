import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Cyan background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.09] blur-[130px] max-sm:h-[350px] max-sm:w-[350px]" />

      <div className="relative mx-auto min-h-screen w-full max-w-[1800px]">

        {/* Background names */}
        <div className="pointer-events-none absolute left-1/2 top-[35%] z-0 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center max-sm:top-[27%]">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="whitespace-nowrap text-[10vw] font-black uppercase leading-[0.9] tracking-[-0.065em] text-white/[0.13] max-sm:text-[8.5vw]"
          >
            PATTIGULLA
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="whitespace-nowrap text-[9vw] font-black uppercase leading-[0.95] tracking-[-0.065em] text-white/[0.13] max-sm:text-[7.5vw]"
          >
            RAMACHANDRA
          </motion.h1>
        </div>

        {/* Portrait */}
        <motion.img
          src="/images/chandra.png"
          alt="Ramachandra"
          draggable="false"
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 4.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 max-h-[57vh] w-auto max-w-[92%] -translate-x-1/2 object-contain object-bottom sm:max-h-[65vh] md:max-h-[72vh] max-sm:max-h-[52vh] max-sm:max-w-[96%]"
        />

        {/* Portfolio label */}
        <div className="absolute right-5 top-28 z-20 hidden text-right sm:block md:right-10">
          <p className="text-xs tracking-[0.25em] text-gray-500">
            PORTFOLIO
          </p>
          <p className="mt-1 text-sm text-gray-300">2026</p>
        </div>

        {/* Branch name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.4 }}
          className="absolute bottom-[190px] left-0 z-20 w-full px-4 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400 sm:bottom-[190px] sm:text-xs md:text-sm md:tracking-[0.3em] max-sm:bottom-[200px] max-sm:px-2 max-sm:text-[9px] max-sm:tracking-[0.08em]"
        >
          Computer Science &amp; System Engineering
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.9 }}
          className="absolute bottom-[125px] left-1/2 z-20 w-max max-w-[94%] -translate-x-1/2 rounded-full border border-white/10 bg-black/90 px-5 py-2 text-center text-xs leading-5 text-white shadow-lg sm:bottom-[125px] sm:text-sm max-sm:bottom-[125px] max-sm:max-w-[92%] max-sm:px-3 max-sm:text-[10px] max-sm:leading-4"
        >
          Building ideas into real-world digital experiences.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 6.4 }}
          className="absolute bottom-8 left-0 z-20 flex w-full flex-wrap items-center justify-center gap-3 px-4 sm:bottom-10 max-sm:bottom-3 max-sm:flex-col max-sm:gap-2 max-sm:px-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300 max-sm:w-[190px] max-sm:py-2.5 max-sm:text-xs"
          >
            Explore My Work
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="/resume/resume.pdf"
            download="Ramachandra_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/60 bg-black/90 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black max-sm:w-[190px] max-sm:py-2.5 max-sm:text-xs"
          >
            Download Resume
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;