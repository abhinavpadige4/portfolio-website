document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '') {
      isValid = false;
      alert('Name is required.');
    }

    if (email === '' || !email.includes('@')) {
      isValid = false;
      alert('Valid email is required.');
    }

    if (message === '') {
      isValid = false;
      alert('Message is required.');
    }

    if (isValid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });
});