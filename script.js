// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth in-page scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav on link click
      if (nav.classList.contains('open')) nav.classList.remove('open');
    }
  });
});

// Scroll reveal simple implementation
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
  for (const el of reveals){
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80){
      el.classList.add('show');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Contact form: build a mailto link so messages open in user's email client
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }

  const subject = encodeURIComponent`(Website message from ${name})`;
  const body = encodeURIComponent`(Name: ${name}%0AEmail: ${email}%0A%0A${message})`;
  // opens the user's email client with pre-filled subject & body
  window.location.href = `mailto:destiny.okpone@gmail.com?subject=${subject}&body=${body}`;
});