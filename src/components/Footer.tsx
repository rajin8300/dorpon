import React from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Disciplines', href: '#services' },
    { label: 'Investment Packages', href: '#packages' },
    { label: 'Optical Rig', href: '#equipment' },
    { label: 'Studio Ethos', href: '#about' },
    { label: 'Booking Dialogue', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#F3F0E9]/10 pt-16 pb-12 text-[#F3F0E9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F3F0E9]/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl sm:text-4xl uppercase tracking-cinema text-[#F3F0E9]">
                {siteConfig.brandName}
              </span>
              <span className="font-serif text-sm tracking-widest text-[#C6A66B]">
                {siteConfig.brandBengali}
              </span>
            </div>

            <p className="font-serif text-base text-[#C6A66B] italic">
              "{siteConfig.coreMessage}"
            </p>

            <p className="font-serif text-sm text-[#A5A29C]/80">
              {siteConfig.taglineBengali}
            </p>

            <p className="text-xs text-[#A5A29C] font-light max-w-sm leading-relaxed pt-2">
              An independent cinematic wedding filmmaking and fine-art photography studio based in Bangladesh. Crafted with intentional movement and acoustic realism.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] block mb-4">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#A5A29C]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F3F0E9] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Connect Col */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] block mb-4">
              Direct Inquiries
            </span>

            <p className="text-xs text-[#A5A29C] font-light leading-relaxed">
              Accepting commissions for upcoming seasons across Dhaka, Chittagong, Sylhet, and worldwide destinations.
            </p>

            <a
              href={buildWhatsAppLink(
                siteConfig.contact.whatsappNumber,
                'Hello DORPON, I am reaching out to inquire about booking availability.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C6A66B] hover:bg-[#DBC392] text-[#101010] text-xs font-medium tracking-cinema uppercase transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A29C]/70">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {currentYear} DORPON (দর্পণ). All rights reserved.</span>
            <span>•</span>
            <span>Independent Visual Storytelling</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#C6A66B] transition-colors text-[11px] font-mono uppercase tracking-wider"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
