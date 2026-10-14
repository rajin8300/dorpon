import { SiteConfig } from '../types';

/**
 * DORPON Site Configuration & Editable Information
 * 
 * Update this file to change brand copy, contact details, social links,
 * and founder information.
 */
export const siteConfig: SiteConfig = {
  brandName: 'DORPON',
  brandBengali: 'দর্পণ',
  brandCategory: 'Cinematic Wedding Filmmaking & Visual Storytelling',
  
  coreMessage: 'Every story deserves to be seen differently.',
  taglineBengali: 'প্রতিটি গল্পের নিজস্ব এক দৃষ্টিকোণ।',
  
  heroHeadline: 'YOUR STORY.\nOUR PERSPECTIVE.',
  heroBengaliSupport: 'মুহূর্ত নয়, গল্প ধারণ করি।',
  heroDescription: 'Cinematic wedding films and photography, crafted to preserve the feeling of your most meaningful moments.',

  founder: {
    name: 'Rajin Ahamed',
    role: 'Cinematographer & Visual Director',
    bio: 'Independent filmmaker and visual storyteller dedicated to capturing authentic human connection with an intentional, cinematic eye. Focusing on deliberate framing, natural light, and pacing that allows genuine emotions to breathe.',
    profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    portfolioUrl: 'https://rajinmd.com',
    facebookProfileUrl: 'https://facebook.com/rajin830',
  },

  contact: {
    /**
     * CONFIGURABLE CONTACT CHANNELS:
     * Replace with confirmed official studio contact details.
     */
    whatsappNumber: '+8801700000000', // EDIT: Replace with active WhatsApp number in international format (+880...)
    whatsappDisplay: '+880 1700-000000 (Studio WhatsApp)',
    phone: '+880 1700-000000',
    email: 'inquiry@dorponcinema.com', // EDIT: Replace with active studio email
    emailDisplay: 'inquiry@dorponcinema.com',
    brandFacebookUrl: 'https://facebook.com/dorponcinema', // EDIT: Replace with official DORPON page URL
    brandInstagramUrl: 'https://instagram.com/dorponcinema', // EDIT: Replace with official DORPON Instagram
    businessLocation: 'Dhaka & available for bookings across Bangladesh',
    availabilityNotice: 'Bookings open for the upcoming wedding season. Inquiries typically receive a response within 24 hours.',
  },
};
