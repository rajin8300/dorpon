import { useState } from 'react'
import { faqList } from '../data/faqData'
import { IconMapPin, IconChevronDown } from './Icons'

export default function AboutAndFaq() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1')

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="about-faq"
      aria-label="About and FAQ"
      className="py-16 sm:py-24 relative border-t border-rule bg-paper text-ink overflow-hidden w-full max-w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-w-0 max-w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start min-w-0">
          {/* Left Column: About Dorpon Story */}
          <div className="lg:col-span-5 flex flex-col gap-6 min-w-0 w-full">
            <div className="rounded-card p-6 sm:p-8 green-glass-panel border border-rule relative overflow-hidden shadow-card">
              {/* Calligraphy Logo Artwork */}
              <div className="mb-5">
                <img
                  src="/logo/logo-white.webp"
                  alt="দর্পণ (Dorpon)"
                  className="h-9 w-auto object-contain"
                />
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-3">
                A Little About Dorpon
              </h2>

              <p className="font-bangla text-base sm:text-lg text-accent font-medium leading-relaxed mb-4">
                আমরা মূলত বিয়ে, গায়ে হলুদ ও ওয়েডিং স্টোরিটেলিং নিয়ে কাজ করি।
              </p>

              <p className="text-sm text-muted leading-relaxed mb-6">
                Dorpon is a dedicated wedding visual studio based in Rajbari, Bangladesh. We specialize primarily in capturing weddings, emotional family moments, and cultural ceremonies across Rajbari, Faridpur, and Dhaka with timeless color grading and cinematic depth.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-rule">
                <div className="p-3.5 rounded-xl bg-paper border border-rule">
                  <p className="text-xs font-semibold text-ink mb-1">Wedding Focus</p>
                  <p className="text-xs text-muted">Bie, Holud, Pre & Post Wedding rituals.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-paper border border-rule">
                  <p className="text-xs font-semibold text-ink mb-1">Cinematic Films</p>
                  <p className="text-xs text-muted">4K documentary films & master color tones.</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-accent font-medium">
                <IconMapPin className="w-4 h-4 text-accent" />
                <span>Service-Area Studio in Rajbari, Faridpur & Dhaka</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-5 min-w-0 w-full">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-2">
                Questions & Answers
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Answers about booking Dorpon for photography and cinematography in Rajbari, Faridpur, and Dhaka.
              </p>
            </div>

            <div className="space-y-3">
              {faqList.map((item, idx) => {
                const isOpen = openFaqId === item.id
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl transition-colors duration-200 border ${
                      isOpen
                        ? 'bg-paper-3 border-accent/50 shadow-md'
                        : 'bg-paper-2 border-rule hover:border-accent/30'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono text-accent font-bold">0{idx + 1}</span>
                        <div>
                          <p className="text-sm sm:text-base font-semibold text-ink">
                            {item.questionEn}
                          </p>
                          {item.questionBn && (
                            <p className="font-bangla text-xs text-muted mt-0.5 leading-normal">
                              {item.questionBn}
                            </p>
                          )}
                        </div>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full bg-paper flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-ink text-paper' : 'text-muted'
                        }`}
                      >
                        <IconChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-5 text-xs sm:text-sm text-ink-2 leading-relaxed border-t border-rule">
                        <p className="mb-2 text-muted">{item.answerEn}</p>
                        {item.answerBn && (
                          <p className="font-bangla text-accent text-xs sm:text-sm leading-relaxed">
                            {item.answerBn}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
