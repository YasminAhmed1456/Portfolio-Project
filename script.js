const body = document.body;
const toggleThemeBtn = document.getElementById('toggle-theme');
const themeIcon = toggleThemeBtn.querySelector('i');

toggleThemeBtn.addEventListener('click', () => {
const currentTheme = body.getAttribute('data-theme');
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'light');
    toggleThemeBtn.classList.replace('btn-outline-light', 'btn-outline-dark');
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    toggleThemeBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
} else {
    body.setAttribute('data-theme', 'dark');
    toggleThemeBtn.classList.replace('btn-outline-dark', 'btn-outline-light');
    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    toggleThemeBtn.innerHTML = '<i class="bi bi-moon-fill"></i> Dark Mode';
}
});

// Add hover effects to service boxes 
document.querySelectorAll('.service-box').forEach((box) => {
        box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
        });
        box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
        });
});


const toggleButton = document.getElementById("toggle-mode");
const contactSection = document.getElementById("contact");

toggleButton.addEventListener("click", () => {
    // Toggle the "dark-mode" class
    contactSection.classList.toggle("dark-mode");

    // Update the button text
    if (contactSection.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
});
