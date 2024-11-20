// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Show popup
function showPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
}

// Close popup
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

// Contact form submission alert (for demo purposes)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your message has been sent!');
});
