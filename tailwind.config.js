/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './index.html',
     './src/**/*.jsx',
     './src/*.jsx'
  ],
  theme: {
     screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '10079px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '400px'},
     },
    extend: {
        fontFamily: {
            spartan: ['"Spartan"', "sans-serif"]
        },
       colors: {
         'custom1' : 'hsl(0, 0%, 63%)',
         'custom2' : 'hsl(0, 0%, 27%)',
       }
    },
  },
  plugins: [],
}

