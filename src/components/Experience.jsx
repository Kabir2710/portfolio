import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    year: "2023 - Present",
    role: "Senior Creative Developer",
    description:
      "Leading front-end architecture and crafting immersive WebGL experiences for global brands. Focused on high-performance animations and cutting-edge interactive design.",
  },
  {
    id: 2,
    year: "2020 - 2023",
    role: "Front-end Engineer",
    description:
      "Developed scalable React applications, optimizing performance and establishing robust design systems. Bridged the gap between complex engineering and fluid UI.",
  },
  {
    id: 3,
    year: "2018 - 2020",
    role: "Interactive Designer",
    description:
      "Designed and prototyped pixel-perfect digital experiences. Collaborated closely with dev teams to ensure design vision was maintained at scale.",
  },
  {
    id: 4,
    year: "2016 - 2018",
    role: "Web Developer",
    description:
      "Built foundational web platforms. Explored early web animation techniques and interactive storytelling methodologies.",
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="bg-[#121212] py-32 px-8 md:px-24 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Experience
          </h2>
          <div className="w-24 h-1 bg-white mt-6 mx-auto md:mx-0 rounded-full opacity-50"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line Base (Hidden on mobile) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/10 hidden md:block" />

          {/* Central Animated Line (Hidden on mobile) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white hidden md:block origin-top shadow-[0_0_15px_rgba(255,255,255,0.8)] z-0"
          />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex items-center justify-between ${isEven ? "md:flex-row-reverse" : "md:flex-row"} flex-col md:mb-24`}
                >
                  {/* Timeline Dot with pulse */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#121212] border-2 border-white rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] ${isEven ? "md:text-left" : "md:text-right"} relative z-10`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="glass p-8 rounded-2xl group hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-white/30 transition-all duration-500 will-change-transform"
                    >
                      <span className="text-gray-400 font-mono text-sm tracking-widest mb-3 block uppercase">
                        {exp.year}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {exp.role}
                      </h3>
                      <p className="text-gray-300 font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for structural alignment */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
