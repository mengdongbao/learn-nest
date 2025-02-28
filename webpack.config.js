const { resolve } = require('node:path');
const JavaScriptObfuscator = require('webpack-obfuscator')

module.exports = function (option) {
  return {
    ...option,
    entry: {
      main: './src/main.ts',
    },
    output: {
      filename: '[name].js',
      path: resolve(__dirname, 'dist'),
    },
    plugins: [
      new JavaScriptObfuscator(
        {
          rotateUnicodeArray: true,
          // 数组内是需要排除的文件
        },
        [],
      ),
    ],
  };
};
