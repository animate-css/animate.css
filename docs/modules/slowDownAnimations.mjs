/**
  Slows animations
*/

const slowDownAnimations = (target) => {
  const targetEl = document.querySelector(target)
  const doc = document.documentElement

  targetEl.addEventListener('click', () => {
    const currentDuration = getComputedStyle(document.documentElement)
      .getPropertyValue('--animate-duration')
    const newDuration = currentDuration === '1s' ? '2s' : '1s'

    document.documentElement.style.setProperty('--animate-duration', newDuration);
  })
}

export default slowDownAnimations
