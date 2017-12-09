const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');

module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-simple-vars': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-hexrgba': {}
  }
};
