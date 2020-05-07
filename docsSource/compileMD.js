const path = require('path');
const fs = require('fs');
const md = require('markdown-it')({
  html: true,
  linkify: true,
});

/**
 * Gets all the markdown files on a folder, compile them to html and returns
 * @param {string} dir - folder containing all the .md files
 */

function compileMD(dir = 'sections') {
  const directory = path.join(__dirname, dir);
  const files = fs.readdirSync(directory).sort();

  const sectionTemplate = (file, content) => {
    const message = 'Edit this on Github';
    const fileName = file.replace('.md', '').match(/([a-z])\w+/)[0];
    const editURL = `https://github.com/daneden/animate.css/blob/master/docsSource/sections/${file}`;
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
