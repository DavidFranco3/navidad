/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          950: '#060d09',
          900: '#0b1a13',
          800: '#14291f',
          700: '#1e3d2d',
          600: '#2b523e',
        },
        crimson: {
          950: '#3d090c',
          900: '#5a0f13',
          800: '#7a151b',
          700: '#9e1c23',
          600: '#c22730',
        },
        gold: {
          600: '#9d7429',
          500: '#c59b48',
          400: '#deb869',
          300: '#eed69e',
          200: '#faedd0',
        },
        parchment: {
          DEFAULT: '#f6f2ea',
          dark: '#e8e2d4',
          muted: '#8c857b',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
