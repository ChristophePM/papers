// Sticky TOC — highlights the active section on scroll
(function () {
  const links = document.querySelectorAll('.toc-rail a');
  if (!links.length) return;

  const sections = Array.from(links).map(a => {
    const id = a.getAttribute('href')?.replace('#', '');
    return id ? document.getElementById(id) : null;
  }).filter(Boolean);

  function update() {
    let current = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= 80) current = s;
    }
    links.forEach(a => {
      const id = a.getAttribute('href')?.replace('#', '');
      a.classList.toggle('active', id === current?.id);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
