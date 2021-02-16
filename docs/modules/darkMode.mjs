const darkCheck = document.getElementById('night-light-checkbox'),
  moon = document.getElementById('moon-svg'),
  sun = document.getElementById('sun-svg');

darkCheck.addEventListener('click', () => {
  if (darkCheck.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('animate-css', 'dark');
    moon.style.fill = '#e0e0e0';
    sun.style.fill = '#e0e0e0';
  } else {
    document.body.classList.remove('dark');
    localStorage.removeItem('animate-css');
    moon.style.fill = '#111';
    sun.style.fill = '#111';
  }
})

if (localStorage.getItem('animate-css')) {
  document.body.className = 'dark';
  darkCheck.checked = true;
  moon.style.fill = '#e0e0e0';
  sun.style.fill = '#e0e0e0';
}
