import { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactMap } from "@/components/sections/ContactMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Golden Hour Foundation. Contact us for training programs, medical camps, or emergency services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      {/* Contact Details Cards - Full Width Row */}
      <ContactDetails />
      
      {/* Map and Form Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Map */}
            <div className="order-2 lg:order-1">
              <ContactMap />
            </div>
            
            {/* Right Column - Form */}
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}