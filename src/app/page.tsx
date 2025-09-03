import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ProgramsPreview } from "@/components/sections/ProgramsPreview";
import { Advisors } from "@/components/sections/Advisors";
import { OurDoctors } from "@/components/sections/OurDoctors";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { MediaPreview } from "@/components/sections/MediaPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProgramsPreview />
      <Advisors />
      <OurDoctors />
      <Testimonials />
      <Awards />
      <MediaPreview />
    </>
  );
}
