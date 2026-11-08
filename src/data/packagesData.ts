export interface LivePackageItem {
  id: string
  category: 'wedding' | 'outdoor'
  titleEn: string
  titleBn: string
  price: number
  priceFormatted: string
  priceFormattedBn: string
  unit: string
  unitBn: string
  coverage: string
  coverageBn: string
  team: string
  teamBn: string
  badge?: string
  badgeBn?: string
  popular?: boolean
  features: string[]
  featuresBn: string[]
  waText: string
  waTextBn: string
}

export const livePackagesData: LivePackageItem[] = [
  // WEDDING & EVENTS
  {
    id: 'pkg-shriti',
    category: 'wedding',
    titleEn: 'Standard Photography',
    titleBn: 'স্ট্যান্ডার্ড ফটোগ্রাফি',
    price: 4500,
    priceFormatted: '৳4,500',
    priceFormattedBn: '৳৪,৫০০',
    unit: '/ event',
    unitBn: '/ ইভেন্ট',
    coverage: '4–5 Hours Coverage',
    coverageBn: '৪–৫ ঘণ্টা কাভারেজ',
    team: '1 Senior Photographer',
    teamBn: '১ জন সিনিয়র ফটোগ্রাফার',
    badge: 'ESSENTIAL',
    badgeBn: 'প্রারম্ভিক',
    features: [
      'Unlimited high-resolution captures',
      '40 signature color-graded master edits',
      'Social media sneak-peek within 48 hours (10 edits)',
      'All original RAW & JPEG files via cloud drive',
      'Complete delivery within 10–15 days',
    ],
    featuresBn: [
      'সীমাহীন হাই-রেজ্যুলেশন ছবি',
      '৪০টি সিগনেচার মাস্টার কালার গ্রেডেড এডিট',
      '৪৮ ঘণ্টার মধ্যে সোশ্যাল মিডিয়া স্ন্যাক-পিক (১০টি এডিট)',
      'ক্লাউড ড্রাইভের মাধ্যমে সব মূল র ও জেপিইজি ফাইল',
      '১০–১৫ দিনের মধ্যে সম্পূর্ণ ডেলিভারি',
    ],
    waText: 'Hello Dorpon, I would like to book the Standard Photography (৳4,500) package. Please let me know the availability.',
    waTextBn: 'আসসালামু আলাইকুম দর্পণ, আমি স্ট্যান্ডার্ড ফটোগ্রাফি (৳৪,৫০০) প্যাকেজটি বুক করতে আগ্রহী। বিস্তারিত ও তারিখ নিশ্চিত করতে চাই।',
  },
  {
    id: 'pkg-bandhon',
    category: 'wedding',
    titleEn: 'Standard Photo & Cinema',
    titleBn: 'স্ট্যান্ডার্ড ফটো ও সিনেমা',
    price: 9500,
    priceFormatted: '৳9,500',
    priceFormattedBn: '৳৯,৫০০',
    unit: '/ event',
    unitBn: '/ ইভেন্ট',
    coverage: '5–6 Hours Coverage',
    coverageBn: '৫–৬ ঘণ্টা কাভারেজ',
    team: '1 Photographer + 1 Cinematographer',
    teamBn: '১ ফটোগ্রাফার + ১ সিনেমাটোগ্রাফার',
    badge: 'MOST POPULAR',
    badgeBn: 'সর্বাধিক জনপ্রিয়',
    popular: true,
    features: [
      'Unlimited photos & 4K cinematic video coverage',
      '60 signature color-graded master edits',
      'Full-event documentary movie & 3-minute highlight reel',
      'Social media sneak-peek within 48 hours (15 edits)',
      'Complete delivery within 20–25 days',
    ],
    featuresBn: [
      'সীমাহীন ছবি ও ৪কে সিনেমাটিক ভিডিও কাভারেজ',
      '৬০টি সিগনেচার মাস্টার কালার গ্রেডেড এডিট',
      'সম্পূর্ণ অনুষ্ঠানের ডকুমেন্টারি মুভি ও ৩ মিনিটের হাইলাইট রিল',
      '৪৮ ঘণ্টার মধ্যে সোশ্যাল মিডিয়া স্ন্যাক-পিক (১৫টি এডিট)',
      '২০–২৫ দিনের মধ্যে সম্পূর্ণ ডেলিভারি',
    ],
    waText: 'Hello Dorpon, I would like to book the Standard Photo & Cinema (৳9,500) package. Please let me know the availability.',
    waTextBn: 'আসসালামু আলাইকুম দর্পণ, আমি স্ট্যান্ডার্ড ফটো ও সিনেমা (৳৯,৫০০) প্যাকেজটি বুক করতে আগ্রহী। বিস্তারিত ও তারিখ নিশ্চিত করতে চাই।',
  },
  {
    id: 'pkg-utshob',
    category: 'wedding',
    titleEn: '2-Day Wedding Combo',
    titleBn: '২-দিনের ওয়েডিং কম্বো',
    price: 18500,
    priceFormatted: '৳18,500',
    priceFormattedBn: '৳১৮,৫০০',
    unit: '/ 2 days (Holud + Wedding)',
    unitBn: '/ ২ দিন (হলুদ + বিয়ে)',
    coverage: '5 Hours Coverage per Day',
    coverageBn: 'প্রতিদিন ৫ ঘণ্টা কাভারেজ',
    team: '1 Photographer + 1 Cinematographer',
    teamBn: '১ ফটোগ্রাফার + ১ সিনেমাটোগ্রাফার',
    badge: 'BEST VALUE',
    badgeBn: 'সেরা বাজেট কম্বো',
    features: [
      'Complete 2-day photo & video coverage (Holud & Wedding)',
      '100 signature color-graded master edits',
      '2 full-event documentary films & 2 cinematic reels',
      'Complimentary: Laminated premium photo album book',
      'Complimentary: Custom engraved wooden USB gift box',
      'Priority fast-track delivery',
    ],
    featuresBn: [
      'হলুদ ও বিয়ের পূর্ণাঙ্গ ২-দিনের ফটো ও ভিডিও কাভারেজ',
      '১০০টি সিগনেচার মাস্টার কালার গ্রেডেড এডিট',
      '২টি পূর্ণাঙ্গ ডকুমেন্টারি ফিল্ম ও ২টি সিনেমাটিক রিল',
      'বিশেষ উপহার: লেমিনেটেড প্রিমিয়াম ফটো অ্যালবাম বুক',
      'বিশেষ উপহার: কাস্টম খোদাই করা কাঠের ইউএসবি গিফট বক্স',
      'অগ্রাধিকার ভিত্তিতে দ্রুত ডেলিভারি',
    ],
    waText: 'Hello Dorpon, I would like to book the 2-Day Wedding Combo (৳18,500) package. Please let me know the availability.',
    waTextBn: 'আসসালামু আলাইকুম দর্পণ, আমি ২-দিনের ওয়েডিং কম্বো (৳১৮,৫০০) প্যাকেজটি বুক করতে আগ্রহী। বিস্তারিত ও তারিখ নিশ্চিত করতে চাই।',
  },
  {
    id: 'pkg-signature',
    category: 'wedding',
    titleEn: 'Royal Wedding & Drone',
    titleBn: 'রয়্যাল ওয়েডিং ও ড্রোন',
    price: 28000,
    priceFormatted: '৳28,000',
    priceFormattedBn: '৳২৮,০০০',
    unit: '/ full day',
    unitBn: '/ সারাদিন',
    coverage: 'Full Day Unlimited Coverage',
    coverageBn: 'সারাদিন সীমাহীন কাভারেজ',
    team: '2 Photo + 2 Cinema + 1 Drone Pilot (5 Crew)',
    teamBn: '৫ জনের পূর্ণাঙ্গ টিম (২ ফটো + ২ সিনেমা + ১ ড্রোন)',
    badge: 'VIP SIGNATURE',
    badgeBn: 'ভিআইপি রয়্যাল',
    features: [
      'Aerial drone cinematography & cinematic lighting',
      'Multi-angle candid storytelling & 4K wedding films',
      '150+ signature master color-graded edits',
      'Full wedding feature film & 3 viral social reels',
      'Complimentary: Luxury leather photobook & 12R frame',
      'Complimentary: Premium wooden USB gift box',
    ],
    featuresBn: [
      'এরিয়াল ড্রোন সিনেমাটোগ্রাফি ও সিনেমাটিক লাইটিং',
      'মাল্টি-অ্যাঙ্গেল ক্যান্ডিড স্টোরিটেলিং ও ৪কে ওয়েডিং ফিল্ম',
      '১৫০+ সিগনেচার মাস্টার কালার গ্রেডেড এডিট',
      'পূর্ণাঙ্গ ওয়েডিং ফিচার ফিল্ম ও ৩টি ভাইরাল সোশ্যাল রিল',
      'বিশেষ উপহার: লাক্সারি লেদার ফটোবুক ও ১২আর বাঁধাই করা ফ্রেম',
      'বিশেষ উপহার: প্রিমিয়াম কাঠের ইউএসবি গিফট বক্স',
    ],
    waText: 'Hello Dorpon, I would like to book the Royal Wedding & Drone (৳28,000) package. Please let me know the availability.',
    waTextBn: 'আসসালামু আলাইকুম দর্পণ, আমি রয়্যাল ওয়েডিং ও ড্রোন (৳২৮,০০০) প্যাকেজটি বুক করতে আগ্রহী। বিস্তারিত ও তারিখ নিশ্চিত করতে চাই।',
  },

  // PORTRAITS & OUTDOOR
  {
    id: 'pkg-solo',
    category: 'outdoor',
    titleEn: 'Solo Portrait',
    titleBn: 'একক আউটডোর পোর্ট্রেট',
    price: 1200,
    priceFormatted: '৳1,200',
    priceFormattedBn: '৳১,২০০',
    unit: '/ session',
    unitBn: '/ সেশন',
    coverage: '1 Hour Coverage',
    coverageBn: '১ ঘণ্টা কাভারেজ',
    team: '1 Creative Photographer',
    teamBn: '১ জন ক্রিয়েটিভ ফটোগ্রাফার',
    badge: 'STUDENT & CASUAL',
    badgeBn: 'একক সেশন',
    features: [
      '15 signature color-graded edits',
      'All original high-res photos via cloud drive',
      '1 outdoor location of your choice',
      'Fast delivery within 3 days',
    ],
    featuresBn: [
      '১৫টি সিগনেচার কালার গ্রেডেড এডিট',
      'ক্লাউড ড্রাইভের মাধ্যমে সব মূল হাই-রেজ ছবি',
      'আপনার পছন্দের ১টি আউটডোর লোকেশন',
      '৩ দিনের মধ্যে দ্রুত ডেলিভারি',
    ],
    waText: 'Hello Dorpon, I would like to book the Solo Portrait (৳1,200) session. Please let me know the availability.',
    waTextBn: 'আসসালামু আলাইকুম দর্পণ, আমি একক আউটডোর পোর্ট্রেট (৳১,২০০) সেশনটি বুক করতে আগ্রহী। বিস্তারিত জানাতে অনুরোধ করছি।',
  },
  {
    id: 'pkg-couple',
    category: 'outdoor',
    titleEn: 'Couple & Pre-Wedding',
    titleBn: 'কাপল ও প্রি-ওয়েডিং',
    price: 2200,
    priceFormatted: '৳2,200',
    priceFormattedBn: '৳২,২০০',
    unit: '/ session',
    unitBn: '/ সেশন',
    coverage: '1.5 Hours Coverage',
    coverageBn: '১.৫ ঘণ্টা কাভারেজ',
    team: '1 Creative Photographer',
    teamBn: '১ জন ক্রিয়েটিভ ফটোগ্রাফার',
    badge: 'ROMANTIC COUPLE',
    badgeBn: 'রোমান্টিক কাপল',
    popular: true,
    features: [
      '25 signature color-graded master edits',
      'Editorial cinematic color tones',
      'Full-resolution digital delivery via cloud link',
      'Fast delivery within 5 days',
    ],
    featuresBn: [
      '২৫টি সিগনেচার কালার গ্রেডেড মাস্টার এডিট',
      'এডিটোরিয়াল সিনেমাটিক কালার টোন',
      'ক্লাউড লিংকের মাধ্যমে ফুল-রেজ্যুলেশন ডিজিটাল ডেলিভারি',
      '৫ দিনের মধ্যে দ্রুত ডেলিভারি',
    ],
    waText: 'Hello Dorpon, I would like to book the Couple & Pre-Wedding (৳2,200) session. Please let me know the availability.',
    waTextBn: 'আসসালামু আলাইকুম দর্পণ, আমি কাপল ও প্রি-ওয়েডিং (৳২,২০০) সেশনটি বুক করতে আগ্রহী। বিস্তারিত জানাতে অনুরোধ করছি।',
  },
  {
    id: 'pkg-family',
    category: 'outdoor',
    titleEn: 'Family Session',
    titleBn: 'ফ্যামিলি পোর্ট্রেট সেশন',
    price: 3500,
    priceFormatted: '৳3,500',
    priceFormattedBn: '৳৩,৫০০',
    unit: '/ session',
    unitBn: '/ সেশন',
    coverage: '2.5 Hours Coverage',
    coverageBn: '২.৫ ঘণ্টা কাভারেজ',
    team: '1 Senior Photographer',
    teamBn: '১ জন সিনিয়র ফটোগ্রাফার',
    badge: 'FAMILY SPECIAL',
    badgeBn: 'পারিবারিক স্পেশাল',
    features: [
      '40 signature color-graded master edits',
      'Both group and individual portraits',
      'Unlimited high-resolution cloud delivery',
      'Complete delivery within 7 days',
    ],
    featuresBn: [
      '৪০টি সিগনেচার কালার গ্রেডেড মাস্টার এডিট',
      'পারিবারিক গ্রুপ ও সিঙ্গেল পোর্ট্রেট কাভারেজ',
      'সীমাহীন হাই-রেজ ক্লাউড ডেলিভারি',
      '৭ দিনের মধ্যে সম্পূর্ণ ডেলিভারি',
    ],
    waText: 'Hello Dorpon, I would like to book the Family Session (৳3,500) session. Please let me know the availability.',
    waTextBn: 'আসসালামু আলাইকুম দর্পণ, আমি ফ্যামিলি পোর্ট্রেট সেশন (৳৩,৫০০) বুক করতে আগ্রহী। বিস্তারিত জানাতে অনুরোধ করছি।',
  },
]

// Backward compatibility alias
export const packagesData = livePackagesData
export type PackageItem = LivePackageItem
