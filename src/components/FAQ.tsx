import SectionIntro from './SectionIntro'

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-white/10 py-20 sm:py-28 lg:py-36 bg-[#141210]">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          titleId="faq-title"
          description="Answers about booking Dorpon for photography and cinematography in Rajbari, Faridpur and Dhaka."
        />
        <div className="reveal mt-12 max-w-3xl space-y-4">
          <details className="group rounded-xl border border-white/10 bg-[#221f1b] p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-display text-lg text-cream">
              <span>What services does Dorpon offer?</span>
              <span className="transition duration-300 group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Dorpon offers photography and cinematography for weddings, holud ceremonies, portraits and events in Rajbari, Faridpur and Dhaka, Bangladesh.
            </p>
          </details>

          <details className="group rounded-xl border border-white/10 bg-[#221f1b] p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-display text-lg text-cream">
              <span>Where is Dorpon based?</span>
              <span className="transition duration-300 group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Dorpon is based in Rajbari, Bangladesh, and serves Rajbari, Faridpur and Dhaka. It is a service-area business and travels to clients for shoots.
            </p>
          </details>

          <details className="group rounded-xl border border-white/10 bg-[#221f1b] p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-display text-lg text-cream">
              <span>How can I book Dorpon?</span>
              <span className="transition duration-300 group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Reach out directly on WhatsApp at +8801740744170 or phone 01740-744170. We confirm event dates with an advance booking deposit.
            </p>
          </details>

          <details className="group rounded-xl border border-white/10 bg-[#221f1b] p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-display text-lg text-cream">
              <span>How much does a Dorpon shoot cost?</span>
              <span className="transition duration-300 group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Our curated packages start from ৳4,500 for intimate single events, ৳9,500 for full photo & cinema combo, up to ৳28,000 for royal drone coverage. We also offer custom packages for multi-day weddings.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
