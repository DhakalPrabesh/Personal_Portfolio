// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
});

// Custom modal for confirmation box
function showModal(message) {
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('customModal');
  const msg = document.getElementById('modalMessage');
  const okBtn = document.getElementById('modalOkBtn');
  msg.textContent = message;
  overlay.style.display = 'block';
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
  okBtn.onclick = function() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  };
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if (!name || !email || !message) {
    showModal('Please fill in all fields.');
    return;
  }
  // Simple email validation
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    showModal('Please enter a valid email address.');
    return;
  }
  showModal('Thank you for your message!');
  this.reset();
});

// Scroll-reveal animation for card sections
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-section');
  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(card => observer.observe(card));
}); 