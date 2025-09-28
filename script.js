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

//Simple explaination of the code:
// querySelectorAll('[id^="treasure"]') - Hittar alla element vars ID börjar med "treasure"
// .forEach() - Går igenom varje element i listan, ett i taget
// treasure => - För varje element kallar vi det "treasure" (du kan kalla det vad du vill)
// Koden inuti {} körs för varje skatt

// Fördelar med forEach:

// ✅ Kortare och renare kod
// ✅ Mindre risk för fel (ingen räknare att hålla koll på)
// ✅ Lättare att läsa och förstå

// Skillnad mellan for-loop och forEach:

// For-loop: "Gör detta X antal gånger"
// forEach: "För varje sak i denna lista, gör detta"

// I ditt skattsökningsspel betyder det: "För varje skatt på sidan, lägg till en click-listener som gör skatten klickbar!" 🎯