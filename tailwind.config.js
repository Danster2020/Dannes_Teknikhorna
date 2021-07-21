module.exports = {
  // purgecss plugin
  content: ["./_site/**/*.html"],
  css: ["./_site/css/site.css"],

  // Tailwind CSS config
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []

  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
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
