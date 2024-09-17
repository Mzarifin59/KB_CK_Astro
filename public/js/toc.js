document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('div[id^="section"]');
    const links = document.querySelectorAll('.toc-link');

    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
});
