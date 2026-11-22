const path = require('path');
const fs = require('fs');

const {version} = JSON.parse(fs.readFileSync('package.json'));
const compileMD = require('./compileMD');
const compileAnimationList = require('./compileAnimationList');

const templatePath = path.join(__dirname, 'template.html');
const template = fs.readFileSync(templatePath, 'utf8');
const outputPath = '../docs';
const outputFile = 'index.html';

const docs = compileMD();
const list = compileAnimationList();

const output = path.join(__dirname, outputPath, outputFile);

const replacements = {docs, list, version};
const compiled = template.replace(/\{\{(docs|list|version)\}\}/g, (_, key) => replacements[key]);

fs.writeFile(output, compiled, 'utf8', (err) => {
  if (err) console.error(err);
  console.log('Template compiled succesfully.');
});

