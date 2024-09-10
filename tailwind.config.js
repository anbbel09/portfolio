/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#583861',
        'primary-light': '#EBE3F1',
        'secondary': '#785384',
        'secondary-light': 'rgba(199, 176, 213, 0.20)',
        'secondary-light-two': '#DBCDE5',
        'secondary-dark': '#845F90',
        'tertiary': '#412C49',
        'tertiary-ligth': 'rgba(199, 176, 213, 0.2)',
        'tertiary-dark': '#412C49',
        'quaternary': '#333333',
        'quaternary-light': '#D0AAE8',
        'quaternary-dark': '#90639E',
        'light': 'rgba(255, 255, 255, 0.6)',
        'form':'#C7B0D5',
      },
      fontFamily: {
        'title': ['Sofia-Bold'],
        'subtitle': ['Sofia-Semibold'],
        'text': ['Sofia-Regular'],   
        'text-md': ['Sofia-Medium'],    
      },
      width: {
        '85vw': '85vw',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        'btn': '0px 3px 4px rgba(120, 83, 132, 0.77)',
        'card': '0px 2px 4px 0px rgba(0, 0, 0, 0.35);',
        'card-two': '0px 4px 4px #C7B0D5',
      },
    },
  },
  plugins: [],
}