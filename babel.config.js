module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'src': './src',
          'pages': './src/pages',
          '_utils': './src/utils',
          'elements': './src/elements',
          'components': './src/components',
          '@appSettings': './src/appSettings.ts',
          'pageContainers': './src/pageContainers',
        },
      },
    ],
  ],
};
