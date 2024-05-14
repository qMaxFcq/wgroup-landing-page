/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Quicksand"],
        // sans: ["Noto Sans Thai"],
        // sans: ["Itim"],
        sans: ['Kanit', 'sans-serif'],
        // roboto:['Roboto',' sans-serif']
        // sans: ["Prompt"],
      },      
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'bounce-slow':'bounce 30s infinite'
      },

    
    },
  },
  plugins: [require('flowbite/plugin'),require("tailwindcss-animate")],
};
