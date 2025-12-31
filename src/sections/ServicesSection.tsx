import React from "react";

import { ServiceCard } from "../components/ServiceCard";
import { SectionHeading } from "../components/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Our Expertise" center>
        Driveways, Patios & Groundworks
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Block Paving Driveways"
          description="Full driveway installations with proper excavation, compacted sub-base and clean edging for a premium finish that lasts."
        />
        <ServiceCard
          title="Patios & Paving"
          description="Sandstone, porcelain or concrete paving laid to level with tidy lines—ideal for garden seating areas and paths."
        />
        <ServiceCard
          title="Driveway Extensions"
          description="Widen your drive, add turning space, or create extra parking—matched colours and finishes for a seamless look."
        />
        <ServiceCard
          title="Edging & Kerbs"
          description="Strong kerbs and edging to lock everything in place—sharp lines, tidy borders and a professional finish."
        />
        <ServiceCard
          title="Garden Walls & Brickwork"
          description="Low walls, steps, planters and features built in brick or block—great for structure, levels and kerb appeal."
        />
        <ServiceCard
          title="Groundworks & Drainage"
          description="Excavation, base preparation and drainage solutions to keep surfaces stable and help manage water properly."
        />
      </div>
    </section>
  );
}
