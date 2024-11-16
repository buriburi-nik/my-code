// Dark Mode Toggle functionality
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Settings Dropdown functionality
const settingsBtn = document.querySelector('.settings-btn');
const dropdown = document.querySelector('.dropdown');

settingsBtn.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.settings-container')) {
    dropdown.classList.remove('open');
  }
});
