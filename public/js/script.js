document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const questionHeading = document.getElementById("question-heading");
  const banner = document.getElementById("banner");
  const collage = document.getElementById("bg-collage");

  if (!yesButton || !noButton || !questionHeading || !banner) {
    console.error("Missing required elements. Check IDs in index.html.");
    return;
  }

  // NO button texts (cycles)
  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Think again 🥺",
    "Don’t break my heart 💔",
    "Last chance 😢",
    "Ok ok… maybe? 😭"
  ];

  let noClickCount = 0;

  function showCollageBackground() {
    // If bg-collage div doesn't exist, just skip gracefully
    if (!collage) return;

    const layers = [];
    for (let i = 1; i <= 20; i++) {
      layers.push(`url("./public/images/${i}.PNG")`);
    }

    collage.style.backgroundImage = layers.join(", ");
    collage.style.display = "block";
  }

  // YES click
  yesButton.addEventListener("click", () => {
    questionHeading.textContent = "Yayyyy 💖💖💖";
    banner.src = "./public/images/yes.gif";

    for (let i = 1; i <= 20; i++) {
    layers.push(`url("./public/images/${i}.PNG")`);

    
    showCollageBackground();

    // Hide buttons after Yes
    noButton.style.display = "none";
    yesButton.style.display = "none";
  });

  // NO click
  noButton.addEventListener("click", () => {
    noClickCount++;
    noButton.textContent = noTexts[noClickCount % noTexts.length];

    // Grow YES button each time NO is clicked
    const currentSize = parseFloat(getComputedStyle(yesButton).fontSize) || 16;
    yesButton.style.fontSize = currentSize + 6 + "px";
  });
});
