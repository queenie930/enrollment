// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal elements
    var forgotPasswordModal = document.getElementById("forgotPasswordModal");
    var sendResetLinkButton = document.getElementById("sendResetLink");
    var forgotPasswordForm = document.getElementById("forgotPasswordForm");

    // Handle the "Send Reset Link" button click
    sendResetLinkButton.addEventListener("click", function() {
        // Get the email input value
        var emailInput = document.getElementById("email").value;

        // Basic validation for email input
        if (emailInput === "") {
            alert("Please enter your email address.");
            return;
        }

        // Simulate sending a reset link (you can replace this with an actual API call)
        alert("A reset link has been sent to " + emailInput + ". Please check your inbox.");

        // Close the modal after sending the reset link
        $(forgotPasswordModal).modal('hide');

        // Optionally, reset the form
        forgotPasswordForm.reset();
    });

   
 // Optional: Handle the login form submission
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic validation (you can add more complex validation as needed)
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate login (you can replace this with an actual API call)
    alert("Logging in with username: " + username);

    // Call the API for authentication
    authenticateUser (username, password)
        .then(data => {
            console.log(data); // Log the response to see what is returned
            if (data.success) {
                alert("Login successful! Redirecting to user portal...");
                window.location.href = "userportal.html"; // Redirect to userportal.html
            } else {
                alert("Invalid username or password.");
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again.");
        });
});
});

// Function to authenticate user via API
function authenticateUser (username, password) {
    return fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
    });
}


// Select the dropdown menu links
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

// Add click event listeners to each link
dropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Get the target modal from the data attribute
        const targetModal = link.getAttribute('data-target');

        // Check if the target modal exists
        if (targetModal) {
            // Show the modal
            showModal(targetModal);
        }

        // Optionally, close the dropdown menu after clicking a link
        const dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.style.display = 'none'; // Hide the dropdown
    });
});

// Optional: Handle form submission for registration and forgot password
document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    // Add your registration logic here
    closeModal('registerModal'); // Close the modal after submission
};

document.getElementById('forgotPasswordForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    // Add your forgot password logic here
    closeModal('forgotPasswordModal'); // Close the modal after submission
};

// Function to show a modal
function showModal(modalId) {
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

// Event listener for closing modals when clicking outside of them
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none"; // Hide the modal
        }
    }
}


