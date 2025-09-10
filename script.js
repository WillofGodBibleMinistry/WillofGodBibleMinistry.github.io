// Register for events
function registerEvent(eventName) {
  alert("Thank you for registering for " + eventName + "!");
}

// Contact form submission
function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been received.");
    return true;
  } else {
    alert("Please fill in all fields.");
    return false;
  }
}
