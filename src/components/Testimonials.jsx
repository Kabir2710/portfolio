import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, TechNova",
    text: "Working with this developer was an absolute game-changer. The attention to detail in the WebGL experiences brought our brand to life in ways we didn't think possible.",
  },
  {
    id: 2,
    name: "Marcus Aurelius",
    role: "Creative Director, Studio X",
    text: "A rare breed of engineer who truly understands design. The pixel-perfect implementation and fluid animations elevated our entire product suite.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder, Zenith",
    text: "Delivered a world-class scrolling experience that won us multiple CSS Design awards. Incredibly professional and technically brilliant.",
  },
  {
    id: 4,
    name: "David Chen",
    role: "CTO, FutureCorp",
    text: "The performance optimizations alone were worth it. Our site now loads instantly and runs at a buttery smooth 60fps even with complex 3D scenes.",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  // Parallax for the background glow
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  // We duplicate the array to achieve a seamless repeating marquee
  const duplicateTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      ref={containerRef}
      className="bg-[#121212] py-32 overflow-hidden relative"
    >
      {/* Component-scoped CSS for Marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); } /* Shift by half minus gap to repeat precisely */
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Subtle parallax background glow */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-8 md:px-24 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Client Voices
          </h2>
          <div className="w-24 h-1 bg-white mt-6 mx-auto md:mx-0 rounded-full opacity-50"></div>
        </motion.div>
      </div>

      {/* Auto-scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden z-10 flex">
        {/* Left/Right Fade Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#121212] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#121212] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee gap-8 px-4 w-max">
          {duplicateTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[450px] flex-shrink-0 glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] cursor-grab active:cursor-grabbing group relative overflow-hidden"
            >
              {/* Subtle top inner highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {/* Quote Icon */}
              <div className="text-white/10 text-6xl font-serif absolute top-4 right-8 group-hover:text-white/20 transition-colors duration-500 pointer-events-none">
                "
              </div>

              <p className="text-gray-300 font-light text-base md:text-lg mb-10 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-xl font-bold text-white shadow-inner">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400 font-mono tracking-wider uppercase text-[10px] mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
