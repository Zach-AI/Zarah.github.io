document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const heading = document.getElementById("question-heading");
  const banner = document.getElementById("banner");
  const collage = document.getElementById("bg-collage");

  let collageInterval = null;

  function getRandomImages(count = 6) {
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
    numbers.sort(() => Math.random() - 0.5);
    return numbers.slice(0, count);
  }

  function renderCollage() {
    collage.innerHTML = "";

    const images = getRandomImages(6);

    images.forEach(num => {
      const img = document.createElement("img");
      img.src = `./public/images/${num}.PNG`;
      collage.appendChild(img);
    });
  }

  function startCollageRotation() {
    collage.style.display = "grid";
    renderCollage();

    collageInterval = setInterval(() => {
      renderCollage();
    }, 4000); // change every 4 seconds
  }

  // YES click
  yesButton.addEventListener("click", () => {
    heading.textContent = "Yayyyy 💖💖💖";
    banner.src = "./public/images/yes.gif";

    startCollageRotation();

    yesButton.style.display = "none";
    noButton.style.display = "none";
  });

  // NO click (unchanged)
  let noClicks = 0;
  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Think again 🥺",
    "Don’t break my heart 💔"
  ];

  noButton.addEventListener("click", () => {
    noClicks++;
    noButton.textContent = noTexts[noClicks % noTexts.length];

    const size = parseFloat(getComputedStyle(yesButton).fontSize) || 18;
    yesButton.style.fontSize = size + 6 + "px";
  });
})
