const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
function closeMenu() { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
links.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); toggle.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
