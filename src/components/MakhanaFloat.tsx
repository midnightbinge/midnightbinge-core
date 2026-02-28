"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "./ThemeProvider";

export function MakhanaFloat() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: theme === "dark" ? "#FAF5E9" : "#060b28" },
            links: { enable: false },
            move: {
              direction: "top",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: { enable: true, width: 1920, height: 1080 },
              value: 30, // sparse feeling
            },
            opacity: {
              value: { min: 0.1, max: 0.3 },
            },
            shape: {
              type: "circle", // placeholder for organic makhana shapes
            },
            size: {
              value: { min: 5, max: 20 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
