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
        "orange1": "var(--orange1)",
        "pink1": "var(--pink1)",
        "white1": "var(--white1)",
        "white2": "var(--white2)",
        "white3": "var(--white3)",
        "grey1": "var(--grey1)"
      },
    },
  },
  plugins: [],
}
