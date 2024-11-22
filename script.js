// Scroll to a section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Show NSFAS Pop-up for Property
function showNsfasPopup(property) {
    const popup = document.getElementById('nsfas-popup');
    const modalContent = document.querySelector('.popup-content p');
    
    modalContent.innerHTML = `This property (${property}) is NSFAS accredited, making it a great choice for students.`;
    popup.style.display = 'block';
}

// Close NSFAS Pop-up
function closeNsfasPopup() {
    document.getElementById('nsfas-popup').style.display = 'none';
}

// Form Validation (Example)
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('Please fill out all required fields.');
        return false;
    }
    
    return true;
}
