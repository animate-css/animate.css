import buildDocsIndex from './modules/buildDocsIndex.mjs';
import playground from './modules/playground.mjs';
import startAnimations from './modules/startAnimations.mjs';
import toggleOnClick from './modules/toggle.mjs';

buildDocsIndex();
playground();

toggleOnClick('.callout-showList', 'html', 'animationList-active');
toggleOnClick('.callout-hideList', 'html', 'animationList-active');
toggleOnClick('.hamburger', 'html', 'hamburger-active');
toggleOnClick('.docs-index', 'html', 'hamburger-active');

requestAnimationFrame(startAnimations);

const darkCheck = document.getElementById('night-light-checkbox');
const moon = document.getElementById('moon-svg');
const sun = document.getElementById('sun-svg');
const backToTopBtn = document.querySelector('.back-to-top');

if(localStorage.getItem('animate-css')){
    document.body.className = 'dark';
    darkCheck.checked = true;
    moon.style.fill = '#e0e0e0';
    sun.style.fill = '#e0e0e0';
}

darkCheck.addEventListener('click', () => {
    if(darkCheck.checked){
        document.body.className = 'dark';
        localStorage.setItem('animate-css', 'dark');
        moon.style.fill = '#e0e0e0';
        sun.style.fill = '#e0e0e0';
    }else{
        document.body.className = '';
        localStorage.removeItem('animate-css');
        moon.style.fill = '#111';
        sun.style.fill = '#111';
    }
})

document.querySelectorAll('.copy-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('copied');
        document.querySelector('.copied .tooltip').textContent = "Copied!";
        setTimeout(() => { 
            icon.children[0].textContent = "Copy class name to clipboard"
            icon.classList.remove('copied') 
        }, 750)
    })
})

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    backToTopBtn.style.display = "grid";
  } else {
    backToTopBtn.style.display = "none";
  }
});

