// ===== Event Registration Function =====
function registerEvent(eventName) {
  // Simple confirmation popup
  alert(`Thank you for registering for ${eventName}! We look forward to seeing you.`);
}

// ===== Contact Form Submission Function =====
function submitForm() {
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return false;
  }

  // Show confirmation to user
  alert(`Thank you, ${name}! Your message has been sent successfully.`);

  // Reset the form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  // Returning false prevents actual form submission since we use Google Forms embed
  return false;
}

// Optional: Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
