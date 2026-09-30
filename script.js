document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const liveRegion = document.getElementById('live-region');

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
  }

  function handleNavLinkClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
    mobileMenu.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
  }

  function validateEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let isValid = true;
    if (nameInput.value.trim() === '') {
      isValid = false;
      nameInput.setCustomValidity('Name is required.');
    } else {
      nameInput.setCustomValidity('');
    }
    if (!validateEmail(emailInput.value)) {
      isValid = false;
      emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
      emailInput.setCustomValidity('');
    }
    if (messageInput.value.trim() === '') {
      isValid = false;
      messageInput.setCustomValidity('Message is required.');
    } else {
      messageInput.setCustomValidity('');
    }
    if (isValid) {
      liveRegion.textContent = 'Thank you! Your message has been sent.';
      form.reset();
    } else {
      liveRegion.textContent = 'Please fill out all fields correctly.';
    }
  }

  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));
  form.addEventListener('submit', handleFormSubmit);
});