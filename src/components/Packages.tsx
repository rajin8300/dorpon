import { useState } from 'react'
import { site } from '../config/site'
import SectionIntro from './SectionIntro'
import { IconArrowUpRight, IconCheck, IconPhone, IconWhatsApp } from './Icons'

interface PackageItem {
  id: string
  name: string
  nameBn: string
  tagline: string
  price: string
  priceUnit?: string
  badge?: string
  badgeColor?: string
  duration: string
  team: string
  isPopular?: boolean
  features: string[]
}

const weddingPackages: PackageItem[] = [
  {
    id: 'shriti',
    name: 'Dorpon Shriti',
    nameBn: 'দর্পণ স্মৃতি',
    tagline: 'Ideal for intimate ceremonies, Gaye Holud & birthdays',
    price: '4,500',
    priceUnit: 'event',
    badge: 'ESSENTIAL',
    badgeColor: 'border-white/20 bg-white/5 text-cream/70',
    duration: '4–5 Hours Coverage',
    team: '1 Senior Photographer',
    features: [
      'Unlimited high-resolution captures',
      '40 signature color-graded edits',
      '⚡ 48-Hour Social Media Sneak-Peek (10 edits)',
      'All original RAW/JPG files via private cloud drive',
      'Delivery within 10–15 days',
    ],
  },
  {
    id: 'bandhon',
    name: 'Dorpon Bandhon',
    nameBn: 'দর্পণ বন্ধন',
    tagline: 'The complete photography & cinematic film combo',
    price: '9,500',
    priceUnit: 'event',
    badge: 'MOST POPULAR ★',
    badgeColor: 'border-rose/50 bg-rose/15 text-rose font-semibold tracking-wider',
    duration: '5–6 Hours Coverage',
    team: '1 Senior Photographer + 1 Cinematographer',
    isPopular: true,
    features: [
      'Unlimited photography + 4K cinematic video',
      '60 signature color-graded edits',
      'Full-event documentary movie + 3-min highlight reel',
      '⚡ 48-Hour Social Media Sneak-Peek (15 edits)',
      'Private online gallery with 1-click client proofing',
      'Delivery within 20–25 days',
    ],
  },
  {
    id: 'utshob',
    name: 'Dorpon Utshob',
    nameBn: 'দর্পণ উৎসব',
    tagline: '2-Day celebration combo (Gaye Holud + Wedding)',
    price: '18,500',
    priceUnit: '2 days',
    badge: 'BEST VALUE (2-DAY)',
    badgeColor: 'border-amber-500/50 bg-amber-500/15 text-amber-300',
    duration: '5 Hours per day (Both events)',
    team: '1 Photographer + 1 Cinematographer (Both days)',
    features: [
      'Complete 2-day photo & cinematic film coverage',
      '100 signature color-graded master edits',
      '2 full-event films + 2 cinematic social media reels',
      '🎁 Complimentary: Laminated premium photo album book',
      '🎁 Complimentary: Custom wooden / metal pen drive gift box',
      'Priority fast-track delivery',
    ],
  },
  {
    id: 'rajkio',
    name: 'Dorpon Signature Grand',
    nameBn: 'দর্পণ রাজকীয়',
    tagline: 'Royal multi-camera coverage with aerial drone',
    price: '28,000',
    priceUnit: 'grand full-day',
    badge: 'VIP SIGNATURE',
    badgeColor: 'border-amber-400/50 bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-amber-200',
    duration: 'Full-Day Unlimited Coverage',
    team: '2 Photographers + 2 Cinematographers + Drone Operator',
    features: [
      '🚁 Aerial drone cinematography & 4K cinematic film',
      'Multi-angle candid storytelling & cinema lighting',
      '150+ signature master edits',
      'Full cinematic wedding feature film + 3 viral reels',
      '🎁 Complimentary: Luxury leather photobook + 12R framed portrait',
      '🎁 Complimentary: Premium wooden pen drive gift set',
      '⚡ Priority expedited delivery (within 15 days)',
    ],
  },
]

const outdoorPackages: PackageItem[] = [
  {
    id: 'solo',
    name: 'Solo & Graduation',
    nameBn: 'সোলো ও গ্র্যাজুয়েশন',
    tagline: 'Portraits, graduation & creative modeling portfolios',
    price: '1,200',
    priceUnit: 'session',
    badge: 'STUDENT SPECIAL',
    duration: '1 Hour Coverage • 1 Photographer',
    team: '1 Creative Photographer',
    features: [
      '15 signature color-graded edits',
      'All original high-res photos via cloud link',
      '1 outdoor location of your choice',
      'Superfast 3-day turnaround',
    ],
  },
  {
    id: 'couple',
    name: 'Couple & Pre-Wedding',
    nameBn: 'কাপল ও প্রি-ওয়েডিং',
    tagline: 'Cinematic love stories & romantic pre-wedding frames',
    price: '2,200',
    priceUnit: 'session',
    badge: 'ROMANTIC COUPLE',
    duration: '1.5 Hours Coverage • 1 Photographer',
    team: '1 Creative Photographer',
    features: [
      '25 signature color-graded edits',
      'Editorial film-inspired color tones',
      'Full-resolution digital delivery',
      'Turnaround within 5 days',
    ],
  },
  {
    id: 'family',
    name: 'Family & Group Gathering',
    nameBn: 'ফ্যামিলি ও গ্রুপ শুট',
    tagline: 'Timeless memories with loved ones and friends',
    price: '3,500',
    priceUnit: 'session',
    badge: 'FAMILY SPECIAL',
    duration: '2.5 Hours Coverage • 1 Photographer',
    team: '1 Senior Photographer',
    features: [
      '40 signature color-graded edits',
      'Both group and individual solo portraits',
      'Unlimited high-resolution cloud delivery',
      'Delivery within 7 days',
    ],
  },
]

export default function Packages() {
  const [tab, setTab] = useState<'wedding' | 'outdoor'>('wedding')

  const currentList = tab === 'wedding' ? weddingPackages : outdoorPackages

  const getWhatsAppLink = (pkg: PackageItem) => {
    const text = `Hello Dorpon,
I would like to inquire about and book the "${pkg.name} (${pkg.nameBn})" — ৳${pkg.price} package. Please share availability and details.`
    return `https://wa.me/8801740744170?text=${encodeURIComponent(text)}`
  }

  return (
    <section
      id="packages"
      aria-labelledby="packages-title"
      className="border-t border-white/10 py-20 sm:py-28 lg:py-36 bg-[#141210]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Investment & Packages"
            title="Curated Collections & Pricing"
            titleId="packages-title"
            description="Thoughtfully crafted packages for weddings, cinematic films, and intimate portraits across Rajbari, Faridpur and beyond."
          />

          {/* Tab Switcher */}
          <div className="reveal flex items-center rounded-full border border-white/10 bg-[#221f1b] p-1 text-[0.72rem] font-medium uppercase tracking-label">
            <button
              type="button"
              onClick={() => setTab('wedding')}
              className={`rounded-full px-5 py-2 transition-all duration-300 ${
                tab === 'wedding'
                  ? 'bg-rose text-white shadow-md'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              Weddings & Events
            </button>
            <button
              type="button"
              onClick={() => setTab('outdoor')}
              className={`rounded-full px-5 py-2 transition-all duration-300 ${
                tab === 'outdoor'
                  ? 'bg-rose text-white shadow-md'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              Portraits & Outdoor
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="reveal mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {currentList.map((pkg) => {
            const waLink = getWhatsAppLink(pkg)

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 sm:p-8 ${
                  pkg.isPopular
                    ? 'border-rose/60 bg-[#2a2621] shadow-[0_0_35px_rgba(225,29,72,0.18)]'
                    : 'border-white/10 bg-[#221f1b] hover:border-white/20 hover:bg-[#26221d]'
                }`}
              >
                <div>
                  {/* Badge */}
                  {pkg.badge ? (
                    <div className="mb-4">
                      <span
                        className={`inline-block rounded-full border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-label ${
                          pkg.badgeColor || 'border-white/20 bg-white/5 text-cream/80'
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    </div>
                  ) : null}

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-2xl font-normal text-cream tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-rose/90 font-medium">
                    {pkg.nameBn}
                  </p>
                  <p className="mt-2 text-xs text-cream/70 leading-relaxed min-h-[32px]">
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 border-y border-white/10 py-5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-sans text-xl font-bold text-rose">৳</span>
                      <span className="font-display text-4xl font-normal text-cream">
                        {pkg.price}
                      </span>
                      {pkg.priceUnit ? (
                        <span className="text-[0.7rem] text-cream/50 uppercase tracking-label ml-1">
                          / {pkg.priceUnit}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3 space-y-1 text-xs text-cream/60 font-sans">
                      <p>⏱ {pkg.duration}</p>
                      <p>👥 {pkg.team}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 space-y-3 font-sans">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-cream/80 leading-relaxed">
                        <IconCheck className="h-4 w-4 shrink-0 text-rose mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <div className="mt-8 pt-4">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-[0.72rem] font-medium uppercase tracking-label transition-all duration-300 ${
                      pkg.isPopular
                        ? 'bg-rose text-white hover:bg-rose/90 shadow-lg shadow-rose/25'
                        : 'border border-white/20 bg-white/5 text-cream hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <IconWhatsApp className="h-4 w-4" />
                    <span>Book on WhatsApp</span>
                    <IconArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Custom inquiry strip */}
        <div className="reveal mt-12 rounded-2xl border border-white/10 bg-[#221f1b] p-6 text-center sm:p-8">
          <p className="text-sm text-cream/80 sm:text-base font-sans">
            Need a custom multi-day package or traveling outside Rajbari & Faridpur? We’d love to tailor a package for you.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-[0.72rem] font-medium uppercase tracking-label text-white transition-colors duration-300 hover:bg-emerald-500"
            >
              <IconWhatsApp className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-2.5 text-[0.72rem] font-medium uppercase tracking-label text-cream transition-colors duration-300 hover:bg-cream hover:text-ink"
            >
              <IconPhone className="h-3.5 w-3.5" />
              <span>Call: {site.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
