import { EntranceAnimation } from "@/components/home/EntranceAnimation";
import { Hero } from "@/components/home/Hero";
import { BestSellers } from "@/components/home/BestSellers";
import { MoodSelector } from "@/components/home/MoodSelector";
import { Philosophy } from "@/components/home/Philosophy";
import { LifestyleBand } from "@/components/home/LifestyleBand";
import { Testimonials } from "@/components/home/Testimonials";
import { SpinWheel } from "@/components/home/SpinWheel";
import { ClosingBridge } from "@/components/home/ClosingBridge";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <EntranceAnimation />
      <Hero />
      <BestSellers />
      <MoodSelector />
      <Philosophy />
      <LifestyleBand />
      <Testimonials />
      <SpinWheel />
      <ClosingBridge />
    </div>
  );
}
