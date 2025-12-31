import React from "react";

import { FAQItem } from "../components/FAQItem";
import { SectionHeading } from "../components/SectionHeading";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Common Questions" center>
          Frequently Asked Questions
        </SectionHeading>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-2">
          <FAQItem
            question="Do you provide free estimates?"
            answer="Yes, we offer completely free, no-obligation quotes. We'll visit your property to assess the work required and provide a detailed written breakdown."
          />
          <FAQItem
            question="Are you fully insured?"
            answer="Absolutely. We carry £5 million Public Liability Insurance and £10 million Employer's Liability Insurance for your peace of mind."
          />
          <FAQItem
            question="How long does a driveway or patio take?"
            answer="Most driveways and patios take around 2–5 days depending on size, access, drainage and the finish you choose. We’ll confirm a clear timeline in your quote."
          />
          <FAQItem
            question="Do you handle drainage and proper foundations?"
            answer="Yes. We excavate and build the correct base, set levels, and can add drainage or soakaways where needed—so the surface stays stable and manages water properly."
          />
        </div>
      </div>
    </section>
  );
}
