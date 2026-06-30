//dark mode

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});

// TWEET MODAL

const openTweetModal = document.getElementById("openTweetModal");
const tweetModal = document.getElementById("tweetModal");
const closeModal = document.querySelector(".close-modal");

openTweetModal.addEventListener("click", () => {
    tweetModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    tweetModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === tweetModal) {
        tweetModal.style.display = "none";
    }
});
