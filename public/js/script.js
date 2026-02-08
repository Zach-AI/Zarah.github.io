document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const heading = document.getElementById("question-heading");
  const banner = document.getElementById("banner");
  const collage = document.getElementById("bg-collage");

  // Debug helper: if anything is missing, you'll see it in browser console
  if (!yesButton || !noButton || !heading || !banner || !collage) {
    console.error("Missing element(s):", {
      yesButton: !!yesButton,
      noButton: !!noButton,
      heading: !!heading,
      banner: !!banner,
      collage: !!collage
    });
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
    // Uses public/images/1.png ... 20.png
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

    // Hide buttons after Yes
    yesButton.style.display = "none";
    noButton.style.display = "none";
  });

  noButton.addEventListener("click", () => {
    noClicks += 1;
    noButton.textContent = noTexts[noClicks % noTexts.length];

    // Grow YES button every NO click
    const size = parseFloat(getComputedStyle(yesButton).fontSize) || 18;
    yesButton.style.fontSize = (size + 6) + "px";
  });
});
