// Startdato for mulekten
const startDate = new Date("2024-07-01T00:00:00").getTime();
const finePerDay = 1000; // 1000 kr per døgn
const finePerSecond = finePerDay / 86400; // Påløpt beløp per sekund

// Funksjon for å oppdatere tid og mulektteller
function updateCounters() {
  const now = new Date().getTime();
  const elapsedTime = now - startDate;

  // Beregn antall dager siden startdato
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = days;

  // Beregn påløpt mulkt basert på sekunder
  const fineAmount = (elapsedTime / 1000) * finePerSecond;
  document.getElementById("amount").textContent = fineAmount.toLocaleString(
    "nb-NO",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );
}

// Oppdaterer tellerne hvert sekund
setInterval(updateCounters, 1000);
