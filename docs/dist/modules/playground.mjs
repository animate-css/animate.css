/**
  Animation playground
*/

const clearAll = (items = [], className = 'active') => {
  items.forEach((item) => item.classList.remove(className));
};

const setEndListener = (target, defaultClass) => {
  target.addEventListener('animationend', (e) => {
    target.setAttribute('class', defaultClass);
    document.documentElement.classList.remove('isPlaying');
  });
};

const playground = (
  container = '.animation-list',
  item = '.animation-item',
  target = '.callout-title',
) => {
  const containerEl = document.querySelector(container);
  const items = [...containerEl.querySelectorAll(item)];
  const targetEl = document.querySelector(target);

  setEndListener(targetEl, target.replace('.', ''));

  containerEl.addEventListener('click', (e) => {
    clearAll(items);
    const animation = `animate__${e.target.getAttribute('data-animation')}`;

    targetEl.classList.add('animate__animated', animation);
    document.documentElement.classList.add('isPlaying');
    document.documentElement.classList.remove('animationList-active');

    if (e.target.classList.contains('copy-icon')) {
      const animation = `animate__${e.target.parentElement.getAttribute('data-animation')}`;
      navigator.clipboard.writeText(animation);
    }
  });
};

export default playground;
