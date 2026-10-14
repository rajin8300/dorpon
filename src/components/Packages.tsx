import React from 'react';
import { MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { packagesData } from '../data/packages';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface PackagesProps {
  onSelectPackageForForm?: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackageForForm }) => {
  return (
    <section id="packages" className="py-24 sm:py-32 bg-[#101010] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-[#F3F0E9]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                03 / Investment & Packages
              </span>
              <span className="text-xs font-serif text-[#C6A66B]/60">প্যাকেজ ও মূল্য তালিকা</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F3F0E9]">
              Investment Tiers
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            Transparent starting frameworks crafted around deliberate coverage. Every package can be adapted to your unique ceremonial timetable and venues.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesData.map((pkg) => {
            const whatsappUrl = buildWhatsAppLink(
              siteConfig.contact.whatsappNumber,
              pkg.whatsappMessage
            );

            return (
              <div
                key={pkg.id}
                className={`relative bg-[#141414] border flex flex-col justify-between transition-all duration-300 p-6 sm:p-7 ${
                  pkg.isExampleStartingPrice
                    ? 'border-[#C6A66B]/50 bg-[#161616] shadow-xl shadow-[#C6A66B]/5'
                    : 'border-[#F3F0E9]/10 hover:border-[#F3F0E9]/25'
                }`}
              >
                {/* Top Badge for Featured Starting Package */}
                {pkg.isExampleStartingPrice && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#C6A66B] text-[#101010] text-[9px] font-mono uppercase tracking-cinema font-bold">
                    Featured Example Package
                  </div>
                )}

                <div>
                  {/* Code & Title */}
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C]/70 pb-3 border-b border-[#F3F0E9]/10">
                    <span>{pkg.code}</span>
                    {pkg.isExampleStartingPrice && (
                      <span className="text-[#C6A66B]">Most Popular</span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0E9] uppercase mt-4">
                    {pkg.name}
                  </h3>

                  {pkg.subtitle && (
                    <p className="text-xs text-[#C6A66B] mt-1 font-light">
                      {pkg.subtitle}
                    </p>
                  )}

                  {/* Pricing Display */}
                  <div className="mt-6 pb-6 border-b border-[#F3F0E9]/10">
                    <span className="text-[10px] uppercase font-mono tracking-cinema text-[#A5A29C] block">
                      {pkg.priceLabel}
                    </span>
                    <div className="font-serif text-3xl sm:text-4xl text-[#F3F0E9] mt-1">
                      {pkg.priceAmount}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#A5A29C] mt-5 font-light leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Inclusions List */}
                  <div className="mt-6 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] block">
                      Deliverables Included
                    </span>
                    <ul className="space-y-2.5 text-xs text-[#F3F0E9]/90">
                      {pkg.inclusions.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#C6A66B] shrink-0 mt-0.5" />
                          <span className="font-light leading-snug">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clarification Note */}
                  {pkg.clarificationNote && (
                    <div className="mt-6 pt-4 border-t border-[#F3F0E9]/5 text-[11px] text-[#A5A29C]/70 italic leading-relaxed">
                      * {pkg.clarificationNote}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 pt-6 border-t border-[#F3F0E9]/10 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 text-xs font-medium tracking-cinema uppercase flex items-center justify-center gap-2 transition-all ${
                      pkg.isExampleStartingPrice
                        ? 'bg-[#C6A66B] hover:bg-[#DBC392] text-[#101010]'
                        : 'bg-[#1C1C1C] hover:bg-[#C6A66B] text-[#F3F0E9] hover:text-[#101010] border border-[#F3F0E9]/10 hover:border-[#C6A66B]'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Package via WhatsApp</span>
                  </a>

                  {onSelectPackageForForm && (
                    <button
                      onClick={() => onSelectPackageForForm(pkg.name)}
                      className="w-full text-center py-1.5 text-[11px] text-[#A5A29C] hover:text-[#F3F0E9] transition-colors"
                    >
                      Fill Inquiry Form Instead →
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Integrity & Transparency Note */}
        <div className="mt-14 p-5 sm:p-6 bg-[#161616] border border-[#C6A66B]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A5A29C]">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-[10px] text-[#C6A66B] uppercase tracking-cinema block mb-0.5">
                Our Booking & Pricing Transparency
              </span>
              <span>
                Package 01 reflects our current foundational offering. We never promise unlimited shooting hours, generic template delivery quotas, or undisclosed add-ons. Every agreement is documented transparently before dates are secured.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
