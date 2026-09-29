const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const flakiesList = document.querySelectorAll("#flakies");

const messages = [
  "YOU are someone's favorite person.",
  "The thing YOU are building counts, even half finished.",
  "Someone is going to love what YOU make with this.",
  "YOU are allowed to be a beginner for as long as YOU need.",
  "Hot chocolate tastes better after a hard day. YOU've earned one.",
  "YOU ask good questions. That is the whole skill.",
  "YOU are the person YOU are because of the person YOU used to be."
];

button.addEventListener("click", () => {

  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  flakiesList.forEach((flakie) => {
    flakie.classList.add("shaking");
    setTimeout(() => flakie.classList.remove("shaking"), 1200);
  });

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});
