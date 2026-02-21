import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Three.js / WebGL", level: 75 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
      { name: "Redis", level: 60 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Git & CI/CD", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Blender (Basic)", level: 50 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smooth feel
    },
  },
};

export default function Skills() {
  return (
    <section className="bg-[#121212] py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Core Arsenal
          </h2>
          <div className="w-24 h-1 bg-white mt-6 mx-auto md:mx-0 rounded-full opacity-50"></div>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-transparent hover:from-white/40 transition-colors duration-500 overflow-hidden group"
            >
              {/* Inner glass layer */}
              <div className="bg-[#121212]/80 backdrop-blur-xl rounded-[15px] h-full p-8 flex flex-col shadow-inner shadow-white/5 relative z-10">
                {/* Subtle gradient glow inside the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>

                <h3 className="text-2xl font-bold text-white mb-8 tracking-wide">
                  {category.title}
                </h3>

                <div className="space-y-8 flex-1">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="w-full">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-gray-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Track */}
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        {/* Animated Progress Fill */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.15,
                            ease: "easeOut",
                          }}
                          className="h-full bg-white/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
