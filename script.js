// === Form handling ===
const form = document.getElementById('waitlistForm');
const successMsg = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');
const counter = document.getElementById('counter');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value.trim();
  if (!email) return;

  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Inscription...';

  await fetch('https://formspree.io/f/mrervjbn', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });

  form.style.display = 'none';
  successMsg.classList.add('show');

  let n = parseInt(counter.textContent);
  counter.textContent = n + 1;

  if (window.gtag) gtag('event', 'waitlist_signup', { email_domain: email.split('@')[1] });
});

// === Animated counter on load ===
const targetCount = 247;
const animateCounter = (el, target) => {
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(interval); }
    el.textContent = current;
  }, 30);
};
window.addEventListener('load', () => {
  animateCounter(counter, targetCount);
});
