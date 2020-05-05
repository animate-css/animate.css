/**
  Mobile animation list
*/

const toggleOnClick = (el, target, className) => {
  const element = document.querySelector(el)
  const targetEl = document.querySelector(target)

  element.addEventListener('click', e => {
    targetEl.classList.toggle(className)
  })
}

export default toggleOnClick
