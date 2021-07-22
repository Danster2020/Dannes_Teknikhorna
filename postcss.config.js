// postcss.config.js

module.exports = {
  parser: 'postcss-scss',

  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.js'),
    ...(process.env.JEKYLL_ENV == "production"
    ? [require('cssnano')({ preset: 'default' })]
    : [])
  ]
}