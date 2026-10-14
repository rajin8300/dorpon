export type PortfolioCategory =
  | 'All'
  | 'Wedding Films'
  | 'Wedding Photography'
  | 'Holud & Wedding Events'
  | 'Bridal Portraits'
  | 'Outdoor Portrait Films'
  | 'Commercial & Brand Films';

export interface PortfolioProject {
  id: string;
  title: string;
  bengaliTitle?: string;
  category: Exclude<PortfolioCategory, 'All'>;
  year: string;
  location?: string;
  coverImage: string;
  videoEmbedUrl?: string; // YouTube or Vimeo embed
  videoPoster?: string;
  aspectRatio: 'cinemascope' | 'portrait' | 'landscape' | 'classic';
  isFeatured?: boolean;
  synopsis: string;
  stills: {
    url: string;
    caption?: string;
  }[];
  deliverables?: string[];
  gearUsed?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  bengaliTitle?: string;
  summary: string;
  description: string;
  keyDeliverables: string[];
  suitedFor: string;
}

export interface PackageItem {
  id: string;
  code: string;
  name: string;
  subtitle?: string;
  isExampleStartingPrice: boolean;
  priceLabel: string;
  priceAmount?: string;
  description: string;
  inclusions: string[];
  whatsappMessage: string;
  clarificationNote?: string;
}

export interface EquipmentItem {
  id: string;
  category: 'Camera Body' | 'Lenses' | 'Stabilization' | 'Lighting';
  name: string;
  focalLengthOrSpec: string;
  apertureOrFeature?: string;
  artisticRole: string;
  practicalPurpose: string;
}

export interface CreativeProcessStep {
  step: string;
  title: string;
  bengaliTitle: string;
  timelineLabel: string;
  description: string;
  takeaway: string;
}

export interface SiteConfig {
  brandName: string;
  brandBengali: string;
  brandCategory: string;
  coreMessage: string;
  taglineBengali: string;
  heroHeadline: string;
  heroBengaliSupport: string;
  heroDescription: string;
  founder: {
    name: string;
    role: string;
    bio: string;
    profilePhoto: string;
    portfolioUrl: string;
    facebookProfileUrl: string;
  };
  contact: {
    // Editable configuration with explicit placeholders for unconfirmed channels
    whatsappNumber: string; // e.g., '+8801XXXXXXXXX' - will be formatted for wa.me links
    whatsappDisplay: string;
    email: string;
    emailDisplay: string;
    phone: string;
    brandFacebookUrl: string;
    brandInstagramUrl: string;
    businessLocation: string; // e.g., "Dhaka & across Bangladesh"
    availabilityNotice: string;
  };
}
