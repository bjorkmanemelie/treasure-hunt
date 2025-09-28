// Räknare
let foundCount = 0;
let time = 0;
let timer;

// Hämta HUD-element
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

// Starta timern
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

// --- Här ska ni lägga in era egna skatter --- //
for (let i = 1; i <= 10; i++) {
  const treasure = document.getElementById(`treasure${i}`);
  if (treasure) {
    // Kontrollera att elementet existerar
    treasure.addEventListener("click", () => {
      if (!treasure.classList.contains("found")) {
        treasure.classList.add("found");
        foundCount++;
        foundCountEl.textContent = foundCount;

        alert("Grattis! Du hittade en skatt! 🎉");

        if (foundCount === 10) {
          clearInterval(timer);
          alert("Alla skatter hittade på " + time + " sekunder!");
        }
      }
    });
  }
}