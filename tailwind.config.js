/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'orange': '#ff9a64',
        'pink': '#ffd2cc',
        'white1': '#fffff',
        'white2': '#f5f5f5',
        'white3': '#d9d9d9',
        'grey': '#878787',
        'black': '#000000',
        'blue': '#0073ff'
      },
    },
  },
  plugins: [],
}
