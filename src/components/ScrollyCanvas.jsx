import React, { useEffect, useRef, useMemo } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import framesData from "../frames.json";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const numFrames = framesData.length;
  // Preload objects
  const images = useMemo(() => [], []);

  useEffect(() => {
    let loadedCount = 0;
    framesData.forEach((frame, index) => {
      const img = new Image();
      img.src = `/sequence/${frame}`;
      img.onload = () => {
        loadedCount++;
        // Draw the first frame on load
        if (index === 0) {
          renderFrame(0);
        }
      };
      images[index] = img;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const renderFrame = (index) => {
    if (!canvasRef.current || !images[index]) return;
    const canvas = canvasRef.current;
    // ensure canvas dimensions are correct
    if (
      canvas.width !== window.innerWidth ||
      canvas.height !== window.innerHeight
    ) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    const ctx = canvas.getContext("2d");
    const img = images[index];

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;

    if (!iw || !ih) return;

    // object-fit: cover equivalent
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - nw) / 2, (ch - nh) / 2, nw, nh);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(numFrames - 1, Math.floor(latest * numFrames));
    renderFrame(frameIndex);
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const index = Math.min(
          numFrames - 1,
          Math.floor(scrollYProgress.get() * numFrames),
        );
        renderFrame(index);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [numFrames, scrollYProgress, renderFrame]);

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] w-full bg-[#121212]"
    >
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block w-full h-full absolute inset-0 z-0"
        />

        {/* Overlay Text elements sitting across the 500vh length */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
