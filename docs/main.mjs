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

const preTags = document.querySelectorAll('pre');

// Function to add copy buttons
preTags.forEach(pre => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;

    pre.appendChild(copyButton);
    copyButton.addEventListener('click', () => {
        const codeToCopy = pre.innerText;
        navigator.clipboard.writeText(codeToCopy).then(() => {
            // copyButton.innerText = 'Copied!';
            copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0900ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-check"><path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
            setTimeout(() => {
                copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    });
});