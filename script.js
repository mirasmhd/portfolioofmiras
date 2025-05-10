const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Load saved theme (light, dark, hacker)
if (currentTheme === 'light') {
  document.body.classList.add('light');
  toggle.checked = true;
} else if (currentTheme === 'hacker') {
  document.body.classList.add('hacker');
  toggle.checked = true;
}

// Listen for switch change
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    // Remove dark and hacker themes and apply light theme
    document.body.classList.remove('dark', 'hacker');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    // Switch to hacker theme
    if (document.body.classList.contains('hacker')) {
      document.body.classList.remove('hacker');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('hacker');
      localStorage.setItem('theme', 'hacker');
    }
  }
});
