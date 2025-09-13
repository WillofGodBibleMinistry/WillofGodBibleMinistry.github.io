// script.js

// Function for registering events
function registerEvent(eventName) {
  alert("You have registered for: " + eventName);
}

// Function for contact form submission
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
    return true; // Allow form submission (if you connect to backend/email later)
  } else {
    alert("Please fill in all fields.");
    return false; // Prevents empty submission
  }
}
