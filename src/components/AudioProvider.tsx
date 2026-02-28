"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Howl } from "howler";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playCrunch: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(true);
  const [crunchSound, setCrunchSound] = useState<Howl | null>(null);

  useEffect(() => {
    // Lazy load or setup howler sound
    // Normally we'd need a real .mp3 file in public/sounds/crunch.mp3
    // For now we setup the instance but catch playback errors
    const sound = new Howl({
      src: ["/sounds/crunch.mp3"],
      volume: 0.5,
      html5: true,
      onloaderror: () => console.log("Crunch sound failed to load, which is expected if the file doesn't exist yet.")
    });
    setCrunchSound(sound);
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      Howler.mute(next);
      return next;
    });
  };

  const playCrunch = () => {
    if (!isMuted && crunchSound) {
      crunchSound.play();
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playCrunch }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
}
