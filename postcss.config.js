const fs = require('fs');
const {homepage, version, author} = JSON.parse(fs.readFileSync('package.json'));

const header =
  `
@charset "UTF-8";

/*!
 * animate.css - ${homepage}
 * Version - ${version}
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) ${new Date().getFullYear()} ${author.name}
 */
 ` + '\n \n';

module.exports = ctx => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'postcss-import': {root: ctx.file.dirname},
    'postcss-prefixer': {
      prefix: 'animate__',
    },
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
      cascade: false,
    },
    cssnano: ctx.env === 'production' ? {} : false,
    'postcss-header': {
      header,
    },
  },
});
