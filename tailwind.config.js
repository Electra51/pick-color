/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        pickColorTheme: {
          primary: '#4a7887',
          secondary: '#FEF9f6',
          info:'#1a6985',
          accent: '#F2E9E3',
          neutral: '#000000', //text-black
          'base-100': '#ffffff', //bg-white
          'base-200': '#4a7887'
        },
      },
      {
        dark: {
          info:'#1a6985',
          secondary: '#1F2937', //black
          accent: '#1F2937', 
          neutral: '#ffffff', //text-white
          'base-100': '#1F2937', //btn
          'base-200': '#1F2937'
        },
      }
    ]
    
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
