const highlightNav = () => {
    const navLinks = document.querySelectorAll('.nav__item');
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    navLinks.forEach(navLink => {
        const section = document.querySelector(navLink.attributes.href.value);
        if (window.scrollY + navHeight + (window.innerHeight / 2 - navHeight) >= section.offsetTop) {
            const activeLink = document.querySelector('.nav__item.active');
            if (activeLink) { activeLink.classList.remove('active'); }
            navLink.classList.add('active');
        }
    });
};

window.addEventListener('load', highlightNav);
window.addEventListener('scroll', highlightNav);