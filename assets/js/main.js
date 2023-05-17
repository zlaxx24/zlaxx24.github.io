/*================== SHOW MENU ===========*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*================== REMOVE MENU MOBILE ===========*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*================== CHANGE BACKGROUND HEADER ===========*/
const blurHeader = () => {
    const header = document.getElementById('header');

    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

/*================== EMAIL JS ===========*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wnahy0j', 'template_5m7jlln', '#contact-form', 'yg2Q002PhNdmKhlMF')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent succesfully ✅';

            // Remove message after five seconds 
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌';
        });
};

contactForm.addEventListener('submit', sendEmail);

/*================== SHOW SCROLL UP ===========*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop=current.offsetTop - 58,
            sectionId=current.getAttribute('id'),
            sectionsClass=document.getElementById('.nav__menu a[hreft*=' + sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll',scrollActive)




/*=============== SCROLL REVEAL ANIMATION ===============*/