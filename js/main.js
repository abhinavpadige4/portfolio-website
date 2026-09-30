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
  const alertMessage = document.getElementById('alert-message');

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
      isValid = false;
      nameInput.classList.add('border-red-500');
      nameInput.setAttribute('aria-invalid', 'true');
    } else {
      nameInput.classList.remove('border-red-500');
      nameInput.setAttribute('aria-invalid', 'false');
    }

    if (!validateEmail(emailInput.value)) {
      isValid = false;
      emailInput.classList.add('border-red-500');
      emailInput.setAttribute('aria-invalid', 'true');
    } else {
      emailInput.classList.remove('border-red-500');
      emailInput.setAttribute('aria-invalid', 'false');
    }

    if (messageInput.value.trim() === '') {
      isValid = false;
      messageInput.classList.add('border-red-500');
      messageInput.setAttribute('aria-invalid', 'true');
    } else {
      messageInput.classList.remove('border-red-500');
      messageInput.setAttribute('aria-invalid', 'false');
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
  const modal = document.getElementById('mobile-menu');
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  mobileMenuButton.addEventListener('click', () => {
    firstFocusableElement.focus();
  });

  modal.addEventListener('keydown', (e) => {
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