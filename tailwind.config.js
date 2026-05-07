/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.06)'
      },
      backgroundImage: {
        'gradient-radial-primary': 'radial-gradient(circle at 10% 10%, rgba(99,102,241,0.15), rgba(99,102,241,0))',
      }
    }
  },
  plugins: []
}
