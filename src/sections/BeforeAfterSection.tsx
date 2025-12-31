import React from "react";
import { CheckCircle2, Clock, MapPin, Star } from "lucide-react";

import { Button } from "../components/Button";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { SectionHeading } from "../components/SectionHeading";
import { COMPANY } from "../config/company";

export function BeforeAfterSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading subtitle="Transformation">
              Dirt Driveway → Beautiful Block Paving
            </SectionHeading>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              A tired, muddy front drive can make the whole property feel unfinished. We excavated
              and prepared the base, set clean lines with edging, and laid block paving for a
              hard-wearing, premium finish that looks great year-round.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Excavation + compacted sub-base for long-term stability
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Neat edging + levels set for a clean, professional finish
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Block paving laid + jointed and compacted for durability
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Location</p>
                  <p className="text-sm font-bold text-slate-900">UK</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Turnaround</p>
                  <p className="text-sm font-bold text-slate-900">2–3 days</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button as="a" href="#contact">
                Get a Free Quote
              </Button>
              <Button variant="outline" as="a" href={`tel:${COMPANY.phoneRaw}`}>
                Call {COMPANY.phoneDisplay}
              </Button>
            </div>
          </div>

          <div className="relative">
            <BeforeAfterSlider
              beforeImage="/d57a23a4-41fc-42c6-a3f7-6cb2ef64dfd6.jpeg"
              afterImage="/AF1QipMyNzJJZGp0MrY9Rqr2UXITluCQ.jpg"
            />
            <p className="text-center text-sm text-slate-500 mt-4 italic">
              Drag the slider to see the transformation
            </p>

            <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">Completed recently</span>
              </div>
              <p className="text-slate-700 leading-relaxed italic">
                “We wanted a proper driveway instead of mud and ruts. The team were tidy, on time,
                and the finish looks incredible. It’s transformed the front of the house.”
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  H
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">Helen P.</p>
                  <p className="text-slate-500 text-xs">Driveway block paving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
