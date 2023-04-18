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
        ForBackprimary: '#0d1117',
        ForBackSecondary: '#161b22',
        ForTexts: '#e6ede5',
        ForButtons : '#21262d',
        ForLights : '#ccc',
        ForDivs: '#0d1117',
      },
    },
  },
  plugins: [],
}
