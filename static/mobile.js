document.addEventListener('DOMContentLoaded', function() {
    // Create and inject the overlay element
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    const mobileToggle = document.querySelector('.mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    if (mobileToggle && sidebar) {
        // Toggle Sidebar
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('sidebar-open');
        });

        // Close on Overlay Click
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('sidebar-open');
        });

        // Close on Link Click (optional, for better UX on mobile)
        const sidebarLinks = sidebar.querySelectorAll('.nav-link');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                // If it's not a dropdown toggle
                if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('sidebar-submenu')) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    body.classList.remove('sidebar-open');
                }
            });
        });
    }
});
