# DORPON (দর্পণ) — Premium Cinematic Wedding & Visual Storytelling Studio

A production-ready, custom-designed web experience for **DORPON (দর্পণ)**, an independent wedding filmmaking, photography, and visual storytelling brand based in Bangladesh.

Designed with an art-directed editorial aesthetic combining the quiet dignity of an independent film studio with modern magazine typography. Built from scratch without templates, bloated UI libraries, or fabricated accolades.

---

## ✦ Core Brand Identity

- **Brand Name**: DORPON / দর্পণ
- **Category**: Wedding Cinematography, Wedding Photography, Gaye Holud & Event Films, Bridal Portraits, Commercial Visuals
- **Philosophy**: *"Every story deserves to be seen differently."* (প্রতিটি গল্পের নিজস্ব এক দৃষ্টিকোণ।)
- **Art Direction**:
  - Deep charcoal canvas (`#101010`)
  - Warm editorial off-white typography (`#F3F0E9`)
  - Muted secondary gray (`#A5A29C`)
  - Restrained champagne gold accent (`#C6A66B`)
  - Editorial serifs (*Cormorant Garamond* / *Hind Siliguri*) paired with clean sans-serif (*Plus Jakarta Sans*)

---

## ✦ Quick Start

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)

### 2. Installation
Open a terminal in this directory:
```bash
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:3000` (or the URL displayed in the terminal).

### 4. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## ✦ How to Customize & Maintain the Site

All studio data, media links, package rates, and equipment are cleanly separated in `src/data/` so you never have to touch component code to update content.

### 1. Updating Brand & Contact Information (`src/data/siteConfig.ts`)
Edit `src/data/siteConfig.ts` to update studio phone numbers, official WhatsApp link, emails, and social links:
```typescript
export const siteConfig: SiteConfig = {
  brandName: 'DORPON',
  brandBengali: 'দর্পণ',
  founder: {
    name: 'Rajin Ahamed',
    role: 'Cinematographer & Visual Director',
    portfolioUrl: 'https://rajinmd.com',
    facebookProfileUrl: 'https://facebook.com/rajin830',
    // ...
  },
  contact: {
    whatsappNumber: '+8801700000000', // Set international format for wa.me links
    whatsappDisplay: '+880 1700-000000',
    email: 'inquiry@dorponcinema.com',
    // ...
  }
};
```

### 2. Editing Packages & Pricing (`src/data/packages.ts`)
To update package prices, inclusions, or WhatsApp inquiry prefilled text:
- Open `src/data/packages.ts`.
- Edit `priceAmount`, `inclusions`, and `whatsappMessage`.
- Notice that **Package 01** is configured with `isExampleStartingPrice: true` and labeled "Starting from" (৳17,000) to maintain commercial transparency.

### 3. Adding or Replacing Portfolio Projects (`src/data/portfolio.ts`)
Each project object in `src/data/portfolio.ts` includes:
- `title` & `bengaliTitle`: Display titles
- `category`: Category tag ('Wedding Films', 'Wedding Photography', 'Holud & Wedding Events', 'Bridal Portraits', 'Outdoor Portrait Films', 'Commercial & Brand Films')
- `coverImage`: URL or path to high-resolution image
- `videoEmbedUrl`: YouTube/Vimeo embed URL (e.g. `https://www.youtube-nocookie.com/embed/VIDEO_ID?autoplay=0&rel=0`)
- `stills`: Array of photographic frames with captions for the modal gallery and lightbox
- `gearUsed`: Optical setup used on that project

### 4. Updating Equipment Inventory (`src/data/equipment.ts`)
The equipment section accurately reflects your active filmmaking rig:
- **Camera Body**: Sony a6700
- **Lenses**:
  - Sigma 16mm f/1.4 DC DN (Wide celebrations & Holud dancing)
  - Sigma 30mm f/1.4 DC DN (Human perspective & candid interactions)
  - Sony 50mm f/1.8 OSS (Ceremonial intimacy & ring exchange)
  - Sirui Sniper 75mm f/1.2 (Dreamlike bridal bokeh & low-light portraiture)
  - Viltrox 85mm f/1.4 (Discreet distance & unposed tears)
- **Stabilization**: DJI RS5 Combo
- **Lighting**: Godox LC1000R RGB Light Stick

Edit `src/data/equipment.ts` whenever you expand your toolkit.

### 5. Managing Frequently Asked Questions (`src/data/faq.ts`)
Update or add client FAQs in `src/data/faq.ts`. Each entry contains:
- `question` & `bengaliQuestion`: Bilingual headline
- `answer`: Clear, transparent explanation
- `category`: 'Booking' | 'Coverage' | 'Delivery' | 'Travel'

### 6. Interactive Package Estimator (`src/components/PackageCalculator.tsx`)
Enables prospective clients to interactively select:
- Event duration (1 Day, 2 Days, or 3+ Days)
- Visual disciplines (Motion Film, Fine-Art Stills, or Both)
- Editorial add-ons (60s Teaser Trailer, Bridal Prep Film, Outdoor Cinema)
The calculator computes real-time indicative starting estimates and pre-fills an itemized inquiry message directly into WhatsApp!

---

## ✦ Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Deploying to Netlify
1. Connect repository in [Netlify](https://netlify.com).
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Click **"Deploy site"**.

### Deploying to Cloudflare Pages
1. In Cloudflare Dashboard, navigate to **Workers & Pages** > **Create application** > **Pages**.
2. Connect your Git repository.
3. Build preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.

---

## ✦ Performance & Architecture Notes

- **Zero Template Bloat**: Tailored vanilla Tailwind CSS without unused CSS overhead.
- **Non-blocking Video Embeds**: Video iframes only mount when the visitor clicks "Watch Film Preview", saving megabytes of mobile data.
- **Responsive Layout**: Designed mobile-first for small Android phones, iPhones, tablets, and large 4K displays.
- **WhatsApp Native Booking**: Client inquiries are formatted with event date, location, and requested services directly into an encoded WhatsApp link or mailto draft.
