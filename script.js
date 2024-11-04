// Startdato for mulekten
const startDate = new Date("2024-07-01T00:00:00").getTime();
const finePerDay = 1000; // 1000 kr per døgn
const finePerSecond = finePerDay / 86400; // Påløpt beløp per sekund

// Funksjon for å oppdatere tid og mulektteller
function updateCounters() {
  const now = new Date().getTime();
  const elapsedTime = now - startDate;

  // Beregn måneder og resterende dager siden startdato
  const daysSinceStart = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const months = Math.floor(daysSinceStart / 30); // Antall hele måneder
  const days = daysSinceStart % 30; // Resterende dager etter hele måneder

  // Oppdater antall måneder og dager i HTML
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;

  // Beregn påløpt mulkt og oppdater
  const fineAmount = (elapsedTime / 1000) * finePerSecond;
  const formattedFineAmount = fineAmount.toLocaleString("nb-NO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Oppdater totalbeløp
  document.getElementById("amount").textContent = formattedFineAmount;
}

// Oppdaterer tellerne hvert sekund
setInterval(updateCounters, 1000);
