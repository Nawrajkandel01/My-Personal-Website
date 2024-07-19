document.addEventListener('DOMContentLoaded', function () {
    // Show or hide the "back to top" button based on scroll position
    window.addEventListener('scroll', function () {
        const backToTopButton = document.querySelector('.back-to-top');
        if (window.pageYOffset > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    // Scroll to top function
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Smooth scrolling for navbar links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
