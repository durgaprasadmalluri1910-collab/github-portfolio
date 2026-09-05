const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => siteNav.classList.remove('open'));
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeIcon.textContent = isDark ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-button.active').classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));