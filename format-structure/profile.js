const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const form = document.getElementById("profileForm");
const msg = document.getElementById("msg");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const major = document.getElementById("major");
const bio = document.getElementById("bio");

const avatar = document.getElementById("avatar");
const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");

const clearBtn = document.getElementById("clearBtn");

function setMessage(type, text) {
    msg.className = "msg " + type;
    msg.textContent = text;
}

function updatePreview() {
    const full = (firstName.value.trim() + " " + lastName.value.trim()).trim() || "User";
    previewName.textContent = full;
    previewEmail.textContent = email.value.trim() || "name@example.com";
    avatar.textContent = full ? full[0].toUpperCase() : "U";
}

function loadProfile() {
    const raw = localStorage.getItem("profile");
    if (!raw) return;

    try {
        const p = JSON.parse(raw);
        firstName.value = p.firstName || "";
        lastName.value = p.lastName || "";
        email.value = p.email || "";
        phone.value = p.phone || "";
        country.value = p.country || "";
        major.value = p.major || "";
        bio.value = p.bio || "";
    } catch { }
    updatePreview();
}

firstName.addEventListener("input", updatePreview);
lastName.addEventListener("input", updatePreview);
email.addEventListener("input", updatePreview);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.className = "msg";
    msg.textContent = "";

    const fn = firstName.value.trim();
    const ln = lastName.value.trim();
    const em = email.value.trim();

    if (!fn || !ln) {
        setMessage("bad", "First name and last name are required.");
        return;
    }

    if (!em) {
        setMessage("bad", "Email is required.");
        return;
    }

    if (!emailPattern.test(em)) {
        setMessage("bad", "Invalid email format. Example: name@example.com");
        return;
    }

    const profile = {
        firstName: fn,
        lastName: ln,
        email: em,
        phone: phone.value.trim(),
        country: country.value,
        major: major.value.trim(),
        bio: bio.value.trim()
    };

    localStorage.setItem("profile", JSON.stringify(profile));
    updatePreview();
    setMessage("ok", "Saved. Profile stored locally for this browser.");
});

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("profile");
    form.reset();
    updatePreview();
    setMessage("ok", "Cleared.");
});

// init
loadProfile();
updatePreview();