import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudy({ project, onClose }) {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 mt-12 md:mt-0">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#121212]/80 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="glass relative w-full flex flex-col md:flex-row max-w-6xl h-[85vh] md:h-[75vh] xl:max-h-[700px] rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button top right (absolute) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur text-white rounded-full flex items-center justify-center z-50 transition-colors border border-white/10"
              aria-label="Close Modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Left Column: Image Preview */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-[#0d0d0d] flex-shrink-0 flex items-center justify-center p-0 md:p-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:bg-none to-transparent pointer-events-none" />
            </div>

            {/* Right Column: Content & Breakdown */}
            <div className="w-full md:w-1/2 h-full flex flex-col p-8 md:p-12 overflow-y-auto no-scrollbar relative bg-[#121212]/40">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-3 block">
                {project.category}
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {project.title}
              </h2>

              <div className="space-y-6 text-gray-300 font-light leading-relaxed flex-1 mb-12">
                <p>
                  {project.description ||
                    "In this project, the core focus was bridging the gap between high-fidelity visual design and performant engineering. Utilizing modern libraries and rendering strategies, I crafted an immersive experience that doesn't compromise on speed."}
                </p>

                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-xs">
                    Role
                  </h4>
                  <p>Lead Developer & Interactive Designer</p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-xs">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Framer Motion", "Tailwind CSS", "WebGL"].map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Sticky Action Buttons at Bottom */}
              <div className="sticky bottom-0 pt-6 mt-auto bg-gradient-to-t from-[#151515] to-transparent flex gap-4 w-full border-t border-white/5 pb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-white text-black font-semibold py-3 rounded-xl hover:scale-[1.02] transition-transform duration-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors duration-200"
                  aria-label="GitHub Repository"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
