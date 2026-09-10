/* =========================
   YOURPUPPYSPACES JAVASCRIPT
   ========================= */


/* CHANGE BETWEEN PAGES */

function showPage(pageName) {

    // Get every page
    const pages = document.querySelectorAll(".page");

    // Hide every page
    pages.forEach(function(page) {
        page.classList.add("hidden");
    });

    // Show the selected page
    document.getElementById(pageName).classList.remove("hidden");

    // Scroll back to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* SURPRISE BUTTON */

function surpriseMe() {

    const messages = [
        "🐶 A puppy has entered the website!",
        "🌈 YOU FOUND THE RAINBOW!",
        "✨ You are now 100% certified silly.",
        "🌸 Have a nice day!",
        "💗 Welcome to YourPuppySpaces!",
        "🐾 *happy puppy noises*"
    ];

    const randomNumber = Math.floor(
        Math.random() * messages.length
    );

    document.getElementById("surprise").textContent =
        messages[randomNumber];
}


/* MUSIC BUTTON */

function musicMessage() {

    document.getElementById("music-text").textContent =
        "🎧 Music section activated! ♡";
}