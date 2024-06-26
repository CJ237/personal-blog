const themeSwitcher = document.querySelector('#theme');
const bod = document.body;
// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    bod.setAttribute('class', 'switch-light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    bod.setAttribute('class', 'switch-dark');
  }
});

