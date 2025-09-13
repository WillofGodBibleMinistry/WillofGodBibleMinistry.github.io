/* ===== SCRIPT.JS ===== */

// Function to handle event registration
function registerEvent(eventName) {
  // Create modal container
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Modal content
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>Event Registration</h2>
      <p>You are registering for: <strong>${eventName}</strong></p>
      <form id="eventForm">
        <input type="text" id="participantName" placeholder="Your Name" required>
        <input type="email" id="participantEmail" placeholder="Your Email" required>
        <button type="submit">Register</button>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  // Show modal
  modal.style.display = 'flex';

  // Close modal when clicking the X
  modal.querySelector('.close-button').addEventListener('click', () => {
    modal.remove();
  });

  // Handle form submission
  modal.querySelector('#eventForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('participantName').value;
    const email = document.getElementById('participantEmail').value;

    // Display confirmation
    alert(`Thank you, ${name}! You are registered for "${eventName}".`);

    // Remove modal after registration
    modal.remove();
  });
}

// Function to handle contact form submission
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation (already required in HTML, so mostly redundant)
  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return false;
  }

  // You can replace this alert with sending data to a server if available
  alert(`Thank you, ${name}! Your message has been received.`);

  // Clear form after submission
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  return false; // Prevent page refresh
}

/* ===== MODAL CSS dynamically ===== */
const style = document.createElement('style');
style.innerHTML = `
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: #f0f7ff;
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    width: 90%;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .modal-content h2 {
    color: #1f3c88;
    margin-bottom: 1rem;
  }

  .modal-content input, .modal-content button {
    width: 80%;
    padding: 0.7rem;
    margin: 0.5rem 0;
    border-radius: 6px;
    border: 1px solid #b0c4e2;
  }

  .modal-content button {
    background-color: #1f3c88;
    color: #fff;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  .modal-content button:hover {
    background-color: #4a90e2;
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #1f3c88;
  }
`;
document.head.appendChild(style);
