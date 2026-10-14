import React, { useState } from 'react';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import { faqData } from '../data/faq';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const directQuestionUrl = buildWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    'Hello DORPON, I have a specific question regarding wedding film coverage.'
  );

  return (
    <section className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#F3F0E9]/5">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
              08 / Client Clarity
            </span>
            <span className="text-xs font-serif text-[#C6A66B]/60">• প্রায়শ জিজ্ঞাসিত প্রশ্নাবলী</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-[#F3F0E9]">
            Common Inquiries
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            Essential information regarding our booking commitments, post-production pacing, low-light techniques, and travel logistics across Bangladesh.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#F3F0E9]/10 border-t border-b border-[#F3F0E9]/10">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`transition-colors duration-200 ${
                  isOpen ? 'bg-[#141414]' : 'hover:bg-[#121212]'
                }`}
              >
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full py-6 px-4 sm:px-6 flex items-start sm:items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="pr-6">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F3F0E9] group-hover:text-[#C6A66B] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                    {faq.bengaliQuestion && (
                      <p className="font-serif text-xs text-[#C6A66B]/70 mt-1">
                        {faq.bengaliQuestion}
                      </p>
                    )}
                  </div>

                  <div className="w-7 h-7 rounded-full border border-[#F3F0E9]/10 group-hover:border-[#C6A66B]/50 flex items-center justify-center text-[#A5A29C] group-hover:text-[#C6A66B] shrink-0 transition-colors">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed animate-fadeIn">
                    <p className="max-w-3xl pl-0 sm:pl-2 border-l-2 border-[#C6A66B]/40">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unresolved Questions CTA */}
        <div className="mt-12 text-center p-6 bg-[#141414] border border-[#F3F0E9]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="font-serif text-lg text-[#F3F0E9] block">
              Have a distinct question about your celebration?
            </span>
            <span className="text-xs text-[#A5A29C] font-light block mt-0.5">
              Send us a direct note on WhatsApp for an unhurried answer.
            </span>
          </div>

          <a
            href={directQuestionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A66B] hover:bg-[#DBC392] text-[#101010] text-xs font-medium tracking-cinema uppercase transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
