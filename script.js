const links = document.querySelectorAll('nav a');
let timeoutId;

links.forEach(link => {
    link.addEventListener('mouseenter', function (e) {
        clearTimeout(timeoutId);

        const target = document.querySelector(this.getAttribute('href'));
        timeoutId = setTimeout(() => {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }, 150);
    });
});