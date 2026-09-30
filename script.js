document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.querySelector('.js-menu-toggle');
  const mobileMenu = document.querySelector('.js-mobile-menu');
  const navLinks = document.querySelectorAll('.js-nav-link');
  const form = document.querySelector('.js-contact-form');
  const formMessage = document.querySelector('.js-form-message');

  // Mobile Menu Toggle
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form Validation
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    const formData = new FormData(form);
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    formData.forEach((value, key) => {
      const input = form.querySelector(`[name='${key}']`);
      if (!value.trim()) {
        isValid = false;
        input.setCustomValidity('This field is required.');
        input.reportValidity();
      } else if (key === 'email' && !emailPattern.test(value)) {
        isValid = false;
        input.setCustomValidity('Please enter a valid email address.');
        input.reportValidity();
      } else {
        input.setCustomValidity('');
      }
    });

    if (isValid) {
      form.reset();
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.setAttribute('aria-live', 'assertive');
      setTimeout(() => {
        formMessage.textContent = '';
      }, 5000);
    }
  });
});