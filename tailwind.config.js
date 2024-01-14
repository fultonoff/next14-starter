/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: '#0d0c22',
        text: '#ffffff',
        bgSoft: '#2d2b42',
        textSoft: '#e5e5e5',
        btn: '#3673fd'
      }
    },
  },
  plugins: [],
}