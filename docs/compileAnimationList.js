const fs = require('fs');
const path = require('path');

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

  const itemTemplate = (item) => `<li>${item}</li>`;

  const listTemplate = (title, items) => {
    const parsedTitle = title.toLowerCase().replace(' ', '_');

    return `
      <section class="${parsedTitle}" id="${parsedTitle}">
        <h3>${title}</h3>
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
