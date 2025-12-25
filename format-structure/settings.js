const themeToggle = document.getElementById("themeToggle");
const notifToggle = document.getElementById("notifToggle");
const langSelect = document.getElementById("langSelect");
const accentSelect = document.getElementById("accentSelect");
const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const toast = document.getElementById("toast");

function setToggle(btn, on) {
    btn.classList.toggle("on", !!on);
    btn.dataset.on = on ? "1" : "0";
}
function getToggle(btn) {
    return btn.dataset.on === "1";
}

function applyTheme(isLight) {
    document.body.classList.toggle("light", !!isLight);
}

function applyAccent(val) {
    // Just changes the nav active gradient by updating CSS variables
    if (val === "green-blue") {
        document.documentElement.style.setProperty("--accent1", "#22c55e");
        document.documentElement.style.setProperty("--accent2", "#4b79ff");
    } else if (val === "orange-pink") {
        document.documentElement.style.setProperty("--accent1", "#f97316");
        document.documentElement.style.setProperty("--accent2", "#ec4899");
    } else {
        document.documentElement.style.setProperty("--accent1", "#4b79ff");
        document.documentElement.style.setProperty("--accent2", "#a855f7");
    }
}

function showToast() {
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 1200);
}

function loadSettings() {
    const raw = localStorage.getItem("settings");
    if (!raw) return;

    try {
        const s = JSON.parse(raw);
        setToggle(themeToggle, !!s.lightMode);
        setToggle(notifToggle, !!s.notifications);
        langSelect.value = s.lang || "en";
        accentSelect.value = s.accent || "blue-purple";

        applyTheme(!!s.lightMode);
        applyAccent(accentSelect.value);
    } catch { }
}

function saveSettings() {
    const settings = {
        lightMode: getToggle(themeToggle),
        notifications: getToggle(notifToggle),
        lang: langSelect.value,
        accent: accentSelect.value
    };
    localStorage.setItem("settings", JSON.stringify(settings));
    applyTheme(settings.lightMode);
    applyAccent(settings.accent);
    showToast();
}

function resetSettings() {
    localStorage.removeItem("settings");
    setToggle(themeToggle, false);
    setToggle(notifToggle, false);
    langSelect.value = "en";
    accentSelect.value = "blue-purple";
    applyTheme(false);
    applyAccent("blue-purple");
    showToast();
}

themeToggle.addEventListener("click", () => {
    const on = !getToggle(themeToggle);
    setToggle(themeToggle, on);
    applyTheme(on);
});

notifToggle.addEventListener("click", () => {
    const on = !getToggle(notifToggle);
    setToggle(notifToggle, on);
    if (on) {
        // demo notification
        try { alert("Notifications enabled (demo)"); } catch { }
    }
});

accentSelect.addEventListener("change", () => applyAccent(accentSelect.value));

saveBtn.addEventListener("click", saveSettings);
resetBtn.addEventListener("click", resetSettings);

// init defaults + load
setToggle(themeToggle, false);
setToggle(notifToggle, false);
applyTheme(false);
applyAccent("blue-purple");
loadSettings();