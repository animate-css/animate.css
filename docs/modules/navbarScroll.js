/**
  Navbar Scroll
*/
var nav = document.getElementById('nav-index-docs');
var navOffsetTop = nav.offsetTop;
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > navOffsetTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }

  var sections = document.querySelectorAll('section');

  sections.forEach(function (section, index) {
    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      document.querySelectorAll('li').forEach(function (li) {
        li.classList.remove('active');
      });
      document.querySelectorAll('li')[index].classList.add('active');
    }
  });
});

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}