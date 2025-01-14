module.exports = function (option) {
  console.log(option);
  return {
    ...option,
    entry: {
      app: './src/main.ts',
    },
    output: {
      filename: '[name][fullhash].js',
      path: __dirname + '/dist',
    },
  };
};
