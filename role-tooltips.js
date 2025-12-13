
(function () {
  // Only enable tap behavior on touch devices
  const isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;
  if (!isTouch) return;

  // Close any open tooltips
  function closeAll() {
    document.querySelectorAll('.roleChip.is-open').forEach(el => el.classList.remove('is-open'));
  }

  // Toggle on tap
  document.addEventListener('click', (e) => {
    const chip = e.target.closest('.roleChip');
    if (!chip) { closeAll(); return; }

    // If tapping a chip, toggle it and close others
    const wasOpen = chip.classList.contains('is-open');
    closeAll();
    if (!wasOpen) chip.classList.add('is-open');

    e.preventDefault();
    e.stopPropagation();
  }, true);
})();
