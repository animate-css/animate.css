const darkModeControl = () => {
  const darkCheck = document.getElementById('night-light-checkbox');

  darkCheck.addEventListener('click', () => {
    if (darkCheck.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('animate-css', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('animate-css');
    }
  })

  if (localStorage.getItem('animate-css')) {
    document.body.className = 'dark';
    darkCheck.checked = true;
  }
}

export default darkModeControl;