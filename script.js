document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation to links
    const links = document.querySelectorAll('.link-card');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading state
            this.style.opacity = '0.7';
            
            // Reset after a short delay
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
}); 