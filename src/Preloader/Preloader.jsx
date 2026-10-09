import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + 1, 100);

        if (next === 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 300);
        }

        return next;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6 },
      }}
    >
      <div className="preloader-top">
        <span>INITIALIZING SYSTEM</span>
        <span>PORTFOLIO ZONE</span>
      </div>

      <div className="preloader-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span>PATTIGULLA</span>{" "}
          <span className="preloader-last-name">RAMACHANDRA</span>
        </motion.h1>

        <motion.p
          className="preloader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          COMPUTER SCIENCE &amp; SYSTEM ENGINEERING
        </motion.p>

        <div className="preloader-percentage">{progress}%</div>
      </div>

      <div className="preloader-bottom">
        <div className="preloader-progress-track">
          <motion.div
            className="preloader-progress-fill"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.08, ease: "linear" }}
          />
        </div>

        <div className="preloader-status">
          <span>
            {progress < 100 ? "LOADING PORTFOLIO..." : "SYSTEM READY"}
          </span>
          <span>SECURE CONNECTION</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;