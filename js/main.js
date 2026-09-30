document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-menu-button');
  const navLinks = document.querySelectorAll('#mobile-menu a');
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitButton = document.getElementById('submit-button');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  // Mobile Menu Toggle
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
    mobileMenu.setAttribute('aria-expanded', mobileMenu.classList.contains('block'));
  });

  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('block');
    mobileMenu.setAttribute('aria-expanded', 'false');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('block');
      mobileMenu.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form Validation
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    if (nameInput.value.trim() === '') {
      nameInput.setCustomValidity('Name is required.');
      isValid = false;
    } else {
      nameInput.setCustomValidity('');
    }

    if (!emailInput.validity.valid) {
      emailInput.setCustomValidity('Please enter a valid email address.');
      isValid = false;
    } else {
      emailInput.setCustomValidity('');
    }

    if (messageInput.value.trim() === '') {
      messageInput.setCustomValidity('Message is required.');
      isValid = false;
    } else {
      messageInput.setCustomValidity('');
    }

    if (isValid) {
      submitForm();
    }
  });

  function submitForm() {
    // Simulate form submission
    setTimeout(() => {
      form.reset();
      successMessage.classList.remove('hidden');
      errorMessage.classList.add('hidden');
      announce('Form submitted successfully!');
    }, 1000);
  }

  // Accessibility Enhancements
  function announce(message) {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-9999px';
    liveRegion.textContent = message;
    document.body.appendChild(liveRegion);
    setTimeout(() => {
      document.body.removeChild(liveRegion);
    }, 2000);
  }

  // Focus Trapping
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = mobileMenu.querySelectorAll(focusableElements)[0];
  const focusableContent = mobileMenu.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  mobileMenu.addEventListener('keydown', (e) => {
    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  });
});