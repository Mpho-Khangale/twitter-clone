const darkModeBtn = document.getElementById("darkModeBtn");
const exploreSearch = document.getElementById("exploreSearch");
const categoryTabs = document.querySelectorAll(".category-tab");
const trendCards = document.querySelectorAll(".trend-card");
const noResults = document.getElementById("noResults");
const openTweetModal = document.getElementById("openTweetModal");
const tweetModal = document.getElementById("tweetModal");
const closeModal = document.querySelector(".close-modal");
const followButtons = document.querySelectorAll(".follow button");

let activeCategory = "for-you";

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️ Light Mode";
}

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

function filterTrends() {
    const query = exploreSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    trendCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const matchesCategory =
            activeCategory === "for-you"
                ? categories.includes("for-you")
                : categories.includes(activeCategory);

        const matchesSearch =
            query === "" || card.textContent.toLowerCase().includes(query);

        const isVisible = matchesCategory && matchesSearch;

        card.classList.toggle("hidden", !isVisible);

        if (isVisible) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount > 0;
}

categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        categoryTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        activeCategory = tab.dataset.category;
        filterTrends();
    });
});

exploreSearch.addEventListener("input", filterTrends);

openTweetModal.addEventListener("click", () => {
    tweetModal.style.display = "block";
    tweetModal.setAttribute("aria-hidden", "false");
});

closeModal.addEventListener("click", () => {
    tweetModal.style.display = "none";
    tweetModal.setAttribute("aria-hidden", "true");
});

window.addEventListener("click", (event) => {
    if (event.target === tweetModal) {
        tweetModal.style.display = "none";
        tweetModal.setAttribute("aria-hidden", "true");
    }
});

followButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "Follow") {
            button.textContent = "Following";
            button.style.backgroundColor = "#1d9bf0";
        } else {
            button.textContent = "Follow";
            button.style.backgroundColor = "black";
        }
    });
});

filterTrends();
