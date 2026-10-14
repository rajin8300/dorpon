import { PackageItem } from '../types';

/**
 * DORPON Pricing & Packages Data
 * 
 * All prices, inclusions, and WhatsApp messages are editable here.
 * Notice: Package 01 is explicitly labeled as a starting example offer.
 */
export const packagesData: PackageItem[] = [
  {
    id: 'package-holud-wedding',
    code: 'PACKAGE 01',
    name: 'Holud & Wedding',
    subtitle: 'Two-Day Comprehensive Celebration',
    isExampleStartingPrice: true,
    priceLabel: 'Starting from',
    priceAmount: '৳17,000',
    description: 'An integrated two-day coverage designed for families seeking both dynamic Gaye Holud memories and full wedding-day cinematic documentation.',
    inclusions: [
      'Holud evening cinematic movie & teaser trailer',
      'Full wedding-day cinematic movie',
      'Photography coverage for both days (within agreed event schedule)',
      'High-resolution digital delivery via secure private cloud link',
      'Color grading tuned to natural skin tones & cultural color vibrancy'
    ],
    clarificationNote: 'Example starting offer based on standard single-venue schedules in Dhaka. Final quotation adapts to event timeline, location, and customized crew requirements.',
    whatsappMessage: 'Hello DORPON, I am inquiring about PACKAGE 01 — HOLUD & WEDDING (Starting from ৳17,000). Could you please share availability and detailed quotation for our event dates?'
  },
  {
    id: 'package-cinematic-film',
    code: 'PACKAGE 02',
    name: 'Cinematic Film',
    subtitle: 'Dedicated Motion & Sound Narrative',
    isExampleStartingPrice: false,
    priceLabel: 'Price',
    priceAmount: 'Contact for Quotation',
    description: 'Focused exclusively on motion picture craft. Ideal for couples who want their wedding documented as a genuine independent film.',
    inclusions: [
      'Cinematic event coverage with intentional camera direction',
      'Curated highlight film with immersive sound design & vows',
      'Story-driven editing pacing each sequence with emotional rhythm',
      'Optional 60–90 second teaser trailer for digital sharing',
      '4K master delivery with dedicated archival retention'
    ],
    clarificationNote: 'Tailored specifically around your event duration, venue acoustics, and visual storytelling goals.',
    whatsappMessage: 'Hello DORPON, I would like a quotation for PACKAGE 02 — CINEMATIC FILM. Could you please share availability and options for our upcoming event?'
  },
  {
    id: 'package-photography-film',
    code: 'PACKAGE 03',
    name: 'Photography & Film',
    subtitle: 'Harmonized Stills & Motion Direction',
    isExampleStartingPrice: false,
    priceLabel: 'Price',
    priceAmount: 'Contact for Quotation',
    description: 'A balanced collaboration of fine-art photography and cinematic film, ensuring both mediums share the same refined color palette and visual tone.',
    inclusions: [
      'Event photography documenting both key rituals and candid intimacy',
      'Cinematic video coverage with steady framing & natural light focus',
      'Carefully curated and edited high-resolution photo collection',
      'Film deliverables customized to your specific family preferences',
      'Private online gallery ready for family viewing and download'
    ],
    clarificationNote: 'Deliverables and crew composition customized to the size and schedule of your celebration.',
    whatsappMessage: 'Hello DORPON, I am interested in PACKAGE 03 — PHOTOGRAPHY & FILM. Please share availability and quotation for our event.'
  },
  {
    id: 'package-custom-project',
    code: 'PACKAGE 04',
    name: 'Custom Project',
    subtitle: 'Destination, Multi-Day & Bespoke Campaigns',
    isExampleStartingPrice: false,
    priceLabel: 'Inquiry',
    priceAmount: 'Custom Proposal',
    description: 'Bespoke commissions for destination weddings, multi-day celebrations, bridal portrait sessions, fashion lookbooks, or commercial visual campaigns.',
    inclusions: [
      'Tailored coverage schedule tailored to multi-city or destination logistics',
      'Pre-production creative consultation & visual moodboard',
      'Customized deliverable package (film cuts, trailer lengths, print archives)',
      'Direct creative direction with lead filmmaker',
      'Flexible timeline accommodating multi-day ceremonial rhythms'
    ],
    clarificationNote: 'Every custom proposal is built after a preliminary conversation to understand your exact aesthetic requirements.',
    whatsappMessage: 'Hello DORPON, I have a custom wedding / visual storytelling project and would like to discuss a bespoke proposal.'
  }
];
