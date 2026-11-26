// Site menu on small screens: a disclosure button with aria-expanded,
// closes on Escape, on a link tap, or on a tap outside the menu.
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  }
  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });
  document.addEventListener('click', function (e) {
    if (btn.getAttribute('aria-expanded') === 'true' && !nav.contains(e.target) && !btn.contains(e.target)) setOpen(false);
  });
})();
