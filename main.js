
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const subscribeButton = document.querySelector('.button.subscribe');
const errorMessage = document.getElementById('error-message');
const mainContent = document.querySelector('main');
const popupSection = document.querySelector('.popup-section');
const dismissButton = document.querySelector('.button.dismiss');
const userEmailSpan = document.getElementById('userEmail');

// validate email
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

//form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent submission

  const emailValue = emailInput.value.trim();


  if (!isValidEmail(emailValue)) {
    emailInput.classList.add('error');
    errorMessage.style.display = 'block'; 
    return; 
  } else {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none'; 
  }

  // Email is valid
  userEmailSpan.textContent = emailValue; 
  mainContent.style.display = 'none'; 
  popupSection.style.display = 'flex'; 
});

// Remove error class when user input field
emailInput.addEventListener('input', function() {
  if (emailInput.classList.contains('error')) {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none'; 
  }
});

// dismiss button
dismissButton.addEventListener('click', function() {
  popupSection.style.display = 'none'; 
  mainContent.style.display = 'flex'; 
});
