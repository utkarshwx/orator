module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/flowbite/**/*.js"
   ],
   theme: {
    colors: {
      'cs-blue': '#486ffa',
      'cs-gold': '#fafa6e',
      'cs-dblue': '#121242',
      
    },

    // screens: {
    //   'mob': {'max': '10000px'},

    // },

    // screens: {
    //   'mob': {'min': '140px', 'max': '500px'},

    //   'tab': {'min': '500px', 'max': '1536px'},
      
    // },

     extend: {},
   },
   plugins: [
    require("tailwindcss-animate"),
    require('flowbite/plugin')
  ]
}