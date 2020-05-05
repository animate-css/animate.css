const fs = require('fs');
const path = require('path');

/**
 * Get and categorize all the animation names and compile
 * to HTML lists
 * @param {string} dir - directory containing the css file
 * @param {string} file - css file name
 */

function compileAnimationlist(dir = '../source', file = 'animate.css') {
  const filePath = path.join(__dirname, dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const globalRegex = /\/(.*)\w/g;
  const itemRegex = /(\/)(.*)(\.)/;

  const rawList = content.match(globalRegex);
  let currentGroup;
  let list = {};

  rawList.forEach((i) => {
    const item = i.match(itemRegex);

    if (item == null) {
      const title = i.replace('/* ', '');
      currentGroup = title;
      list[title] = [];

      return currentGroup;
    }

    return list[currentGroup].push(item[2]);
  }, {});

  const itemTemplate = (item) => `
    <li class="animation-item" data-animation="${item}">
      <span class="animation-item--title">${item}</span>
      <button class="copy-icon" type="button">
        <span class="tooltip">Copy class name to clipboard</span>
      </button>
    </li>`;

  const listTemplate = (title, items) => {
    const parsedTitle = title.toLowerCase().replace(' ', '_');

    return `
      <section class="${parsedTitle}" id="${parsedTitle}">
        <h3 class="animation-title">${title}</h3>
        <ul class="animation-group">${items.join('\n')}</ul>
      </section>
    `;
  };

  const compile = (list) => {
    const titles = Object.keys(list);

    return titles.map((title) => {
      const items = list[title].map((item) => itemTemplate(item));
      return listTemplate(title, items);
    });
  };

  return compile(list).join('\n');
}

module.exports = compileAnimationlist;
