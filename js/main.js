const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = contactForm.querySelector('.form-feedback');
    feedback.textContent = 'Thank you. This demonstration form is ready, but it is not connected to an email service.';
    feedback.classList.remove('error');
    contactForm.reset();
  });
}
