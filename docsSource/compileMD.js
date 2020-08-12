const path = require('path');
const fs = require('fs');
const md = require('markdown-it')({
  html: true,
  linkify: true,
});

/**
 * Converts string to slug. This is as simple as can be and doesn't handle much usecases on purpose.
 * @param {string} text  - string to be converted to slug
 */

function convertFileNameToId(text) {
  return text.toLowerCase().match(/([a-z]+[-]*[a-z])\w+/)[0];
}

/**
 * Gets all the markdown files on a folder, compile them to html and returns
 * @param {string} dir - folder containing all the .md files
 */

function compileMD(dir = 'sections') {
  const directory = path.join(__dirname, dir);
  const files = fs.readdirSync(directory).sort();

  const sectionTemplate = (file, content) => {
    const message = 'Edit this on GitHub';
    const fileName = convertFileNameToId(file);
    const editURL = `https://github.com/animate-css/animate.css/blob/main/docsSource/sections/${file}`;
    const parsedContent = md.render(content);

    return `
      <section class="docSection-${fileName}" id="${fileName}">
        ${parsedContent}
        <p class="edit-github"><a href="${editURL}" title="${message}">${message}</a></p>
      </section>
    `;
  };

  const readMD = (file) => {
    const filePath = path.join(__dirname, dir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    return sectionTemplate(file, content);
  };

  const filesContent = files.map((section) => readMD(section));

  return filesContent.join('\n');
}

module.exports = compileMD;
