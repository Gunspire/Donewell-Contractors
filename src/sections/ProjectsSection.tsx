import React from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { cn } from "../lib/cn";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Work" center>
          Recent Projects
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: "/2024-10-25.webp",
              title: "Block Paving Driveway (Charcoal + Border)",
              loc: "Surrey",
              date: "Recently",
              duration: "3 days",
              highlights: ["Excavation & sub-base", "Edging & levels", "Compacted finish"],
              alt: "Completed block paving driveway with charcoal blocks and border detail",
            },
            {
              img: "/donewell/candidate-before-3.jpg",
              title: "Sandstone Patio & Step Detail",
              loc: "South London",
              date: "Last month",
              duration: "2 days",
              highlights: ["Large-format slabs", "Neat cuts", "Level finish"],
              alt: "Completed sandstone patio with large format slabs and step detail",
            },
            {
              img: "/donewell/candidate-before.jpg",
              title: "Garden Feature Area + Brickwork",
              loc: "Kent",
              date: "Earlier this year",
              duration: "2 days",
              highlights: ["Curved brickwork", "Feature area", "Tidy finish"],
              alt: "Completed garden feature area with curved brick seating and paving",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] ring-1 ring-slate-200 bg-slate-100"
            >
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold leading-snug">{project.title}</h4>
                <p className="text-blue-200 font-semibold flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" /> {project.loc}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-blue-300" />
                    <span className="font-medium">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-300" />
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className={cn(
                        "inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-slate-100 backdrop-blur"
                      )}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline">View Full Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
