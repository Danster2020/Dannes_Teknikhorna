module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    '._site/**/*.html'
  ],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
