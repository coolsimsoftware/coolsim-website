/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/**/layouts/**/*.html",
    "./themes/**/content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0f0f1a',
        'secondary-bg': '#1a1a2e',
        'accent': '#4fc3f7',
        'accent-hover': '#29b6f6',
        'text': '#e0e0e8',
        'text-primary': '#e0e0e8',
        'text-muted': '#8888a8',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-cyan-blue': 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
        'gradient-thermal': 'linear-gradient(135deg, #4fc3f7, #f06292, #ff9800)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}