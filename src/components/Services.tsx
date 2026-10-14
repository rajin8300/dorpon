import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [expandedId, setExpandedId] = useState<string | null>(servicesData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleInquire = (service: ServiceItem) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(service.title);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0E0E0E] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-[#F3F0E9]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                02 / Disciplines & Craft
              </span>
              <span className="text-xs font-serif text-[#C6A66B]/60">পরিষেবাসমূহ</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F3F0E9]">
              Visual Offerings
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            Presented as an editorial index of storytelling disciplines. Each commission receives individual art direction, intentional lens choices, and careful acoustic mixing.
          </p>
        </div>

        {/* Minimal Editorial List */}
        <div className="mt-12 divide-y divide-[#F3F0E9]/10 border-b border-[#F3F0E9]/10">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-[#141414]/70' : 'hover:bg-[#121212]'
                }`}
              >
                {/* Collapsible Header Row */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full py-6 sm:py-8 px-3 sm:px-6 flex items-start sm:items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                    <span className="font-mono text-xs sm:text-sm text-[#C6A66B] tracking-cinema shrink-0">
                      {service.number}
                    </span>

                    <div>
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F3F0E9] group-hover:text-[#C6A66B] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      {service.bengaliTitle && (
                        <p className="font-serif text-xs text-[#C6A66B]/70 mt-1">
                          {service.bengaliTitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 pl-4 mt-1 sm:mt-0">
                    <span className="hidden lg:inline text-xs text-[#A5A29C]/80 max-w-xs font-light text-right">
                      {service.summary}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#F3F0E9]/10 group-hover:border-[#C6A66B]/50 flex items-center justify-center text-[#A5A29C] group-hover:text-[#C6A66B] transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="px-3 sm:px-6 pb-8 pt-2 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pl-0 sm:pl-16">
                      <div className="md:col-span-7 space-y-4">
                        <p className="text-sm sm:text-base text-[#F3F0E9]/90 font-light leading-relaxed">
                          {service.description}
                        </p>

                        <div className="pt-2">
                          <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] block mb-1">
                            Ideal Context
                          </span>
                          <p className="text-xs text-[#C6A66B] font-light italic">
                            {service.suitedFor}
                          </p>
                        </div>
                      </div>

                      <div className="md:col-span-5 bg-[#181818] p-5 border border-[#F3F0E9]/5 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] block mb-2">
                            Key Deliverables
                          </span>
                          <ul className="space-y-1.5 text-xs text-[#A5A29C]">
                            {service.keyDeliverables.map((deliv, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-[#C6A66B] shrink-0" />
                                <span>{deliv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-5 mt-5 border-t border-[#F3F0E9]/10">
                          <button
                            onClick={() => handleInquire(service)}
                            className="inline-flex items-center gap-2 text-xs font-medium tracking-cinema uppercase text-[#C6A66B] hover:text-[#DBC392] transition-colors"
                          >
                            <span>Inquire for this service</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
