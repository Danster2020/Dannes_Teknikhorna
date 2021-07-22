module.exports = {
  purge: {
    content: ["./_site/**/*.html"],
    css: ["./_site/css/site.css"], // ./_site/css/site.css
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  },

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
