/**
  Intro animation
*/

const startAnimation = () => {
  const title = document.querySelector('.callout-title')
  const subTitle = document.querySelector('.callout-subtitle')
  const sidebar = document.querySelector('.animation-list')
  const button = document.querySelector('.callout-showList')


  const titleAnimation = 'zoomInDown'
  const subTitleAnimation = 'zoomInDown'
  const buttonAnimation = 'zoomInUp'
  const sidebarAnimation = 'fadeInRight'

  title.classList.add('animate__animated', `animate__${titleAnimation}`)
  subTitle.classList.add('animate__animated', `animate__${subTitleAnimation}`)
  button.classList.add('animate__animated', `animate__${buttonAnimation}`)
  sidebar.classList.add('animate__animated', `animate__${sidebarAnimation}`)
}

export default startAnimation
