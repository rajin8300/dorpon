export interface FaqItem {
  id: string
  questionEn: string
  questionBn?: string
  answerEn: string
  answerBn?: string
}

export const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    questionEn: 'What services does Dorpon specialize in?',
    questionBn: 'দর্পণ (Dorpon) কোন বিষয়ে বিশেষজ্ঞ?',
    answerEn: 'Dorpon specializes primarily in wedding photography and cinematography — capturing Gaye Holud, intimate ceremonies, grand receptions, and pre/post-wedding stories with cinematic depth across Rajbari, Faridpur, and Dhaka.',
    answerBn: 'দর্পণ মূলত ওয়েডিং ফটোগ্রাফি ও সিনেমাটোগ্রাফি নিয়ে কাজ করে — বিয়ে, গায়ে হলুদ, রিসেপশন, প্রি ও পোস্ট-ওয়েডিং স্টোরিটেলিং এবং নির্বাচিত পোর্ট্রেট শুটে আমাদের বিশেষ পারদর্শিতা রয়েছে।',
  },
  {
    id: 'faq-2',
    questionEn: 'Where is Dorpon based and where do you travel?',
    questionBn: 'দর্পণ কোন এলাকায় কাজ করে থাকে?',
    answerEn: 'Dorpon is based in Rajbari, Bangladesh. It is a service-area business with no walk-in office, and travels to clients across Rajbari, Faridpur, and Dhaka for shoots.',
    answerBn: 'দর্পণ মূলত রাজবাড়ীভিত্তিক একটি প্রফেশনাল স্টুডিও। ক্লায়েন্টদের শুটের জন্য আমরা রাজবাড়ী, ফরিদপুর এবং ঢাকা জুড়ে ভ্রমণ করে থাকি।',
  },
  {
    id: 'faq-3',
    questionEn: 'How can I book Dorpon for an upcoming event?',
    questionBn: 'কীভাবে দর্পণ-এ বুকিং নিশ্চিত করব?',
    answerEn: 'Fill in the interactive booking studio form on this page, message Dorpon directly on WhatsApp, or call 01740-744170.',
    answerBn: 'এই পেজের বুকিং স্টুডিও ফর্মটি পূরণ করুন, অথবা সরাসরি WhatsApp বা 01740-744170 নম্বরে কল করে আপনার ইভেন্টের তারিখ ও বিস্তারিত জানিয়ে বুকিং করতে পারেন।',
  },
  {
    id: 'faq-4',
    questionEn: 'How can I contact Dorpon directly?',
    questionBn: 'দর্পণের সাথে সরাসরি যোগাযোগের মাধ্যমগুলো কী?',
    answerEn: 'Call or WhatsApp 01740-744170, email contact@rajinmd.com, or use the interactive booking form on this page.',
    answerBn: 'ফোন বা হোয়াটসঅ্যাপে 01740-744170, ইমেইলে contact@rajinmd.com, অথবা ফেসবুক ও ইনস্টাগ্রামের মাধ্যমে সরাসরি যুক্ত হতে পারেন।',
  },
  {
    id: 'faq-5',
    questionEn: "Can I see Dorpon's previous work before booking?",
    questionBn: 'বুকিংয়ের আগে পূর্ববর্তী কাজগুলো দেখার সুযোগ আছে কি?',
    answerEn: 'Yes. The unified media showcase on this page features 12 curated photographs, 11 cinematic films, 6 vertical reels, and 5 behind-the-scenes reels.',
    answerBn: 'হ্যাঁ, আমাদের ইউনিফাইড শোকেস হাবে ১২টি এক্সক্লুসিভ ছবি, ১১টি সিনেমাটিক ফিল্ম, ৬টি ভার্টিক্যাল রিল এবং ৫টি বিটিএস ভিডিও সংরক্ষিত আছে।',
  },
  {
    id: 'faq-6',
    questionEn: 'How much does a Dorpon shoot cost?',
    questionBn: 'ফটোগ্রাফি ও সিনেমাটোগ্রাফির খরচ কেমন হতে পারে?',
    answerEn: 'Our transparent packages range from ৳1,200 for solo sessions up to ৳28,000 for VIP royal wedding coverage with drone. Standard wedding photography starts at ৳4,500.',
    answerBn: 'আমাদের প্যাকেজ শুরু হয় ১,২০০ টাকা (সোলো পোর্ট্রেট) থেকে শুরু করে ২৮,০০০ টাকা (ভিআইপি রাজকীয় ড্রোন ওয়েডিং কভারেজ) পর্যন্ত। স্ট্যান্ডার্ড ওয়েডিং ফটোগ্রাফি ৪,৫০০ টাকা থেকে শুরু।',
  },
]
