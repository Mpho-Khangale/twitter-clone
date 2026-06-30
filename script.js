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

// POST NEW TWEET

const postTweetBtn = document.getElementById("postTweetBtn");
const tweetInput = document.getElementById("tweetInput");
const tweetFeed = document.getElementById("tweetFeed");

postTweetBtn.addEventListener("click", () => {

    const tweetText = tweetInput.value.trim();

    if (tweetText === "") {
        alert("Please enter a tweet before posting.");
        return;
    }

    const tweet = document.createElement("div");
    tweet.classList.add("tweet");

    tweet.innerHTML = `
        <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile">

        <div class="tweet-content">

            <h4>
                You
                <span>@you · Just now</span>
            </h4>

            <p>${tweetText}</p>

            <div class="tweet-stats">
                <span><i class="far fa-comment"></i> 0</span>
                <span><i class="fas fa-retweet"></i> 0</span>
                <span><i class="far fa-heart"></i> 0</span>
            </div>

        </div>
    `;

    tweetFeed.prepend(tweet);

    tweetInput.value = "";
});

// FOLLOW BUTTONS

const followButtons = document.querySelectorAll(".follow button");

followButtons.forEach(button => {

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

// SEARCH BAR DEMO

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const trends = document.querySelectorAll(".trend");

        trends.forEach(trend => {

            const trendText = trend.textContent.toLowerCase();

            if (trendText.includes(value)) {
                trend.style.display = "block";
            } else {
                trend.style.display = "none";
            }

        });

    });

}
