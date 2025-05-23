module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/application',
          '@infra': './src/infrastructure',
          '@pr': './src/presentation',
        },
      },
    ],
  ],
};
