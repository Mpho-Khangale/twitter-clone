const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const togglePasswordBtn = document.getElementById("togglePassword");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

const savedUsername = localStorage.getItem("username");
if (savedUsername) {
    usernameInput.value = savedUsername;
}

togglePasswordBtn.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text" : "password";
    togglePasswordBtn.setAttribute("aria-pressed", String(isHidden));
    togglePasswordBtn.setAttribute(
        "aria-label",
        isHidden ? "Hide password" : "Show password"
    );
});

function showError(input, errorElement, message) {
    input.classList.add("input-error");
    errorElement.textContent = message;
}

function clearError(input, errorElement) {
    input.classList.remove("input-error");
    errorElement.textContent = "";
}

function validateForm() {
    let isValid = true;

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    clearError(usernameInput, usernameError);
    clearError(passwordInput, passwordError);

    if (username === "") {
        showError(usernameInput, usernameError, "Username or email is required.");
        isValid = false;
    }

    if (password === "") {
        showError(passwordInput, passwordError, "Password is required.");
        isValid = false;
    }

    return isValid;
}

usernameInput.addEventListener("input", () => {
    if (usernameInput.value.trim() !== "") {
        clearError(usernameInput, usernameError);
    }
});

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.trim() !== "") {
        clearError(passwordInput, passwordError);
    }
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    localStorage.setItem("username", usernameInput.value.trim());
    window.location.href = "index.html";
});
