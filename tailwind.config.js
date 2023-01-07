/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    colors : {
      'gray' : '#a1a1a1',
      'black' : 'hsl(0,0%, 0%)', 
      "white" : "#fff",
      'color-hover' : 'hsl(0, 0%, 27%)',
      'black-transparent' : 'rgb(0, 0, 0, .5)',
      'transparent' : 'rgb(0, 0, 0, 0)',
    },
    // screen : {
    //   'md' : '1100px',
    // },
    extend: {
      spacing : {
        'negative-full' : "-100%",
        'full' : "100%",
        "full-full" : "100%, 100%",
        '1/2-negative' : "-50%",
      },
      gridTemplateColumns : {
        // '2' : 'minmax(60%, 830px) minmax(40%, 604px)'
        '2' : "60% 40%",
        "3" : "30% 40% 30%",
      }
    },
  },
  plugins: [],
}
