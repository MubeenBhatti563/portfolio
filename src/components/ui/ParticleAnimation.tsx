"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { ParticleAnimationProps, ParticleType } from "@/types";

const ParticleAnimation = ({ direction }: ParticleAnimationProps) => {
  const [clientParticles, setClientParticles] = useState<ParticleType[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 60 + 20}%`,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * -10,
    }));

    // Defer setting state to avoid synchronous setState inside the effect
    const timer = setTimeout(() => setClientParticles(generatedParticles), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {clientParticles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-purple-700 blur-[0.5px]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: direction === "top-down" ? ["-10vh", "110vh"] : [0, -8, 8, 0],
            x:
              direction === "left-right" ? ["-10vw", "110vw"] : [0, -15, 15, 0],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration:
              direction === "top-down"
                ? particle.duration + 2
                : particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleAnimation;
