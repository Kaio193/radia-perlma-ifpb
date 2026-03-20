// Executa ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('toggle-tema');
  const root = document.body;
  const icone = document.getElementById('icone-tema');

  // Carrega o tema salvo no localStorage
  const temaSalvo = localStorage.getItem('modo-tema');
  if (temaSalvo === 'escuro') {
    root.classList.add('escuro');
    checkbox.checked = true;
    icone.textContent = '🌙';
  }
  else if (temaSalvo == 'claro') {
    root.classList.add('claro');
    checkbox.checked = false;
    icone.textContent = '☀️';
  }

  // Alternância do modo claro/escuro
  checkbox.addEventListener('change', () => {
    const escuro = checkbox.checked;
    root.classList.toggle('escuro', escuro);
    icone.textContent = escuro ? '🌙' : '☀️';
    localStorage.setItem('modo-tema', escuro ? 'escuro' : 'claro');
  });
});

// Animação dos cards ao rolar a página
const cards = document.querySelectorAll('.conquista-card, .about-card, .quote-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  })
}, { threshold: 0.2 })

cards.forEach(card => {
  observer.observe(card)
})

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});