const form = document.getElementById("loginForm");
const pw = document.getElementById("pw");
const pwError = document.getElementById("pwError");
const pwCorrect = document.getElementById("pwCorrect");
const email = document.getElementById("email");
const eError = document.getElementById("eError");
const eCorrect = document.getElementById("eCorrect");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const pwPattern = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;


form.addEventListener("submit", (e) => {
    pwError.textContent = "";
    pwCorrect.textContent = "";
    eError.textContent = "";
    eCorrect.textContent = "";

    if (pw.value.trim() === "") {
        e.preventDefault();
        pwError.textContent = "Please enter a password";
        pw.focus()
        return;

    }
    const pwCorrectFormat = pw.value.trim();
    if (!pwPattern.test(pwCorrectFormat)) {
        e.preventDefault();
        pwError.textContent = "Please enter a correct password format with At least 8 characters, At least 1 uppercase letter, and At least 1 special character"
        pw.focus();
        return;
    } else {
        pwCorrect.textContent = "Password is correct";

    }
    const emailValue = email.value.trim();

    if (email.value.trim() === "") {
        e.preventDefault();
        eError.textContent = "Please enter an email";
        email.focus();
        return;
    }
    if (!emailPattern.test(emailValue)) {
        e.preventDefault();
        eError.textContent = "Please enter a valid email address (example: name@example.com)";
        email.focus();
        return;
    } else {
        eCorrect.textContent = "Email is correct";
    }

});