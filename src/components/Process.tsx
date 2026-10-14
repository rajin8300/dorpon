import React from 'react';
import { processSteps } from '../data/process';

export const Process: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#F3F0E9]/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-[#F3F0E9]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                06 / Workflow & Methodology
              </span>
              <span className="text-xs font-serif text-[#C6A66B]/60">কাজের প্রক্রিয়া</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F3F0E9]">
              The Creative Process
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            From the initial dialogue to the delivery of the final master grades, our four-step workflow ensures clarity, intentionality, and complete calm on your wedding day.
          </p>
        </div>

        {/* Editorial Timeline Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative bg-[#141414] border border-[#F3F0E9]/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#C6A66B]/40 transition-colors"
            >
              <div>
                {/* Step Number & Timeline Stage */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F3F0E9]/10">
                  <span className="font-serif text-3xl sm:text-4xl text-[#C6A66B]">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C]/70">
                    {step.timelineLabel}
                  </span>
                </div>

                {/* Title */}
                <div className="mt-5">
                  <h3 className="font-serif text-2xl text-[#F3F0E9] uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="font-serif text-xs text-[#C6A66B]/80 mt-1">
                    {step.bengaliTitle}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs text-[#A5A29C] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Takeaway */}
              <div className="mt-8 pt-4 border-t border-[#F3F0E9]/5">
                <span className="text-[9px] font-mono uppercase tracking-cinema text-[#C6A66B] block mb-1">
                  Primary Outcome
                </span>
                <p className="text-xs text-[#F3F0E9]/80 font-light italic">
                  {step.takeaway}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
