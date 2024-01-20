/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        def_purple_1: '#1A122B',
        def_purple_2: '#5200FF',
        def_purple_3: '#322253'
      },
    },
  },
  plugins: [],
}

