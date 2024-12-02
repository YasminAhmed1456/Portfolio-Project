    const body = document.body;
    const toggleButton = document.getElementById('toggle-theme');
    const themeIcon = toggleButton.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i> Dark Mode';
    } else {
    body.classList.remove('dark-mode');
    toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
    }

    toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i> Dark Mode';
    } else {
        toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
    }
    });

    // Add to service boxes
    document.querySelectorAll('.service-box').forEach((box) => {
        box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
    });
        box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
    });
