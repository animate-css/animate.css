import buildDocsIndex from './modules/buildDocsIndex.mjs'
import playground from './modules/playground.mjs'
import toggleOnClick from './modules/toggle.mjs'
import startAnimations from './modules/startAnimations.mjs'

buildDocsIndex()
playground()

toggleOnClick('.callout-showList', 'html', 'animationList-active')
toggleOnClick('.callout-hideList', 'html', 'animationList-active')
toggleOnClick('.hamburger', 'html', 'hamburger-active')
toggleOnClick('.docs-index', 'html', 'hamburger-active')

requestAnimationFrame(startAnimations)
