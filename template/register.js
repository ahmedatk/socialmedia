document.getElementById("verify-button").addEventListener("click", function() {
    document.getElementById("otp-container").classList.remove("hidden");
    this.disabled = true;
});

document.getElementById("registration-form").addEventListener("submit", function(e) {
    e.preventDefault();
    // Add code to handle the registration process here.
    // You can use AJAX or JavaScript to send the registration data to a server.
    // After successful registration, you can redirect the user to a new page.
});
