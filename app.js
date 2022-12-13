const navLinks = document.querySelectorAll('.nav__item');
const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;

const highlightNav = () => {
    navLinks.forEach(navLink => {
        const section = document.getElementById(navLink.dataset.section_id);
        if (window.scrollY + navHeight + ((window.innerHeight / 2.5) - navHeight) >= section.offsetTop) {
            const activeLink = document.querySelector('.nav__item.active');
            if (activeLink) { activeLink.classList.remove('active'); }
            navLink.classList.add('active');
        }
    });
};

const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    window.scroll({
        top: section.offsetTop - navHeight
    });
};

window.addEventListener('load', highlightNav);
window.addEventListener('scroll', highlightNav);
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        scrollToSection(navLink.dataset.section_id)
    });
});

// Check if the device supports touch
if ('ontouchstart' in window) {
    // If so, add the "no-hover" class to the element
    navLinks.forEach(navLink => {
        navLink.classList.add('no-hover');
    })
  } else {
    // If not, remove the "no-hover" class from the element
    navLinks.forEach(navLink => {
        navLink.classList.add('no-hover');
    })
  }
  