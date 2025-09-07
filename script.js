// Sections order
const sections = [
  "countdownSection",
  "greetingSection",
  "messageSection",
  "gallerySection"
];
let currentIndex = 0;

function showSection(index) {
  sections.forEach((id, i) => {
    document.getElementById(id).classList.toggle("active", i === index);
  });
}

function nextSection() {
  currentIndex++;
  if (currentIndex < sections.length) {
    showSection(currentIndex);
  }
}

// Countdown logic (10 → 0 then move to greeting)
let countdown = 10;
const countdownElement = document.getElementById("countdown");
const countdownTimer = setInterval(() => {
  countdownElement.innerText = countdown;
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownTimer);
    nextSection(); // show greeting
  }
}, 1000);
