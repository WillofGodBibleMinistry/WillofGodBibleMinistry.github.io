/* ===== SCRIPT.JS ===== */

/* ===== FUNCTION TO CREATE MODAL ===== */
function createModal(title, contentHtml) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>${title}</h2>
      ${contentHtml}
    </div>
  `;

  document.body.appendChild(modal);
  modal.style.display = 'flex';

  // Close modal on clicking the X
  modal.querySelector('.close-button').addEventListener('click', () => {
    modal.remove();
  });

  return modal;
}

/* ===== EVENT REGISTRATION ===== */
function registerEvent(eventName) {
  const contentHtml = `
    <p>You are registering for: <strong>${eventName}</strong></p>
    <form id="eventForm">
      <input type="text" id="participantName" placeholder="Your Name" required>
      <input type="email" id="participantEmail" placeholder="Your Email" required>
      <button type="submit">Register</button>
    </form>
  `;

  const modal = createModal('Event Registration', contentHtml);

  modal.querySelector('#eventForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('participantName').value;
    const email = document.getElementById('participantEmail').value;

    alert(`Thank you, ${name}! You are registered for "${eventName}".`);
    modal.remove();
  });
}

/* ===== CONTACT FORM MODAL ===== */
function openContactModal() {
  const contentHtml = `
    <form id="contactForm">
      <input type="text" id="contactName" placeholder="Your Name" required>
      <input type="email" id="contactEmail" placeholder="Your Email" required>
      <textarea id="contactMessage" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  `;

  const modal = createModal('Contact Us', contentHtml);

  modal.querySelector('#contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    alert(`Thank you, ${name}! Your message has been received.`);

    // Clear the form (optional)
    modal.remove();
  });
}

/* ===== DYNAMIC CSS FOR MODALS ===== */
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
    background-color: #e6f0ff;
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    width: 90%;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    position: relative;
  }

  .modal-content h2 {
    color: #1f3c88;
    margin-bottom: 1rem;
  }

  .modal-content input, 
  .modal-content textarea, 
  .modal-content button {
    width: 80%;
    padding: 0.7rem;
    margin: 0.5rem 0;
    border-radius: 6px;
    border: 1px solid #b0c4e2;
    font-size: 1rem;
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

/* ===== EVENT LISTENER TO OPEN CONTACT MODAL ===== */
document.addEventListener('DOMContentLoaded', function () {
  const contactSection = document.getElementById('contact');
  contactSection.innerHTML = `<button id="contactBtn">Contact Us</button>`;
  document.getElementById('contactBtn').addEventListener('click', openContactModal);
});
