// Simple text animation for hero section
const heroText = document.querySelector('.hero-text h2 span');
const text = "Sayak Bhattacharya";
let index = 0;

function typeEffect() {
  heroText.textContent = text.slice(0, index++);
  if (index <= text.length) setTimeout(typeEffect, 150);
}

window.onload = typeEffect;
