import buildDocsIndex from './modules/buildDocsIndex.mjs';
import playground from './modules/playground.mjs';
import startAnimations from './modules/startAnimations.mjs';
import toggleOnClick from './modules/toggle.mjs';
import darkModeControl from './modules/darkMode.mjs';

buildDocsIndex();
playground();
darkModeControl();

toggleOnClick('.callout-showList', 'html', 'animationList-active');
toggleOnClick('.callout-hideList', 'html', 'animationList-active');
toggleOnClick('.hamburger', 'html', 'hamburger-active');
toggleOnClick('.docs-index', 'html', 'hamburger-active');

requestAnimationFrame(startAnimations);

document.querySelectorAll('.copy-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.add('copied');
    document.querySelector('.copied .tooltip').textContent = 'Copied!';
    setTimeout(() => {
      icon.children[0].textContent = 'Copy class name to clipboard'
      icon.classList.remove('copied')
    }, 750)
  })
})
