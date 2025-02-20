 // Function to open a modal
 function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "block"; // Show the modal
  }
}

// Function to close a modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "none"; // Hide the modal
  }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none"; // Hide the modal
      }
  }
}

// Function to handle feedback submission
function submitFeedback(event) {
  event.preventDefault(); // Prevent default form submission
  // Add your feedback submission logic here
  closeModal('feedbackModal'); // Close the modal after submission
}

function enrollmentForm() {
 document.getElementById('enrollModal').classList.remove('hidden');
} 
function viewNotifications() {
 alert("Viewing Notifications");
}
function editProfile() {
 document.getElementById('profileForm').classList.remove('hidden');
}


function saveProfile() {
 const name = document.getElementById('name').value;
 const role = document.getElementById('role').value;
 const profilePicture = document.getElementById('profilePicture').src;

 document.getElementById('profileName').innerText = name;
 document.getElementById('profileRole').innerText = role;
 document.getElementById('profileImage').src = profilePicture;

 document.getElementById('welcomeMessage').innerText = `Welcome ${name.split(' ')[1]}!`;

 document.getElementById('profileForm').classList.add('hidden');
 alert("Profile saved successfully!");
}


function updateCircle(circleId, percentage) {
 const circle = document.getElementById(circleId);
 const radius = circle.r.baseVal.value;
 const circumference = 2 * Math.PI * radius;
 const offset = circumference - (percentage / 100) * circumference;
 circle.style.strokeDasharray = `${circumference} ${circumference}`;
 circle.style.strokeDashoffset = offset;
}

function notifyEnrollmentStatus(status) {
 if (status === 'success') {
   alert("Enrollment process completed successfully!");
 } else if (status === 'failed') {
   alert("Enrollment process failed. Please try again.");
 }
}

function changeProfilePicture(event) {
 const reader = new FileReader();
 reader.onload = function() {
   const output = document.getElementById('profilePicture');
   output.src = reader.result;
 };
 reader.readAsDataURL(event.target.files[0]);
}

function closeProfileForm() {
 document.getElementById('profileForm').classList.add('hidden');
}

function closeEnrollModal() {
 document.getElementById('enrollModal').classList.add('hidden');
}


function goToHomepage() {
 window.location.href = 'home.html'; // Change this to the actual homepage URL
}

function submitEnrollmentForm(event) {
 event.preventDefault();
 alert("Enrollment form submitted successfully!");
 closeEnrollModal();
}


function submitViewStatusForm(event) {
 event.preventDefault();
 alert("Viewing enrollment status!");
 closeViewStatusModal();
}

document.addEventListener("DOMContentLoaded", function() {
 updateCircle('enrollmentProgressCircle', 25);
 updateCircle('documentSubmissionCircle', 33);
 updateCircle('enrollmentCompletedCircle', 75);

 document.getElementById('enrollment-form').addEventListener('submit', submitEnrollmentForm);
});



// Form validation for the enrollment form
document.getElementById('enrollment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  alert("Enrollment form submitted!");
});

// Handle registration form submission
const registrationForm = document.getElementById('registrationForm');
registrationForm.onsubmit = function(event) {
  event.preventDefault(); // Prevent the default form submission
  alert('Registration successful!'); // Placeholder for success message
  closeModal('registerModal'); // Close the modal after submission
};

// Show the document upload form when the button is clicked
document.getElementById('showFormBtn').addEventListener('click', function() {
  const form = document.getElementById('documentUploadForm');
  if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
      this.textContent = 'Hide Document Upload Form'; // Change button text
  } else {
      form.style.display = 'none';
      this.textContent = 'Show Document Upload Form'; // Change button text back
  }
});

// Document upload form submission
document.getElementById('documentUploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Create a FormData object to hold the file data
  const formData = new FormData(this);

  // Simulate a successful upload (replace this with actual AJAX request)
  setTimeout(() => {
      document.getElementById('message').textContent = 'Documents submitted successfully!';
      document.getElementById('documentUploadForm').reset();
      document.getElementById('documentUploadForm').style.display = 'none'; // Hide form after submission
      document.getElementById('showFormBtn').textContent = 'Show Document Upload Form'; // Reset button text
  }, 1000);
});

// Get the form elements
const childNameInput = document.getElementById('child-name');
const childAgeInput = document.getElementById('child-age');
const dateOfBirthInput = document.getElementById('date-birth');
const genderInput = document.getElementById('gender');
const allergiesInput = document.getElementById('allergies');
const allergiesDetailsInput = document.getElementById('allergies-details');
const immunizationInput = document.getElementById('immunization');
const immunizationDetailsInput = document.getElementById('immunization-details');
const preschoolInput = document.getElementById('preschool');
const preschoolDetailsInput = document.getElementById('preschool-details');
const parentNameInput = document.getElementById('parent-name');
const contactNumberInput = document.getElementById('contact-number');
const permanentAddressInput = document.getElementById('permanent-address');
const newAddressInput = document.getElementById('new-address');

// Add event listener to the enrollment form submit button
const registerEnrollForm = document.getElementById('enrollment-form'); // Ensure this is defined
registerEnrollForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validation helper function
  function validateField(field, message) {
      if (field.value.trim() === '') {
          alert(message);
          return false;
      }
      return true;
  }

  // Validate fields
  if (!validateField(childNameInput, 'Child\'s name is required')) return;
  if (!validateField(childAgeInput, 'Child\'s age is required')) return;
  if (childAgeInput.value < 0 || childAgeInput.value > 18) {
      alert('Child\'s age must be between 0 and 18');
      return;
  }
  if (!validateField(dateOfBirthInput, 'Date of birth is required')) return;
  if (!validateField(genderInput, 'Gender is required')) return;
  if (!validateField(allergiesInput, 'Allergies is required')) return;
  if (allergiesInput.value === 'yes' && !validateField(allergiesDetailsInput, 'Allergies details are required')) return;
  if (!validateField(immunizationInput, 'Immunization is required')) return;
  if (immunizationInput.value === 'no' && !validateField(immunizationDetailsInput, 'Immunization details are required')) return;
  if (!validateField(preschoolInput, 'Preschool is required')) return;
  if (preschoolInput.value === 'yes' && !validateField(preschoolDetailsInput, 'Preschool details are required')) return;
  if (!validateField(parentNameInput, 'Parent\'s name is required')) return;
  if (!validateField(contactNumberInput, 'Contact number is required')) return;
  if (!validateField(permanentAddressInput, 'Permanent address is required')) return;
  if (!validateField(newAddressInput, 'New address is required')) return;

  // If all validations pass, submit the form
  alert('Enrollment form submitted successfully!'); // Placeholder for success message
  registerEnrollForm.submit(); // Uncomment this line if you want to submit the form
});

function openLocation() {
  const locationSelect = document.getElementById('location');
  const selectedValue = locationSelect.value;

  if (selectedValue) {
      window.open(selectedValue, '_blank'); // Open the selected location in a new tab
  }
}

function logout() {
  // Clear user session data
  localStorage.removeItem('user'); // If you are using localStorage
  sessionStorage.removeItem('user'); // If you are using sessionStorage

  // Redirect to the homepage
  window.location.href = './home.html'; // Change this to your homepage URL
}


















