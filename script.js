document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const alertRegion = document.getElementById('alert-region');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    if (!nameInput.value.trim()) {
      isValid = false;
      nameInput.classList.add('border-red-500');
    } else {
      nameInput.classList.remove('border-red-500');
    }
    if (!validateEmail(emailInput.value)) {
      isValid = false;
      emailInput.classList.add('border-red-500');
    } else {
      emailInput.classList.remove('border-red-500');
    }
    if (!messageInput.value.trim()) {
      isValid = false;
      messageInput.classList.add('border-red-500');
    } else {
      messageInput.classList.remove('border-red-500');
    }
    if (isValid) {
      showAlert('success', 'Message sent successfully!');
      form.reset();
    } else {
      showAlert('error', 'Please fill in all fields correctly.');
    }
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showAlert(type, message) {
    alertRegion.textContent = message;
    alertRegion.setAttribute('aria-live', 'assertive');
    alertRegion.classList.remove('bg-green-100', 'bg-red-100', 'text-green-800', 'text-red-800');
    if (type === 'success') {
      alertRegion.classList.add('bg-green-100', 'text-green-800');
    } else {
      alertRegion.classList.add('bg-red-100', 'text-red-800');
    }
    setTimeout(() => {
      alertRegion.textContent = '';
      alertRegion.setAttribute('aria-live', 'off');
    }, 3000);
  }
});