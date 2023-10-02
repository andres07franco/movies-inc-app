module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@movies': './src/app/movies',
            '@shared': './src/app/shared',
            '@core': './src/app/core',
            '@translations': './src/libs/translations',
            '@ui-components': './src/app/ui-components',
          },
        },
      ],
    ],
  };
};
