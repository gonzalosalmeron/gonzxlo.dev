/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'creme': '#EFE6E1'
      },
      backgroundColor: {
        'creme': '#EFE6E1'
      },
      animation: {
        'spin-slow': 'spin 32s linear infinite',
        'float': 'floating 4s infinite ease-in-out',
        'blink': 'blink infinite 2s ease-in',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '50%':  { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' } 
        },
        blink: {
            '0%': { boxShadow: '0px -4px 30px 3px rgb(253 224 71)'},
            '4%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 0)'},
            '8%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 71)'},
            '12%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 0)'},
            '16%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 71)'},
            '20%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 0)'},
            '24%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 71)'},
            '26%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 0)'},
            '30%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 71)'},
            '80%': { boxShadow: '0px -4px 30px 3px rgb(253 224 71)'},
            '100%': { boxShadow: '0px -4px 30px 3px rgb(253 224 71);'},
        }
      }
    },
  },
  plugins: [],
}
