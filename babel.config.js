module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@movies': './src/app/movies',
            '@authentication': './src/app/authentication',
            '@shared': './src/app/shared',
            '@core': './src/app/core',
            '@ui-components': './src/libs/ui-components',
            '@translations': './src/libs/translations',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
