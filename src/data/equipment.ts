import { EquipmentItem } from '../types';

/**
 * DORPON Equipment Inventory & Optical Philosophy
 * 
 * Strict equipment list representing actual filmmaker tools.
 * DO NOT invent unconfirmed cameras, drones, or fixtures.
 */
export const equipmentData: EquipmentItem[] = [
  {
    id: 'camera-sony-a6700',
    category: 'Camera Body',
    name: 'Sony a6700',
    focalLengthOrSpec: 'Super 35mm / APS-C 4K 10-bit 4:2:2',
    apertureOrFeature: 'S-Log3 Dynamic Range & AI Autofocus Tracking',
    artisticRole: 'The Digital Film Canvas',
    practicalPurpose: 'Delivers 14+ stops of dynamic range to capture both deep shadowy backgrounds and glittering bridal zari threads without clipping. Its agile form factor enables discreet movement in crowded hall aisles where large cinema rigs would be intrusive.'
  },
  {
    id: 'lens-sigma-16',
    category: 'Lenses',
    name: 'Sigma 16mm f/1.4 DC DN',
    focalLengthOrSpec: '16mm Ultra-Wide Angle (24mm Full-Frame Equivalent)',
    apertureOrFeature: 'f/1.4 Maximum Aperture',
    artisticRole: 'Environmental Architecture & Immersive Celebration',
    practicalPurpose: 'Essential for capturing the scale of grand Bangladeshi wedding venues, ornate stage floral designs, and the energetic, wide-angle dance circles during Gaye Holud nights.'
  },
  {
    id: 'lens-sigma-30',
    category: 'Lenses',
    name: 'Sigma 30mm f/1.4 DC DN',
    focalLengthOrSpec: '30mm Natural Perspective (45mm Full-Frame Equivalent)',
    apertureOrFeature: 'f/1.4 Maximum Aperture',
    artisticRole: 'Documentary Realism & Human-Eye Perspective',
    practicalPurpose: 'Matches natural human field of vision. Used for candid documentary storytelling—conversations between family elders, passing of betel leaves, and spontaneous laughter between cousins.'
  },
  {
    id: 'lens-sony-50',
    category: 'Lenses',
    name: 'Sony E 50mm f/1.8 OSS',
    focalLengthOrSpec: '50mm Medium Telephoto (75mm Full-Frame Equivalent)',
    apertureOrFeature: 'Optical SteadyShot & f/1.8 Aperture',
    artisticRole: 'Intimate Ritual Focus & Clean Compression',
    practicalPurpose: 'Provides gentle subject isolation for traditional rituals—the exchange of rings, floral garlands (mala badal), and tender parental hugs—with optical stabilization for handheld organic texture.'
  },
  {
    id: 'lens-sirui-75',
    category: 'Lenses',
    name: 'Sirui Sniper 75mm f/1.2',
    focalLengthOrSpec: '75mm Cinematic Telephoto (112mm Full-Frame Equivalent)',
    apertureOrFeature: 'Ultra-Fast f/1.2 Aperture',
    artisticRole: 'Dreamlike Bridal Portraits & Luminous Bokeh',
    practicalPurpose: 'An ultra-fast portrait prime that melts chaotic wedding hall backgrounds into smooth, painterly bokeh. Perfect for close-up bridal jewelry details, tearful farewells (rukshati), and editorial bride portraits in dim dressing suites.'
  },
  {
    id: 'lens-viltrox-85',
    category: 'Lenses',
    name: 'Viltrox 85mm f/1.4',
    focalLengthOrSpec: '85mm Deep Compression (127mm Full-Frame Equivalent)',
    apertureOrFeature: 'f/1.4 Aperture & Razor Sharp Subject Separation',
    artisticRole: 'Discreet Telephoto Observation',
    practicalPurpose: 'Allows the cinematographer to capture raw, unposed emotional reactions from across the room without making family members self-conscious or interrupting sacred moments.'
  },
  {
    id: 'stabilizer-dji-rs5',
    category: 'Stabilization',
    name: 'DJI RS5 Combo',
    focalLengthOrSpec: '3-Axis Intelligent Gimbal Stabilization',
    artisticRole: 'Fluid Narrative Motion',
    practicalPurpose: 'Translates footsteps into silky, cinematic glides. Used for slow tracking shots following the bride walking under the phoolon ki chaadar (flower canopy) and continuous circular moves around the couple on the stage.'
  },
  {
    id: 'light-godox-lc1000r',
    category: 'Lighting',
    name: 'Godox LC1000R',
    focalLengthOrSpec: 'High-CRI RGB Handheld Light Stick',
    apertureOrFeature: 'Soft Directional Accent Lighting (96+ CRI/TLCI)',
    artisticRole: 'Cinematic Mood & Subtle Edge Sculpting',
    practicalPurpose: 'Provides gentle, cinematic key and rim lighting during bridal makeup prep and moody night couple portraits. Soft, diffused output preserves natural skin tones without harsh flash bursts.'
  }
];
