import { Metadata } from "next";
import { TrainingHero } from "@/components/sections/TrainingHero";
import { TrainingSyllabus } from "@/components/sections/TrainingSyllabus";
import { TrainingPrograms } from "@/components/sections/TrainingPrograms";
import { TheoryPractical } from "@/components/sections/TheoryPractical";
import { Awards } from "@/components/sections/Awards";
import { MediaPreview } from "@/components/sections/MediaPreview";

export const metadata: Metadata = {
  title: "Training Programs",
  description: "Comprehensive first aid training programs by qualified doctors and instructors. Industrial and social training programs across India with certification.",
};

export default function TrainingPage() {
  return (
    <>
      <TrainingHero />
      <TrainingSyllabus />
      <TrainingPrograms />
      <TheoryPractical />
    </>
  );
}