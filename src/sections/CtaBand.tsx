import React from "react";

import { Button } from "../components/Button";
import { COMPANY } from "../config/company";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12">
      <div className="absolute inset-0">
        <img src="/2024-10-25.webp" alt="" aria-hidden="true" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-blue-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/60 to-blue-900/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Driveway?</h2>
        <p className="text-blue-100 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          {"Get a free quote for block paving, patios or groundworks. Clean lines, strong foundations, and a finish that lasts."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="white" size="md" as="a" href="#contact">
            Get a Free Quote
          </Button>
          <Button
            variant="outline"
            size="md"
            className="border-white text-white hover:bg-white/10"
            as="a"
            href={`tel:${COMPANY.phoneRaw}`}
          >
            Call {COMPANY.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
