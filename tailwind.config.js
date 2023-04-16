/** @type {import('tailwindcss').Config} */


module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode : "class" , 
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, 
      fontFamily:{
        'arabicFont':['Changa' , 'sans-serif'], 
        'arabicFont2':['Amiri' , 'serif'],
        'arabicFont3':['Lateef' , 'serif'],
      } , 
      colors: {
        primary: '#1a202c',
        secondary: '#718096',
        white: '#fff',
      },
    },
  },
  plugins: [],
}
