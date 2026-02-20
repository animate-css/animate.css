const fs = require('fs');
const postcssImport = require('postcss-import');
const postcssPrefixer = require('postcss-prefixer');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssHeader = require('postcss-header');

const {homepage, version, author, animateConfig} = JSON.parse(fs.readFileSync('package.json'));

const header = `
@charset "UTF-8";

/*!
 * animate.css - ${homepage}
 * Version - ${version}
 * Licensed under the Hippocratic License 2.1 - http://firstdonoharm.dev
 *
 * Copyright (c) ${new Date().getFullYear()} ${author.name}
 */

`;

module.exports = (ctx) => {
  const prefix = ctx.env === 'compat' ? '' : animateConfig.prefix;
  const devMessage = `🎉🎉🎉🎉 \nanimate.css ${ctx.env} build was compiled sucessfully! \n`;

  console.log(devMessage);

  return {
    map: ctx.options.map,
    parser: ctx.options.parser,
    plugins: [
      postcssImport({root: ctx.file.dirname}),
      postcssPrefixer({
        prefix,
        ignore: [/\[class\*=.*\]/],
      }),
      postcssPresetEnv({
        features: {
          'custom-properties': true,
        },
      }),
      autoprefixer({
        cascade: false,
      }),
      ctx.env === 'production' || ctx.env === 'compat' ? cssnano() : false,
      postcssHeader({header}),
    ].filter(Boolean),
  };
};
