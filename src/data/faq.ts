export interface FAQItem {
  id: string;
  question: string;
  bengaliQuestion?: string;
  answer: string;
  category: 'Booking' | 'Coverage' | 'Delivery' | 'Travel';
}

export const faqData: FAQItem[] = [
  {
    id: 'booking-advance',
    category: 'Booking',
    question: 'How far in advance should we secure our dates?',
    bengaliQuestion: 'কতদিন আগে বুকিং নিশ্চিত করা উচিত?',
    answer: 'Wedding dates in Bangladesh cluster heavily around winter (November through February) and auspicious holiday windows. Because DORPON operates as an independent, art-directed studio with personal lead creative direction on each booking, we accept a strictly limited number of weddings per month. We recommend inquiring 2 to 6 months prior to your celebration.'
  },
  {
    id: 'travel-coverage',
    category: 'Travel',
    question: 'Do you travel outside Dhaka for events in Sylhet, Chittagong, or destination weddings?',
    bengaliQuestion: 'ঢাকার বাইরে ও আন্তর্জাতিক গন্তব্যে যাতায়াত করেন কি?',
    answer: 'Yes. We frequently document events across Bangladesh—including Chittagong, Sylhet, Cox\'s Bazar, Rajshahi, and destination celebrations. Travel and lodging arrangements are calculated transparently and added to the proposal at actual cost without hidden surcharges.'
  },
  {
    id: 'post-production-timeline',
    category: 'Delivery',
    question: 'What is the post-production and film delivery timeline?',
    bengaliQuestion: 'ভিডিও ও ছবির ফাইনাল ডেলিভারি পেতে কতদিন সময় লাগে?',
    answer: 'A truly cinematic film cannot be rushed through generic batch presets. Our edit process involves narrative pacing, audio cleaning of ceremony vows, and bespoke color grading in S-Log3. We deliver a 60–90 second Teaser Trailer within 7–14 days, followed by the comprehensive curated photo archive within 3–4 weeks, and the full Feature Film master within 6–8 weeks.'
  },
  {
    id: 'low-light-capability',
    category: 'Coverage',
    question: 'How do you handle dim wedding halls and moody evening lighting?',
    bengaliQuestion: 'কম আলো বা রাতের অনুষ্ঠানে ভিডিও কেমন হবে?',
    answer: 'Our optical rig is purposefully optimized for low light. We shoot with ultra-fast f/1.2 and f/1.4 prime lenses and the high-sensitivity Sony a6700 sensor. For dark bridal preparation suites or nighttime rituals, we use the Godox LC1000R handheld continuous soft light—sculpting natural, flattering skin tones without blinding flashes or harsh shadows.'
  },
  {
    id: 'custom-package',
    category: 'Coverage',
    question: 'Can we customize our deliverables or event schedule?',
    bengaliQuestion: 'প্যাকেজের বাইরে প্রয়োজন অনুযায়ী কাস্টমাইজ করা যাবে?',
    answer: 'Absolutely. Every Bangladeshi wedding is unique in family traditions and ceremony length. While our foundational 2-day package (Holud & Wedding) starts from ৳17,000, we happily tailor the coverage hours, add bridal portrait sessions, or separate multi-day itineraries.'
  },
  {
    id: 'payment-structure',
    category: 'Booking',
    question: 'What is the payment and reservation structure?',
    bengaliQuestion: 'পেমেন্ট ও বুকিং কনফার্মেশন প্রক্রিয়া কেমন?',
    answer: 'To officially lock in your dates in our production calendar, a 40% reservation retainer is required upon agreement. 40% is due on the primary event day, and the final 20% is fulfilled upon delivery of your digital proofing archives and final 4K master films.'
  }
];
