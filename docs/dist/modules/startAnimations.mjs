/**
  Intro animation
*/

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const startAnimation = () => {
  const title = document.querySelector('.callout-title')
  const subTitle = document.querySelector('.callout-subtitle')
  const sidebar = document.querySelector('.animation-list')
  const button = document.querySelector('.callout-showList')
  const entrances = [
    'backInDown',
    'backInLeft',
    'backInRight',
    'backInUp',
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInTopLeft',
    'fadeInTopRight',
    'fadeInBottomLeft',
    'fadeInBottomRight',
    'flipInX',
    'flipInY',
    'lightSpeedInRight',
    'lightSpeedInLeft',
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',
    'jackInTheBox',
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomInRight',
    'zoomInUp',
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideInUp'
  ]

  const titleAnimation = getRandomInt(0, entrances.length)
  const subTitleAnimation = getRandomInt(0, entrances.length)
  const buttonAnimation = getRandomInt(0, entrances.length)
  const sidebarAnimation = 15

  title.classList.add('animate__animated', `animate__${entrances[titleAnimation]}`)
  subTitle.classList.add('animate__animated', `animate__${entrances[subTitleAnimation]}`)
  button.classList.add('animate__animated', `animate__${entrances[buttonAnimation]}`)
  sidebar.classList.add('animate__animated', `animate__${entrances[sidebarAnimation]}`)
}

export default startAnimation
