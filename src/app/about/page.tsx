import { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { MissionVision } from "@/components/sections/MissionVision";
import { Founders } from "@/components/sections/Founders";
import { Awards } from "@/components/sections/Awards";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Golden Hour Foundation's mission, vision, and the team dedicated to building safer communities through first aid training.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Founders />
      <Awards />
    </>
  );
}