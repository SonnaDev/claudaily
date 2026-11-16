/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#B84A33', // terracotta light (4.9:1 contrast against #FAF9F5 for strict WCAG AA text compliance)
          dark: '#E07A5F',  // terracotta dark (5.95:1 contrast against #1A1918)
          DEFAULT: '#B84A33',
        },
        bg: {
          light: '#FAF9F5', // warm neutral light
          dark: '#1A1918',  // charcoal warm dark
        },
        surface: {
          light: '#F2EFEB',
          dark: '#242220',
          hoverLight: '#E8E4DD',
          hoverDark: '#2E2B28',
        },
        border: {
          light: '#E2DDD5',
          dark: '#35322F',
        },
        fg: {
          light: '#1F1E1D', // charcoal text
          dark: '#EDEBE6',  // warm off-white text
          mutedLight: '#5F5C56',
          mutedDark: '#A8A49C',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
