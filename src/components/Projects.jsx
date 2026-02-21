import React, { useState } from "react";
import { motion } from "framer-motion";
import CaseStudy from "./CaseStudy";

const projects = [
  {
    id: 1,
    title: "Neon Odyssey",
    category: "WebGL Experience",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Echo E-commerce",
    category: "Fullstack App",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Aura Dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Stellar Landing",
    category: "Marketing Site",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Selected Work
          </h2>
          <div className="w-24 h-1 bg-white mt-6 rounded-full opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              onClick={() => setSelectedProject(project)}
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative block aspect-[4/3] rounded-2xl overflow-hidden glass hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-sm font-medium tracking-widest text-[#a1a1a1] uppercase mb-2 block transform group-hover:-translate-y-2 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CaseStudy
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
