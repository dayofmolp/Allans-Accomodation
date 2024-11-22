// Scroll to Section Function
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Property Popup (NSFAS Accredited Message)
function showPopup(propertyName) {
  alert(propertyName + " is NSFAS Accredited!");
}

// Booking Form Validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const property = document.getElementById('property').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !property) {
    alert('Please fill in all required fields.');
    return false;
  }
  alert('Thank you for your booking! We will get in touch soon.');
  return true;
}

// Review Carousel Navigation
let currentIndex = 0;
const reviews = document.querySelectorAll('.reviews-carousel .review');

function showNextReview() {
  reviews[currentIndex].style.display = 'none';  // Hide current review
  currentIndex = (currentIndex + 1) % reviews.length;  // Go to next review (loop)
  reviews[currentIndex].style.display = 'block';  // Show next review
}

// Start the review carousel to auto-scroll every 5 seconds
setInterval(showNextReview, 5000);

// Initially show the first review
reviews[currentIndex].style.display = 'block';
