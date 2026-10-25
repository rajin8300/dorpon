/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#101010',
          elevated: '#171717',
          sunken: '#0B0B0B',
        },
        primary: {
          DEFAULT: '#F3F0E9',
          muted: '#A5A29C',
          dim: '#6E6B65',
        },
        champagne: {
          DEFAULT: '#C6A66B',
          light: '#DBC392',
          dark: '#9E824F',
          dim: 'rgba(198, 166, 107, 0.15)',
        },
        border: {
          subtle: 'rgba(243, 240, 233, 0.08)',
          medium: 'rgba(243, 240, 233, 0.16)',
          gold: 'rgba(198, 166, 107, 0.25)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Hind Siliguri"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Hind Siliguri"', 'Inter', 'sans-serif'],
        bengali: ['"Hind Siliguri"', '"Noto Serif Bengali"', 'serif'],
      },
      letterSpacing: {
        'cinema': '0.2em',
        'cinema-wide': '0.3em',
        'tight-editorial': '-0.02em',
      },
      screens: {
        'xs': '420px',
      }
    },
  },
  plugins: [],
}
