const themeToggleButton = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Check the stored theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme); // Apply saved theme
    updateIcon(savedTheme); // Update icon based on saved theme
} else {
    // Default theme is light mode
    body.classList.add('light-mode');
    updateIcon('light-mode');
}

// Add event listener to the toggle button
themeToggleButton.addEventListener('click', () => {
    // Toggle between light and dark modes
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        updateIcon('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Store the theme in localStorage
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        updateIcon('light-mode');
        localStorage.setItem('theme', 'light-mode'); // Store the theme in localStorage
    }
});

// Function to update the theme icon based on the current theme
function updateIcon(theme) {
    if (theme === 'dark-mode') {
        themeIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>

        `;
    } else {
        themeIcon.innerHTML = `
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  
</svg>

        `;
    }
}
