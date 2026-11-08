export interface LivePackageItem {
  id: string
  category: 'wedding' | 'outdoor'
  titleEn: string
  price: number
  priceFormatted: string
  unit: string
  coverage: string
  team: string
  badge?: string
  popular?: boolean
  features: string[]
  waText: string
}

export const livePackagesData: LivePackageItem[] = [
  // WEDDING & EVENTS
  {
    id: 'pkg-shriti',
    category: 'wedding',
    titleEn: 'Standard Photography',
    price: 4500,
    priceFormatted: '৳4,500',
    unit: '/ event',
    coverage: '4–5 Hours Coverage',
    team: '1 Senior Photographer',
    badge: 'ESSENTIAL',
    features: [
      'Unlimited high-resolution captures',
      '40 signature color-graded master edits',
      'Social media sneak-peek within 48 hours (10 edits)',
      'All original RAW & JPEG files via cloud drive',
      'Complete delivery within 10–15 days',
    ],
    waText: 'Hello Dorpon, I would like to book the Standard Photography (৳4,500) package. Please let me know the availability.',
  },
  {
    id: 'pkg-bandhon',
    category: 'wedding',
    titleEn: 'Standard Photo & Cinema',
    price: 9500,
    priceFormatted: '৳9,500',
    unit: '/ event',
    coverage: '5–6 Hours Coverage',
    team: '1 Photographer + 1 Cinematographer',
    badge: 'MOST POPULAR',
    popular: true,
    features: [
      'Unlimited photos & 4K cinematic video coverage',
      '60 signature color-graded master edits',
      'Full-event documentary movie & 3-minute highlight reel',
      'Social media sneak-peek within 48 hours (15 edits)',
      'Complete delivery within 20–25 days',
    ],
    waText: 'Hello Dorpon, I would like to book the Standard Photo & Cinema (৳9,500) package. Please let me know the availability.',
  },
  {
    id: 'pkg-utshob',
    category: 'wedding',
    titleEn: '2-Day Wedding Combo',
    price: 18500,
    priceFormatted: '৳18,500',
    unit: '/ 2 days (Holud + Wedding)',
    coverage: '5 Hours Coverage per Day',
    team: '1 Photographer + 1 Cinematographer',
    badge: 'BEST VALUE',
    features: [
      'Complete 2-day photo & video coverage (Holud & Wedding)',
      '100 signature color-graded master edits',
      '2 full-event documentary films & 2 cinematic reels',
      'Complimentary: Laminated premium photo album book',
      'Complimentary: Custom engraved wooden USB gift box',
      'Priority fast-track delivery',
    ],
    waText: 'Hello Dorpon, I would like to book the 2-Day Wedding Combo (৳18,500) package. Please let me know the availability.',
  },
  {
    id: 'pkg-signature',
    category: 'wedding',
    titleEn: 'Royal Wedding & Drone',
    price: 28000,
    priceFormatted: '৳28,000',
    unit: '/ full day',
    coverage: 'Full Day Unlimited Coverage',
    team: '2 Photo + 2 Cinema + 1 Drone Pilot (5 Crew)',
    badge: 'VIP SIGNATURE',
    features: [
      'Aerial drone cinematography & cinematic lighting',
      'Multi-angle candid storytelling & 4K wedding films',
      '150+ signature master color-graded edits',
      'Full wedding feature film & 3 viral social reels',
      'Complimentary: Luxury leather photobook & 12R frame',
      'Complimentary: Premium wooden USB gift box',
    ],
    waText: 'Hello Dorpon, I would like to book the Royal Wedding & Drone (৳28,000) package. Please let me know the availability.',
  },

  // PORTRAITS & OUTDOOR
  {
    id: 'pkg-solo',
    category: 'outdoor',
    titleEn: 'Solo Portrait',
    price: 1200,
    priceFormatted: '৳1,200',
    unit: '/ session',
    coverage: '1 Hour Coverage',
    team: '1 Creative Photographer',
    badge: 'STUDENT & CASUAL',
    features: [
      '15 signature color-graded edits',
      'All original high-res photos via cloud drive',
      '1 outdoor location of your choice',
      'Fast delivery within 3 days',
    ],
    waText: 'Hello Dorpon, I would like to book the Solo Portrait (৳1,200) session. Please let me know the availability.',
  },
  {
    id: 'pkg-couple',
    category: 'outdoor',
    titleEn: 'Couple & Pre-Wedding',
    price: 2200,
    priceFormatted: '৳2,200',
    unit: '/ session',
    coverage: '1.5 Hours Coverage',
    team: '1 Creative Photographer',
    badge: 'ROMANTIC COUPLE',
    popular: true,
    features: [
      '25 signature color-graded master edits',
      'Editorial cinematic color tones',
      'Full-resolution digital delivery via cloud link',
      'Fast delivery within 5 days',
    ],
    waText: 'Hello Dorpon, I would like to book the Couple & Pre-Wedding (৳2,200) session. Please let me know the availability.',
  },
  {
    id: 'pkg-family',
    category: 'outdoor',
    titleEn: 'Family Session',
    price: 3500,
    priceFormatted: '৳3,500',
    unit: '/ session',
    coverage: '2.5 Hours Coverage',
    team: '1 Senior Photographer',
    badge: 'FAMILY SPECIAL',
    features: [
      '40 signature color-graded master edits',
      'Both group and individual portraits',
      'Unlimited high-resolution cloud delivery',
      'Complete delivery within 7 days',
    ],
    waText: 'Hello Dorpon, I would like to book the Family Session (৳3,500) session. Please let me know the availability.',
  },
]

// Backward compatibility alias
export const packagesData = livePackagesData
export type PackageItem = LivePackageItem
