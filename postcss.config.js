const fs = require('fs');
const {homepage, version, author, animateConfig} = JSON.parse(fs.readFileSync('package.json'));

const header = `
@charset "UTF-8";

/*!
 * animate.css - ${homepage}
 * Version - ${version}
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) ${new Date().getFullYear()} ${author.name}
 */


  `;

module.exports = ctx => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'postcss-import': {root: ctx.file.dirname},
    'postcss-prefixer': {
      prefix: animateConfig.prefix,
    },
    'postcss-preset-env': {
      browsers: ['> 1%', 'last 2 versions'],
      browsers: '> 0.5%',
      autoprefixer: {
        cascade: false,
      },
    },
    cssnano: ctx.env === 'production' ? {} : false,
    'postcss-header': {
      header,
    },
  },
});
