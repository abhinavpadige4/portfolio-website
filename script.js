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
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorContainer = document.getElementById('error-container');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;
    errorContainer.textContent = '';
    successMessage.textContent = '';

    if (!validateEmail(emailInput.value)) {
      isValid = false;
      errorContainer.textContent += 'Please enter a valid email address.\n';
    }

    if (messageInput.value.trim() === '') {
      isValid = false;
      errorContainer.textContent += 'Please enter a message.\n';
    }

    if (isValid) {
      successMessage.textContent = 'Thank you! Your message has been sent.';
      form.reset();
    }
  });

  const validateEmail = (email) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('open-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const focusableElementsString = 'button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])';
  let focusableElements = [];
  let focusedElementBeforeModal;

  const trapFocus = () => {
    focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    focusedElementBeforeModal = document.activeElement;
    focusableElements[0].focus();
  };

  const releaseFocus = () => {
    focusedElementBeforeModal.focus();
  };

  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    trapFocus();
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    releaseFocus();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      releaseFocus();
    }
  });

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const focusedIndex = focusableElements.indexOf(document.activeElement);
      let nextIndex = focusedIndex + 1;
      if (nextIndex >= focusableElements.length) {
        nextIndex = 0;
      }
      focusableElements[nextIndex].focus();
    }
  });
});