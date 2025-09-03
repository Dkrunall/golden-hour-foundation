import { Metadata } from "next";
import { GalleryHero } from "@/components/sections/GalleryHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos and videos from Golden Hour Foundation's training sessions, medical camps, and community outreach programs.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}