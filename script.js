document.addEventListener('DOMContentLoaded', () => {
  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href'));
    });
  });

  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorContainer = document.getElementById('error-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;
    errorContainer.textContent = '';

    if (nameInput.value.trim() === '') {
      isValid = false;
      errorContainer.textContent += 'Name is required.\n';
    }

    if (!validateEmail(emailInput.value)) {
      isValid = false;
      errorContainer.textContent += 'Valid email is required.\n';
    }

    if (messageInput.value.trim() === '') {
      isValid = false;
      errorContainer.textContent += 'Message is required.\n';
    }

    if (isValid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Accessibility enhancements
  const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  const focusableElements = document.querySelectorAll(focusableElementsString);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) { // shift + tab
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else { // tab
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  });
});