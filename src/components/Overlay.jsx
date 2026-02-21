import React from "react";
import { motion, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }) {
  // Section 1: "My Name. Creative Developer." (0% to 20%)
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-100vh"]);
  const o1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  // Section 2: "I build digital experiences." (starts coming in at 20%, peaks at 30%, leaves at 50%)
  const y2 = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.5],
    ["50vh", "0vh", "-50vh"],
  );
  const o2 = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.4, 0.5],
    [0, 1, 1, 0],
  );

  // Section 3: "Bridging design and engineering." (starts at 50%, peaks 60%, leaves 80%)
  const y3 = useTransform(
    scrollYProgress,
    [0.45, 0.6, 0.8],
    ["50vh", "0vh", "-50vh"],
  );
  const o3 = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.7, 0.8],
    [0, 1, 1, 0],
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-10 text-white overflow-hidden">
      {/* SEC 1: Center */}
      <motion.div
        style={{ y: y1, opacity: o1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-4 drop-shadow-lg">
          John Doe.
        </h1>
        <p className="text-xl md:text-3xl font-light text-gray-300 drop-shadow-md">
          Creative Developer.
        </p>
      </motion.div>

      {/* SEC 2: Left Aligned */}
      <motion.div
        style={{ y: y2, opacity: o2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-32"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          I build digital <br /> experiences.
        </h2>
        <p className="text-lg md:text-2xl font-light text-gray-400 max-w-xl drop-shadow-md">
          Crafting immersive, high-performance web applications that blur the
          line between art and software.
        </p>
      </motion.div>

      {/* SEC 3: Right Aligned */}
      <motion.div
        style={{ y: y3, opacity: o3 }}
        className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-32 text-right"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          Bridging design <br /> & engineering.
        </h2>
        <p className="text-lg md:text-2xl font-light text-gray-400 max-w-xl drop-shadow-md">
          Every pixel is considered. Every animation is intentional.
        </p>
      </motion.div>
    </div>
  );
}
