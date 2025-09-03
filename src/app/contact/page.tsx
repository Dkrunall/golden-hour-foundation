import { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Golden Hour Foundation. Contact us for training programs, medical camps, or emergency services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
    </>
  );
}