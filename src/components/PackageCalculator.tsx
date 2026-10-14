import React, { useState } from 'react';
import { Calculator, MessageSquare, Check } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface PackageCalculatorProps {
  onOpenBookingWithDetails?: (details: string) => void;
}

export const PackageCalculator: React.FC<PackageCalculatorProps> = ({
  onOpenBookingWithDetails,
}) => {
  const [days, setDays] = useState<'1' | '2' | '3'>('2');
  const [coverageMedium, setCoverageMedium] = useState<'film' | 'stills' | 'both'>('both');
  const [addOns, setAddOns] = useState<string[]>(['teaser']);

  const addOnOptions = [
    {
      id: 'teaser',
      name: '60–90s Fast-Turnaround Cinematic Teaser',
      detail: 'Delivered within 7–14 days for immediate digital sharing',
      basePrice: 3000,
    },
    {
      id: 'bridal-prep',
      name: 'Bridal Preparation & Jamdani Portrait Film',
      detail: 'Dedicated morning suite coverage with soft lighting & macro lens',
      basePrice: 5000,
    },
    {
      id: 'outdoor-session',
      name: 'Outdoor Couple Portrait Cinema Session',
      detail: 'Separate golden-hour romantic cinematography prior/post wedding',
      basePrice: 6000,
    },
  ];

  const toggleAddOn = (id: string) => {
    setAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Base starting rates calculations (transparent estimations)
  const calculateEstimatedStarting = () => {
    let base = 0;
    if (days === '1') {
      if (coverageMedium === 'film') base = 12000;
      else if (coverageMedium === 'stills') base = 10000;
      else base = 18000;
    } else if (days === '2') {
      // 2 Days (matches our foundational Package 01 starting at ৳17,000 for standard Dhaka schedules)
      if (coverageMedium === 'film') base = 16000;
      else if (coverageMedium === 'stills') base = 14000;
      else base = 17000; // Foundational starting package 01
    } else {
      // 3 Days
      if (coverageMedium === 'film') base = 25000;
      else if (coverageMedium === 'stills') base = 22000;
      else base = 28000;
    }

    const addOnTotal = addOns.reduce((sum, id) => {
      const match = addOnOptions.find((o) => o.id === id);
      return sum + (match ? match.basePrice : 0);
    }, 0);

    return base + addOnTotal;
  };

  const estimatedTotal = calculateEstimatedStarting();

  const getDaysLabel = () => {
    if (days === '1') return 'Single-Day Event (Wedding or Holud)';
    if (days === '2') return 'Two-Day Celebration (Holud & Wedding)';
    return 'Three-Day Complete Festivities (Holud, Wedding & Reception)';
  };

  const getMediumLabel = () => {
    if (coverageMedium === 'film') return 'Cinematography Exclusive';
    if (coverageMedium === 'stills') return 'Photography Exclusive';
    return 'Harmonized Film & Fine-Art Stills';
  };

  const generatedSummary = `${getDaysLabel()} | ${getMediumLabel()}${
    addOns.length > 0 ? ` | Add-ons: ${addOns.join(', ')}` : ''
  } (Est. starting from ৳${estimatedTotal.toLocaleString()})`;

  const whatsappMessage = `Hello DORPON, I configured a custom coverage framework on your website:
• Schedule: ${getDaysLabel()}
• Coverage: ${getMediumLabel()}
• Add-ons: ${addOns.length > 0 ? addOns.join(', ') : 'None'}
• Estimated Starting: ৳${estimatedTotal.toLocaleString()}

Could we check availability and discuss a formal proposal for our dates?`;

  const whatsappUrl = buildWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    whatsappMessage
  );

  return (
    <section className="py-20 sm:py-28 bg-[#121212] border-t border-b border-[#F3F0E9]/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F3F0E9]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                Interactive Planner
              </span>
              <span className="text-xs font-serif text-[#C6A66B]/60">• কাস্টম প্রস্তাবনা প্রস্তুতকারক</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F3F0E9]">
              Configure Your Coverage
            </h2>
          </div>

          <p className="max-w-md text-xs text-[#A5A29C] font-light leading-relaxed">
            Every celebration in Bangladesh follows its own ceremonial rhythm. Select your duration and visual mediums below to formulate a preliminary scope.
          </p>
        </div>

        {/* Interactive Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Duration */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] block mb-3">
                01. Event Timeline & Days
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setDays('1')}
                  className={`p-4 text-left border transition-all ${
                    days === '1'
                      ? 'border-[#C6A66B] bg-[#C6A66B]/10 text-[#F3F0E9]'
                      : 'border-[#F3F0E9]/10 bg-[#161616] text-[#A5A29C] hover:border-[#F3F0E9]/20'
                  }`}
                >
                  <span className="font-serif text-lg block text-[#F3F0E9]">1 Day</span>
                  <span className="text-[11px] block mt-1 font-light">Single Ceremony or Reception</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDays('2')}
                  className={`p-4 text-left border transition-all ${
                    days === '2'
                      ? 'border-[#C6A66B] bg-[#C6A66B]/10 text-[#F3F0E9]'
                      : 'border-[#F3F0E9]/10 bg-[#161616] text-[#A5A29C] hover:border-[#F3F0E9]/20'
                  }`}
                >
                  <span className="font-serif text-lg block text-[#F3F0E9]">2 Days</span>
                  <span className="text-[11px] block mt-1 font-light">Gaye Holud & Wedding Day</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDays('3')}
                  className={`p-4 text-left border transition-all ${
                    days === '3'
                      ? 'border-[#C6A66B] bg-[#C6A66B]/10 text-[#F3F0E9]'
                      : 'border-[#F3F0E9]/10 bg-[#161616] text-[#A5A29C] hover:border-[#F3F0E9]/20'
                  }`}
                >
                  <span className="font-serif text-lg block text-[#F3F0E9]">3+ Days</span>
                  <span className="text-[11px] block mt-1 font-light">Holud, Wedding & Reception</span>
                </button>
              </div>
            </div>

            {/* Step 2: Medium */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] block mb-3">
                02. Visual Medium & Disciplines
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setCoverageMedium('film')}
                  className={`p-4 text-left border transition-all ${
                    coverageMedium === 'film'
                      ? 'border-[#C6A66B] bg-[#C6A66B]/10 text-[#F3F0E9]'
                      : 'border-[#F3F0E9]/10 bg-[#161616] text-[#A5A29C] hover:border-[#F3F0E9]/20'
                  }`}
                >
                  <span className="font-serif text-lg block text-[#F3F0E9]">Motion Film</span>
                  <span className="text-[11px] block mt-1 font-light">Cinematic Video & Audio Master</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCoverageMedium('stills')}
                  className={`p-4 text-left border transition-all ${
                    coverageMedium === 'stills'
                      ? 'border-[#C6A66B] bg-[#C6A66B]/10 text-[#F3F0E9]'
                      : 'border-[#F3F0E9]/10 bg-[#161616] text-[#A5A29C] hover:border-[#F3F0E9]/20'
                  }`}
                >
                  <span className="font-serif text-lg block text-[#F3F0E9]">Fine-Art Stills</span>
                  <span className="text-[11px] block mt-1 font-light">High-Res Editorial Photography</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCoverageMedium('both')}
                  className={`p-4 text-left border transition-all ${
                    coverageMedium === 'both'
                      ? 'border-[#C6A66B] bg-[#C6A66B]/10 text-[#F3F0E9]'
                      : 'border-[#F3F0E9]/10 bg-[#161616] text-[#A5A29C] hover:border-[#F3F0E9]/20'
                  }`}
                >
                  <span className="font-serif text-lg block text-[#F3F0E9]">Both Combined</span>
                  <span className="text-[11px] block mt-1 font-light">Harmonized Film & Stills</span>
                </button>
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] block mb-3">
                03. Editorial Creative Add-ons
              </span>
              <div className="space-y-2.5">
                {addOnOptions.map((opt) => {
                  const isChecked = addOns.includes(opt.id);
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => toggleAddOn(opt.id)}
                      className={`w-full p-3.5 text-left border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-[#C6A66B] bg-[#C6A66B]/10 text-[#F3F0E9]'
                          : 'border-[#F3F0E9]/10 bg-[#161616] text-[#A5A29C] hover:border-[#F3F0E9]/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 mt-0.5 border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'border-[#C6A66B] bg-[#C6A66B] text-[#101010]'
                              : 'border-[#F3F0E9]/20'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs text-[#F3F0E9] font-medium block">
                            {opt.name}
                          </span>
                          <span className="text-[11px] text-[#A5A29C] font-light block">
                            {opt.detail}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-[#C6A66B] shrink-0 pl-3">
                        +৳{opt.basePrice.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Estimation Panel */}
          <div className="lg:col-span-5 bg-[#161616] border border-[#C6A66B]/30 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F3F0E9]/10">
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                Scope Summary
              </span>
              <span className="text-xs font-mono text-[#A5A29C]">DORPON Quotation Guide</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-cinema text-[#A5A29C] block">
                  Duration
                </span>
                <span className="text-[#F3F0E9] font-serif text-lg">
                  {getDaysLabel()}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-cinema text-[#A5A29C] block">
                  Medium
                </span>
                <span className="text-[#F3F0E9] font-serif text-lg">
                  {getMediumLabel()}
                </span>
              </div>

              {addOns.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-cinema text-[#A5A29C] block">
                    Selected Add-ons ({addOns.length})
                  </span>
                  <ul className="mt-1 space-y-1 text-[#C6A66B] text-[11px]">
                    {addOns.map((id) => {
                      const item = addOnOptions.find((o) => o.id === id);
                      return item ? <li key={id}>• {item.name}</li> : null;
                    })}
                  </ul>
                </div>
              )}
            </div>

            {/* Price Output */}
            <div className="pt-6 border-t border-[#F3F0E9]/10">
              <span className="text-[10px] uppercase font-mono tracking-cinema text-[#A5A29C] block">
                Estimated Starting Investment
              </span>
              <div className="font-serif text-4xl sm:text-5xl text-[#C6A66B] mt-1 font-normal">
                ৳{estimatedTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-[#A5A29C] font-light mt-2 italic leading-relaxed">
                * Indicative starting rate based on standard Dhaka venue schedules. Final quotation adapts to event duration, location, and customized crew requirements.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#C6A66B] hover:bg-[#DBC392] text-[#101010] text-xs font-medium tracking-cinema uppercase flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#C6A66B]/10"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire This Plan via WhatsApp</span>
              </a>

              {onOpenBookingWithDetails && (
                <button
                  type="button"
                  onClick={() => onOpenBookingWithDetails(generatedSummary)}
                  className="w-full py-2.5 text-center text-xs text-[#A5A29C] hover:text-[#F3F0E9] border border-[#F3F0E9]/10 hover:border-[#F3F0E9]/30 transition-colors"
                >
                  Prefill into Booking Form →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
