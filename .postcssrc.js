module.exports = (ctx) => ({
  indent: 'postcss',
  parser: ctx.parser ? 'sugarss': false,
  sourceMap: ctx.env === 'development' ? ctx.map : false,
  syntax: 'postcss-scss',
  plugins: {
    'cssnano': {},
    'postcss-cssnext': {},
    'postcss-plugin': ctx.options.plugin,
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    },
    'postcss-normalize': {},
  },
});
