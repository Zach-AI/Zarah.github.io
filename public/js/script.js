const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const question = document.getElementById("question");
const gif = document.getElementById("gif");

// Texts shown when clicking NO
const noTexts = [
  "Are you sure?",
  "Really sure??",
  "Think again 🥺",
  "Don’t break my heart 💔",
  "Last chance 😢"
];

let noClickCount = 0;

/* ================================
   COLLAGE BACKGROUND FUNCTION
================================ */
function showCollageBackground() {
  const images = [];
  for (let i = 1; i <= 20; i++) {
    images.push(`url("public/images/${i}.png")`);
  }

  const collage = document.getElementById("bg-collage");
  collage.style.backgroundImage = images.join(", ");
  collage.style.display = "block";
}

/* ================================
   YES BUTTON CLICK
================================ */
yesButton.addEventListener("click", () => {
  question.innerHTML = "Yayyyy 💖💖💖";
  gif.src = "public/images/yes.gif";

  showCollageBackground();

  noButton.style.display = "none";
  yesButton.style.display = "none";
});

/* ================================
   NO BUTTON CLICK
================================ */
noButton.addEventListener("click", () => {
  noButton.innerHTML =
    noTexts[noClickCount % noTexts.length];

  noClickCount++;

  // Make YES button grow every time NO is clicked
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = currentSize + 5 + "px";
});
