const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = (api) => {
  // api.cache(true);

  return {
    babelrc: false,
    compact: api.env() === 'production',
    sourceMaps: shouldUseSourceMap,
    inputSourceMap: shouldUseSourceMap,

    presets: [
      "react-app",
      "@babel/react",
      "@babel/preset-env",
      [
        require.resolve('babel-preset-react-app/dependencies'),
        { helpers: true },
      ],
    ],
    plugins: [
      [
        require.resolve('babel-plugin-named-asset-import'),
        {
          loaderMap: {
            svg: {
              ReactComponent:
                '@svgr/webpack?-svgo,+titleProp,+ref![path]',
            },
          },
        },
      ],
      require.resolve("@babel/plugin-syntax-dynamic-import"),
      [require.resolve("@babel/plugin-proposal-decorators"), { "legacy": true }],
      [require.resolve("@babel/plugin-proposal-class-properties"), { "loose": false }],
    ],
  };
};
