const path = require('path');
const fs = require('fs');
const compileMD = require('./compileMD');
const compileAnimationList = require('./compileAnimationList');

const templatePath = path.join(__dirname, 'template.html');
const template = fs.readFileSync(templatePath, 'utf8');
const docsTag = '{{docs}}';
const listTag = '{{list}}';
const outputPath = './dist';
const outputFile = 'index.html';

const docs = compileMD();
const list = compileAnimationList();

const output = path.join(__dirname, outputPath, outputFile);

const withDocs = template.replace(docsTag, docs);
const withListAndDocs = withDocs.replace(listTag, list);

fs.writeFile(output, withListAndDocs, 'utf8', (err) => {
  if (err) console.error(err);
  console.log('Template compiled succesfully.');
});
