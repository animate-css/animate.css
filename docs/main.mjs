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

document.querySelectorAll('.copy-icon').forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.classList.add('copied');
    document.querySelector('.copied .tooltip').textContent = 'Copied!';
    setTimeout(() => {
      icon.children[0].textContent = 'Copy class name to clipboard';
      icon.classList.remove('copied');
    }, 750);
  });
});

function setupCodeCopyButtons() {
  document.querySelectorAll('.copy-code-btn').forEach((btn) => {
    const wrapper = btn.closest('.code-block-wrapper');
    const code = wrapper.querySelector('pre code');
    const tooltip = btn.querySelector('.copy-tooltip');
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        tooltip.textContent = 'Copied!';
        tooltip.style.opacity = 1;
        setTimeout(() => {
          tooltip.textContent = 'Copy';
          tooltip.style.opacity = 0;
        }, 1200);
      } catch (e) {
        tooltip.textContent = 'Error';
        tooltip.style.opacity = 1;
        setTimeout(() => {
          tooltip.textContent = 'Copy';
          tooltip.style.opacity = 0;
        }, 1200);
      }
    });

    btn.addEventListener('mouseenter', () => {
      tooltip.style.opacity = 1;
    });
    btn.addEventListener('mouseleave', () => {
      if (tooltip.textContent === 'Copy') tooltip.style.opacity = 0;
    });
  });
}

setupCodeCopyButtons();
