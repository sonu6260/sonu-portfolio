const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Replace this placeholder with the email address you want to publish.
const contactEmail = 'YOUR_EMAIL@example.com';
document.getElementById('copyEmail').addEventListener('click', async () => {
  const feedback = document.getElementById('feedback');
  if (contactEmail === 'YOUR_EMAIL@example.com') {
    feedback.textContent = 'Edit contactEmail in assets/script.js and add your email address.';
    return;
  }
  try {
    await navigator.clipboard.writeText(contactEmail);
    feedback.textContent = 'Email address copied!';
  } catch {
    feedback.textContent = `Email: ${contactEmail}`;
  }
});
