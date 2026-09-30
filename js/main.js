document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-menu-button');
  const navLinks = document.querySelectorAll('.nav-link');
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitButton = document.getElementById('submit-button');
  const alertMessage = document.getElementById('alert-message');

  // Mobile Menu Toggle
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
  });

  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
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
      nameInput.classList.add('border-red-500');
      isValid = false;
    } else {
      nameInput.classList.remove('border-red-500');
    }

    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add('border-red-500');
      isValid = false;
    } else {
      emailInput.classList.remove('border-red-500');
    }

    if (messageInput.value.trim() === '') {
      messageInput.classList.add('border-red-500');
      isValid = false;
    } else {
      messageInput.classList.remove('border-red-500');
    }

    if (isValid) {
      alertMessage.textContent = 'Thank you! Your message has been sent.';
      alertMessage.classList.remove('hidden');
      alertMessage.classList.add('bg-green-100', 'text-green-700');
      form.reset();
    } else {
      alertMessage.textContent = 'Please fill in all fields correctly.';
      alertMessage.classList.remove('hidden');
      alertMessage.classList.add('bg-red-100', 'text-red-700');
    }
  });

  function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  }

  // Accessibility Enhancements
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const modal = document.getElementById('contact-modal');
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  modal.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

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

  // ARIA Live Regions
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.style.position = 'absolute';
  liveRegion.style.clip = 'rect(0 0 0 0)';
  liveRegion.style.height = '1px';
  liveRegion.style.width = '1px';
  liveRegion.style.margin = '-1px';
  liveRegion.style.padding = '0';
  liveRegion.style.border = '0';
  document.body.appendChild(liveRegion);

  alertMessage.addEventListener('transitionend', () => {
    if (!alertMessage.classList.contains('hidden')) {
      liveRegion.textContent = alertMessage.textContent;
    }
  });
});