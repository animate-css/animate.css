/**
  Docs index
*/

const indexItemTemplate = (item = '', id) => `
  <li class="docs-indexItem"><a href="#${id}" title="${item}">${item}</a></li>
`

const indexList = (sections = [], container = '.sidebar', heading = 'h2') => {
  const containerEl = document.querySelector(container)
  const list = document.createElement('ul')

  const children = sections.map(section => {
    const title = section.querySelector(heading)
    const id = section.getAttribute('id')

    return title && indexItemTemplate(title.innerText, id)
  })

  list.classList.add('docs-index')
  list.innerHTML = children.join('\n')

  containerEl.insertAdjacentElement('beforeend', list)

  return list
}

const buildDocsIndex = (docs = '#documentation', docSection = '[class*="docSection-"]', titles = 'h2') => {
  const docsEl = document.querySelector(docs)
  const sections = [...docsEl.querySelectorAll(docSection)]

  const list = indexList(sections)

  return list
}

export default buildDocsIndex
