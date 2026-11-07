(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false');
  }));
})();
