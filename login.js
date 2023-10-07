// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sendOtpButton = document.getElementById("send-otp");
    const loginForm = document.getElementById("login-form");

    sendOtpButton.addEventListener("click", function () {
        // You can implement OTP sending logic here
        alert("OTP sent to your phone number.");
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const otpInput = document.getElementById("otp").value;
        // You can implement OTP verification and user data retrieval logic here
        alert("OTP verified. User data retrieved.");
        // Redirect or perform further actions here
    });
});
