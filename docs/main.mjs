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


document.querySelectorAll(".copy-code").forEach((copyBtn) => {
  copyBtn.addEventListener("click", () => {
    const codeEl = copyBtn.nextElementSibling.querySelector("code");
    const codeText = codeEl.innerText;
    
    var checkSvg = copyBtn.querySelector("#check-svg");
    var codeSvg = copyBtn.querySelector("#code-svg");
    var tooltip = copyBtn.querySelector(".tooltip");

    codeSvg.style.display = "none";
    checkSvg.style.display = "block";
    tooltip.style.visibility = "visible";

    setTimeout(() => {
      codeSvg.style.display = "block";
      checkSvg.style.display = "none";
      tooltip.style.visibility = "hidden";
    }, 750);

    navigator.clipboard.writeText(codeText)
      .then(() => {
        //console.log("Code copied successfully!");
        // You can add visual feedback or notifications here
      })
      .catch((error) => {
        console.error("Failed to copy code:", error);
        // Handle error, e.g., display a message to the user
      });
  });
});
