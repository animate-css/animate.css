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

const select = document.querySelectorAll('pre code');
const copyBtn = document.querySelectorAll('.copy-btn');

function copyText(btn, text, buttons) {
  btn.addEventListener('click', () => {});
  navigator.clipboard
    .writeText(text)
    .then(() => {
      buttons.textContent = 'copied';
      setTimeout(() => {
        buttons.textContent = 'copy';
      }, 2000);
    })
    .catch((error) => {
      console.log('failed to copy', error);
    });
}

//to copy text when click on text
select.forEach((item) => {
  item.addEventListener('click', () => {
    const doctextCopy = item.textContent;
    copyBtn.forEach((copyBtn) => {
      copyText(item, doctextCopy, copyBtn);
    });
  });

  item.addEventListener('mouseover', () => {
    item.style.background = 'rgb(64 62 62)';
  });
  item.addEventListener('mouseout', () => {
    item.style.background = '#2d2d2d';
  });
});

//to copy text when click on copy button
copyBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const textCopy = button.previousElementSibling.textContent;
    copyText(button, textCopy, button);
  });
});
