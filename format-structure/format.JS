// ===== Login validation =====
const form = document.getElementById("loginForm");
const pw = document.getElementById("pw");
const pwError = document.getElementById("pwError");
const pwCorrect = document.getElementById("pwCorrect");
const email = document.getElementById("email");
const eError = document.getElementById("eError");
const eCorrect = document.getElementById("eCorrect");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const pwPattern = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

if (form) {
    form.addEventListener("submit", (e) => {
        // clear messages
        pwError.textContent = "";
        pwCorrect.textContent = "";
        eError.textContent = "";
        eCorrect.textContent = "";

        // values (trim once)
        const pwValue = pw.value.trim();
        const emailValue = email.value.trim();

        // password empty
        if (pwValue === "") {
            e.preventDefault();
            pwError.textContent = "Please enter a password";
            pw.focus();
            return;
        }

        // password format
        if (!pwPattern.test(pwValue)) {
            e.preventDefault();
            pwError.textContent =
                "Password must be at least 8 characters, include 1 uppercase letter, and 1 special character.";
            pw.focus();
            return;
        } else {
            pwCorrect.textContent = "Password is correct";
        }

        // email empty
        if (emailValue === "") {
            e.preventDefault();
            eError.textContent = "Please enter an email";
            email.focus();
            return;
        }

        // email format
        if (!emailPattern.test(emailValue)) {
            e.preventDefault();
            eError.textContent =
                "Please enter a valid email address (example: name@example.com)";
            email.focus();
            return;
        } else {
            eCorrect.textContent = "Email is correct";
        }

        // If everything is valid, we DO NOT preventDefault
        // so the form action will run normally.
    });
}

// ===== Optional: welcome page username from URL =====
// Works only on pages that have these IDs. If not, it won't crash.
const params = new URLSearchParams(window.location.search);
const name = (params.get("name") || "User").trim();

const userNameEl = document.getElementById("userName");
const nameLineEl = document.getElementById("nameLine");
const avatarEl = document.getElementById("avatar");
const yearEl = document.getElementById("year");

if (userNameEl) userNameEl.textContent = name;
if (nameLineEl) nameLineEl.textContent = name;
if (avatarEl) avatarEl.textContent = name ? name[0].toUpperCase() : "U";
if (yearEl) yearEl.textContent = new Date().getFullYear();
