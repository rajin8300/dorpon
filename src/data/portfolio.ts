import { PortfolioProject } from '../types';

/**
 * DORPON Portfolio Projects (Centralized & Easily Replaceable)
 * 
 * NOTE: As noted in project guidelines, these represent curated demo / concept showcase 
 * projects demonstrating DORPON's visual tone and craft. No client names are fabricated.
 * Replace coverImage, videoEmbedUrl, and stills with your actual client films and photos.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'whispering-courtyard',
    title: 'The Whispering Courtyard',
    bengaliTitle: 'নিভৃত প্রাঙ্গণের উপাখ্যান',
    category: 'Wedding Films',
    year: '2024',
    location: 'Dhaka',
    aspectRatio: 'cinemascope',
    isFeatured: true,
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80',
    videoPoster: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/S_8qMhD33o0?autoplay=0&rel=0', // Cinematic wedding film embed
    synopsis: 'A slow-burning narrative film capturing the emotional cadence of a heritage home wedding. Guided by natural directional light through wooden louvers and recorded natural vows.',
    stills: [
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Quiet ceremony moments framed with natural window falloff'
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        caption: 'Heirloom jewelry and slow bridal preparations'
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
        caption: 'Spontaneous candid laugh captured between vows'
      },
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Evening celebration under warm tungstens'
      }
    ],
    deliverables: ['12-Minute Feature Film', '90-Second Cinematic Teaser', 'Archival Master in 4K'],
    gearUsed: ['Sony a6700', 'Sigma 30mm f/1.4', 'Sirui 75mm f/1.2', 'DJI RS5 Combo']
  },
  {
    id: 'gilded-turmeric-rhythms',
    title: 'Gilded Turmeric Rhythms',
    bengaliTitle: 'হলুদের রঙ ও ছন্দ',
    category: 'Holud & Wedding Events',
    year: '2024',
    location: 'Sylhet',
    aspectRatio: 'landscape',
    isFeatured: true,
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=80',
    videoPoster: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=80',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/kJQP7kiw5Fk?autoplay=0&rel=0',
    synopsis: 'A high-energy, vibrant exploration of Gaye Holud celebrations. Fluid camera work tracking through turmeric blessings, flower fights, and spontaneous family choreography.',
    stills: [
      {
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Gaye Holud stage colors and floral backdrop'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
        caption: 'Natural henna and traditional accessories'
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Candid smiles during family songs'
      }
    ],
    deliverables: ['5-Minute Holud Film', '60-Second Social Reel', 'High-Res Stills Set'],
    gearUsed: ['Sony a6700', 'Sigma 16mm f/1.4', 'Sigma 30mm f/1.4', 'DJI RS5 Combo']
  },
  {
    id: 'jamdani-and-quiet-solitude',
    title: 'Jamdani & Quiet Solitude',
    bengaliTitle: 'জামদানি ও স্নিগ্ধ একাকীত্ব',
    category: 'Bridal Portraits',
    year: '2024',
    location: 'Old Dhaka',
    aspectRatio: 'portrait',
    isFeatured: true,
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    videoPoster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/S_8qMhD33o0?autoplay=0&rel=0',
    synopsis: 'An editorial bridal portrait study focusing on authentic Bengali textile craftsmanship, antique gold ornaments, and meditative silence before the festivities commence.',
    stills: [
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Handcrafted Jamdani weave and contemplative gaze'
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        caption: 'Delicate gold jewelry textures under soft directional key light'
      }
    ],
    deliverables: ['60-Second Editorial Portrait Film', 'Fine-Art Stills Portfolio'],
    gearUsed: ['Sony a6700', 'Sirui 75mm f/1.2', 'Godox LC1000R']
  },
  {
    id: 'echoes-of-sacred-vows',
    title: 'Echoes of Sacred Vows',
    bengaliTitle: 'পবিত্র অঙ্গীকারের প্রতিধ্বনি',
    category: 'Wedding Photography',
    year: '2024',
    location: 'Chittagong',
    aspectRatio: 'classic',
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
    videoPoster: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
    synopsis: 'Editorial still photographic documentation honoring ancestral customs. Unobtrusive candid photojournalism capturing unforced expressions during the wedding reception.',
    stills: [
      {
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
        caption: 'The couple surrounded by ceremonial candlelight'
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Generational blessing from grandparents'
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
        caption: 'Intimate reception table laughter'
      }
    ],
    deliverables: ['Curated Stills Album', 'Archival High-Resolution Print Collection'],
    gearUsed: ['Sony a6700', 'Sony 50mm f/1.8', 'Viltrox 85mm f/1.4']
  },
  {
    id: 'twilight-by-the-padma',
    title: 'Twilight by the Padma',
    bengaliTitle: 'পদ্মাপাড়ের গোধূলি',
    category: 'Outdoor Portrait Films',
    year: '2024',
    location: 'Mawa',
    aspectRatio: 'cinemascope',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80',
    videoPoster: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/kJQP7kiw5Fk?autoplay=0&rel=0',
    synopsis: 'A post-wedding cinematic couple study against wide open skies and river breezes at golden hour. Emphasizing movement, flowing fabrics, and gentle romantic glances.',
    stills: [
      {
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Riverbank horizon bathed in warm sunset hues'
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Wind-blown veil in natural riverside breeze'
      }
    ],
    deliverables: ['3-Minute Cinematic Couple Short', 'Color-Graded Digital Gallery'],
    gearUsed: ['Sony a6700', 'Viltrox 85mm f/1.4', 'Sigma 16mm f/1.4', 'DJI RS5 Combo']
  },
  {
    id: 'heirloom-silk-campaign',
    title: 'The Heirloom Silk Narrative',
    bengaliTitle: 'ঐতিহ্যের রেশম',
    category: 'Commercial & Brand Films',
    year: '2024',
    location: 'Dhaka',
    aspectRatio: 'landscape',
    coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80',
    videoPoster: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/S_8qMhD33o0?autoplay=0&rel=0',
    synopsis: 'A commercial visual campaign produced for a heritage Bengali boutique. Atmospheric lighting and macro focal lengths illustrating tactile luxury and modern bridal fashion.',
    stills: [
      {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
        caption: 'Bespoke bridal drape and subtle gold embroidery'
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        caption: 'Studio editorial lighting highlighting fabric sheen'
      }
    ],
    deliverables: ['45-Second Brand Commercial', 'Social Lookbook Assets'],
    gearUsed: ['Sony a6700', 'Sirui 75mm f/1.2', 'Godox LC1000R']
  }
];
