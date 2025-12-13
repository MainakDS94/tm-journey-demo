// role-tooltips.js
(function () {
  // Enable on touch-like devices (more reliable than hover:none)
  const isTouchLike =
    (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
    "ontouchstart" in window;

  if (!isTouchLike) return;

  // Create a single overlay for role details
  let overlay = document.getElementById("roleOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "roleOverlay";
    overlay.innerHTML = `
      <div class="roleOverlayBackdrop" data-close="1"></div>
      <div class="roleOverlaySheet" role="dialog" aria-modal="true" aria-label="Role details">
        <button class="roleOverlayClose" type="button" aria-label="Close" data-close="1">✕</button>
        <div class="roleOverlayBody"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const body = overlay.querySelector(".roleOverlayBody");

  function closeOverlay() {
    overlay.classList.remove("is-open");
    body.innerHTML = "";
  }

  function openOverlayFromChip(chip) {
    const pop = chip.querySelector(".rolePop");
    if (!pop) return;

    // Use the existing tooltip content
    body.innerHTML = pop.innerHTML;
    overlay.classList.add("is-open");
  }

  document.addEventListener(
    "click",
    (e) => {
      // Close overlay
      if (e.target && e.target.getAttribute("data-close") === "1") {
        closeOverlay();
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Open on tapping a role chip
      const chip = e.target.closest(".roleChip");
      if (!chip) return;

      openOverlayFromChip(chip);
      e.preventDefault();
      e.stopPropagation();
    },
    true
  );

  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });
})();

