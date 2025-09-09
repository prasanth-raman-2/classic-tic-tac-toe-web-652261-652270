// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            // Add search filtering logic here
        });
    }

    // Settings button click handler
    const settingsButton = document.querySelector('.settings-icon');
    if (settingsButton) {
        settingsButton.addEventListener('click', () => {
            // Add settings menu logic here
        });
    }

    // Populate games grid
    const gamesGrid = document.querySelector('.games-grid');
    if (gamesGrid) {
        // Add logic to populate games grid with game cards
    }
});
