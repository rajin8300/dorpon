import type { LangMode } from '../context/SiteContext'

export interface TranslationDictionary {
  nav: {
    films: string
    packages: string
    storyFaq: string
    contact: string
    book: string
    switchThemeLight: string
    switchThemeDark: string
    languageLabel: string
  }
  hero: {
    badge: string
    status: string
    title: string
    subtitle: string
    bookBtn: string
    waBtn: string
    statFilms: string
    statReels: string
    statPackages: string
    statHq: string
    deckHint: string
  }
  showcase: {
    title: string
    tabFilms: string
    tabReels: string
    tabBts: string
    watchBtn: string
  }
  packages: {
    title: string
    tabWedding: string
    tabOutdoor: string
    selectBtn: string
    bookWa: string
    popularBadge: string
    essentialBadge: string
    bestValueBadge: string
    vipBadge: string
    studentBadge: string
    familyBadge: string
  }
  aboutFaq: {
    aboutTitle: string
    aboutSubtitle: string
    aboutDesc: string
    feature1Title: string
    feature1Desc: string
    feature2Title: string
    feature2Desc: string
    serviceArea: string
    faqTitle: string
  }
  booking: {
    title: string
    subtitle: string
    nameLabel: string
    namePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    serviceLabel: string
    dateLabel: string
    notesLabel: string
    notesPlaceholder: string
    submitBtn: string
    sendingBtn: string
    successTitle: (name: string) => string
    successDesc: (phone: string) => string
    successWaBtn: string
    successNewBtn: string
    errRequired: string
    services: string[]
  }
  contact: {
    title: string
    subtitle: string
    callTitle: string
    callSub: string
    waTitle: string
    waSub: string
    emailTitle: string
    emailSub: string
    copied: string
    fbTitle: string
    fbSub: string
    igTitle: string
    igSub: string
    locTitle: string
    locSub: string
  }
  footer: {
    tagline: string
    allRights: string
    topBtn: string
  }
}

export const translations: Record<LangMode, TranslationDictionary> = {
  bn: {
    nav: {
      films: 'ফিল্ম ও রিল',
      packages: 'প্যাকেজ',
      storyFaq: 'গল্প ও প্রশ্ন',
      contact: 'যোগাযোগ',
      book: 'বুকিং',
      switchThemeLight: 'লাইট মোড',
      switchThemeDark: 'ডার্ক মোড',
      languageLabel: 'ভাষা পরিবর্তন',
    },
    hero: {
      badge: 'দর্পণ ফ্রেম',
      status: 'রাজবাড়ী, ফরিদপুর ও ঢাকা (বুকিং চলছে)',
      title: 'প্রতিটি ফ্রেমে জীবনের গল্প।',
      subtitle: 'রাজবাড়ী, ফরিদপুর ও ঢাকায় হৃদয়স্পর্শী ওয়েডিং ও সিনেমাটিক মুহূর্তের বিশ্বস্ত প্রতিচ্ছবি।',
      bookBtn: 'বুকিং অনুসন্ধান',
      waBtn: 'সরাসরি হোয়াটসঅ্যাপ',
      statFilms: '১১টি ফিল্ম',
      statReels: '১১টি রিল',
      statPackages: '৭টি প্যাকেজ',
      statHq: 'রাজবাড়ী',
      deckHint: 'ট্যাপ করে বড় করুন',
    },
    showcase: {
      title: 'নির্বাচিত ফিল্ম ও সিনেমাটিক রিল',
      tabFilms: 'সিনেমাটিক ফিল্ম',
      tabReels: 'ভার্টিক্যাল রিল',
      tabBts: 'বিহাইন্ড দ্য সিন',
      watchBtn: 'দেখুন',
    },
    packages: {
      title: 'প্যাকেজ ও মূল্য তালিকা',
      tabWedding: 'ওয়েডিং প্যাকেজ',
      tabOutdoor: 'আউটডোর ও পোর্ট্রেট',
      selectBtn: 'এই প্যাকেজটি বেছে নিন',
      bookWa: 'হোয়াটসঅ্যাপে বুক করুন',
      popularBadge: 'সর্বাধিক জনপ্রিয়',
      essentialBadge: 'প্রারম্ভিক',
      bestValueBadge: 'সেরা বাজেট কম্বো',
      vipBadge: 'ভিআইপি রয়্যাল',
      studentBadge: 'একক সেশন',
      familyBadge: 'পারিবারিক স্পেশাল',
    },
    aboutFaq: {
      aboutTitle: 'দর্পণ সম্পর্কে কিছু কথা',
      aboutSubtitle: 'আমরা মূলত বিয়ে, গায়ে হলুদ ও ওয়েডিং স্টোরিটেলিং নিয়ে কাজ করি।',
      aboutDesc:
        'দর্পণ (Dorpon) রাজবাড়ীভিত্তিক একটি প্রফেশনাল ওয়েডিং ভিজ্যুয়াল স্টুডিও। রাজবাড়ী, ফরিদপুর ও ঢাকা জুড়ে প্রতিটি বিয়ের আবেগঘন পারিবারিক মুহূর্ত, সংস্কৃতি ও ভালোবাসার গল্পকে আমরা সিনেমাটিক ফ্রেম ও কালার গ্রেডিংয়ে ফ্রেমবন্দি করি।',
      feature1Title: 'ওয়েডিং স্পেশালিস্ট',
      feature1Desc: 'বিয়ে, গায়ে হলুদ, প্রি ও পোস্ট-ওয়েডিং অনুষ্ঠান।',
      feature2Title: 'সিনেমাটিক ফিল্মস',
      feature2Desc: '৪কে ডকুমেন্টারি ফিল্ম ও মাস্টার সিনেমাটিক কালার।',
      serviceArea: 'রাজবাড়ী, ফরিদপুর ও ঢাকায় নির্ভরযোগ্য সেবা',
      faqTitle: 'সাধারণ জিজ্ঞাসা ও উত্তর',
    },
    booking: {
      title: 'বুকিং স্টুডিও',
      subtitle: 'আপনার কাঙ্ক্ষিত তারিখ ও প্যাকেজ নির্বাচন করে বুকিং রিকোয়েস্ট পাঠান।',
      nameLabel: 'আপনার পুরো নাম',
      namePlaceholder: 'যেমন: তানভীর আহমেদ',
      phoneLabel: 'মোবাইল নম্বর',
      phonePlaceholder: '০১XXXXXXXXX',
      emailLabel: 'ইমেইল অ্যাড্রেস (ঐচ্ছিক)',
      emailPlaceholder: 'yourname@example.com',
      serviceLabel: 'সার্ভিস বা প্যাকেজ বেছে নিন',
      dateLabel: 'অনুষ্ঠানের তারিখ',
      notesLabel: 'অনুষ্ঠানের স্থান ও বিস্তারিত নোট',
      notesPlaceholder: 'ভেন্যুর স্থান, অনুষ্ঠানের সময় এবং বিশেষ কোনো চাহিদা থাকলে লিখুন...',
      submitBtn: 'বুকিং রিকোয়েস্ট পাঠান',
      sendingBtn: 'পাঠানো হচ্ছে...',
      successTitle: (name: string) => `ধন্যবাদ, ${name}!`,
      successDesc: (phone: string) =>
        `আপনার তথ্য আমরা পেয়েছি। খুব শীঘ্রই ${phone} নম্বরে আপনার সাথে যোগাযোগ করা হবে।`,
      successWaBtn: 'হোয়াটসঅ্যাপে বিস্তারিত পাঠান',
      successNewBtn: 'আরেকটি বুকিং অনুসন্ধান',
      errRequired: 'অনুগ্রহ করে আপনার নাম এবং সঠিক মোবাইল নম্বর দিন।',
      services: [
        'ওয়েডিং ফটোগ্রাফি ও সিনেমাটোগ্রাফি',
        'প্রি / পোস্ট ওয়েডিং স্টোরি',
        'গায়ে হলুদ ও পারিবারিক অনুষ্ঠান',
        'আউটডোর ও পোর্ট্রেট সেশন',
        'কর্পোরেট ও বাণিজ্যিক কাজ',
        'অন্যান্য / কাস্টম সার্ভিস',
      ],
    },
    contact: {
      title: 'যোগাযোগ ও সরাসরি বার্তা',
      subtitle:
        'আমরা সর্বদা আপনার বিশেষ দিনের রূপরেখা শুনতে প্রস্তুত। সরাসরি কল, হোয়াটসঅ্যাপ অথবা ইমেইলে যোগাযোগ করুন।',
      callTitle: 'সরাসরি কল করুন',
      callSub: 'প্রতিদিন সকাল ১০টা – রাত ১০টা',
      waTitle: 'হোয়াটসঅ্যাপ চ্যাট',
      waSub: 'দ্রুত তথ্য ও তারিখ নিশ্চিত করতে',
      emailTitle: 'অফিসিয়াল ইমেইল',
      emailSub: 'কপি করতে ক্লিক করুন',
      copied: 'ইমেইল কপি হয়েছে!',
      fbTitle: 'ফেসবুক পেজ',
      fbSub: 'নতুন ফিল্ম ও কাজের আপডেট',
      igTitle: 'ইনস্টাগ্রাম গ্যালারি',
      igSub: 'ব্রাইডাল পোর্ট্রেট ও রিলস',
      locTitle: 'সার্ভিস এরিয়া',
      locSub: 'রাজবাড়ী, ফরিদপুর ও ঢাকা',
    },
    footer: {
      tagline: 'নান্দনিক ওয়েডিং ও সিনেমাটোগ্রাফি',
      allRights: 'সর্বস্বত্ব সংরক্ষিত।',
      topBtn: 'উপরে যান',
    },
  },
  en: {
    nav: {
      films: 'Films & Reels',
      packages: 'Packages',
      storyFaq: 'Story & FAQ',
      contact: 'Contact',
      book: 'Book',
      switchThemeLight: 'Light mode',
      switchThemeDark: 'Dark mode',
      languageLabel: 'Switch language',
    },
    hero: {
      badge: 'Dorpon Frame',
      status: 'Rajbari, Faridpur & Dhaka (Bookings Open)',
      title: 'Every Frame Tells a Story.',
      subtitle:
        'Heartfelt wedding celebrations and cinematic films across Rajbari, Faridpur, and Dhaka.',
      bookBtn: 'Book a Shoot',
      waBtn: 'WhatsApp Direct',
      statFilms: '11 Films',
      statReels: '11 Reels',
      statPackages: '7 Packages',
      statHq: 'Rajbari HQ',
      deckHint: 'Tap to zoom',
    },
    showcase: {
      title: 'Selected Films & Reels',
      tabFilms: 'Cinematic Films',
      tabReels: 'Vertical Reels',
      tabBts: 'Behind The Scenes',
      watchBtn: 'Watch',
    },
    packages: {
      title: 'Packages & Pricing',
      tabWedding: 'Weddings & Events',
      tabOutdoor: 'Outdoor & Portrait',
      selectBtn: 'Select Package',
      bookWa: 'Book on WhatsApp',
      popularBadge: 'MOST POPULAR',
      essentialBadge: 'ESSENTIAL',
      bestValueBadge: 'BEST VALUE',
      vipBadge: 'VIP SIGNATURE',
      studentBadge: 'STUDENT & CASUAL',
      familyBadge: 'FAMILY SPECIAL',
    },
    aboutFaq: {
      aboutTitle: 'A Little About Dorpon',
      aboutSubtitle: 'We mainly capture weddings, gaye holud, and cinematic stories.',
      aboutDesc:
        'Dorpon is a dedicated wedding visual studio based in Rajbari, Bangladesh. We specialize primarily in capturing weddings, emotional family moments, and cultural ceremonies across Rajbari, Faridpur, and Dhaka with timeless color grading and cinematic depth.',
      feature1Title: 'Wedding Focus',
      feature1Desc: 'Bie, Holud, Pre & Post Wedding rituals.',
      feature2Title: 'Cinematic Films',
      feature2Desc: '4K documentary films & master color tones.',
      serviceArea: 'Service-Area Studio in Rajbari, Faridpur & Dhaka',
      faqTitle: 'Frequently Asked Questions',
    },
    booking: {
      title: 'Booking Studio',
      subtitle: 'Reserve your date with transparency — no hidden fees.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Rajin Ahamed',
      phoneLabel: 'Mobile Number',
      phonePlaceholder: '01XXXXXXXXX',
      emailLabel: 'Email Address (Optional)',
      emailPlaceholder: 'yourname@example.com',
      serviceLabel: 'Select Service / Package',
      dateLabel: 'Event Date',
      notesLabel: 'Event Location & Notes',
      notesPlaceholder: 'Share venue location, event timing, and any special requests...',
      submitBtn: 'Send Booking Request',
      sendingBtn: 'Sending...',
      successTitle: (name: string) => `Thank You, ${name}!`,
      successDesc: (phone: string) =>
        `We have received your inquiry. We will contact you at ${phone} shortly.`,
      successWaBtn: 'Open WhatsApp with Details',
      successNewBtn: 'Submit Another Inquiry',
      errRequired: 'Please provide both your name and a valid phone number.',
      services: [
        'Wedding & Cinematography',
        'Pre / Post Wedding',
        'Birthday & Anniversary',
        'Corporate & Commercial',
        'Portrait & Fashion',
        'Other / Custom Service',
      ],
    },
    contact: {
      title: 'Let’s Connect & Collaborate',
      subtitle:
        'We are ready to discuss your celebration across Rajbari, Faridpur, and Dhaka. Reach out via direct call, WhatsApp, or email.',
      callTitle: 'Direct Phone Call',
      callSub: 'Available 10 AM – 10 PM daily',
      waTitle: 'WhatsApp Chat',
      waSub: 'Fastest response for dates & pricing',
      emailTitle: 'Official Inquiries',
      emailSub: 'Click to copy email address',
      copied: 'Copied to clipboard!',
      fbTitle: 'Facebook Community',
      fbSub: 'Films, reviews & recent weddings',
      igTitle: 'Instagram Visuals',
      igSub: 'Curated bridal portrait portfolio',
      locTitle: 'Service-Area Base',
      locSub: 'Rajbari, Faridpur & Dhaka',
    },
    footer: {
      tagline: 'Cinematic Wedding Visuals',
      allRights: 'All rights reserved.',
      topBtn: 'Back to top',
    },
  },
}
