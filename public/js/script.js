document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const heading = document.getElementById("question-heading");
  const banner = document.getElementById("banner");
  const collage = document.getElementById("bg-collage");
  const debug = document.getElementById("debug");

  // Visible debug so you know JS is running
  if (debug) debug.textContent = "JS loaded ✅";

  if (!yesButton || !noButton || !heading || !banner || !collage) {
    console.error("Missing element(s). Check index.html IDs.");
    if (debug) debug.textContent = "JS loaded ❌ Missing elements (check IDs).";
    return;
  }

  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Think again 🥺",
    "Don’t break my heart 💔",
    "Last chance 😢",
    "Okay… maybe? 😭"
  ];

  let noClicks = 0;

  function buildCollageBackground() {
    // Your files are 1.PNG ... 20.PNG (case-sensitive)
    const layers = [];
    for (let i = 1; i <= 20; i++) {
      layers.push(`url("./public/images/${i}.PNG")`);
    }
    collage.style.backgroundImage = layers.join(", ");
    collage.style.display = "block";
  }

  yesButton.addEventListener("click", () => {
    heading.textContent = "Yayyyy 💖💖💖";
    banner.src = "./public/images/yes.gif";

    buildCollageBackground();

    yesButton.style.display = "none";
    noButton.style.display = "none";

    if (debug) debug.textContent = "YES clicked ✅";
  });

  noButton.addEventListener("click", () => {
    noClicks += 1;
    noButton.textContent = noTexts[noClicks % noTexts.length];

    const size = parseFloat(getComputedStyle(yesButton).fontSize) || 18;
    yesButton.style.fontSize = (size + 6) + "px";

    if (debug) debug.textContent = `NO clicked ${noClicks} ✅`;
  });
});
