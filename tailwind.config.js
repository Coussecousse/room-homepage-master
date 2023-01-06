/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    colors : {
      'gray' : '#a1a1a1',
      'black' : 'hsl(0,0%, 0%)', 
      "white" : "hsl(0,0%, 100%)",
      'color-600' : 'hsl(0, 0%, 27%)',
    },
    extend: {
      spacing : {
        'negative-full' : "-100%"
      }
    },
  },
  plugins: [],
}
