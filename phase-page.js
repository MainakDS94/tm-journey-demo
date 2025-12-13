(function () {
  const key = document.documentElement.getAttribute("data-phase");
  const phase = (window.PHASES || []).find(p => p.key === key);
  if (!phase) return;

  const byId = (id) => document.getElementById(id);

  // Title + overview
  byId("pTitle").textContent = phase.title; // no "01 ·"
  byId("pSub").textContent = phase.overview || phase.desc || "";

  // Pills
  byId("pPills").innerHTML = (phase.products || [])
    .map(x => `<span class="pill accent">${x}</span>`)
    .join("");

  // WHAT HAPPENS (bullets)
  const stepsEl = byId("pSteps");
  if (stepsEl) {
    stepsEl.innerHTML = (phase.steps || []).length
      ? phase.steps.map(x => `<li>${x}</li>`).join("")
      : `<li>Steps not defined for this phase yet.</li>`;
  }

  // CLEARANCE-STYLE cards (used by Clearance + Monitoring)
  // Option A: Clearance uses phase.searchModes + #pModes
  const modesEl = document.getElementById("pModes");
  if (modesEl) {
    const modes = phase.searchModes || [];
    modesEl.innerHTML = modes.length ? modes.map(m => `
      <div class="modeCard">
        <div class="modeTitle">${m.mode}</div>
        <div class="modeLine"><span>When:</span> ${m.when}</div>
        <div class="modeLine"><span>Typical:</span> ${m.typical}</div>
      </div>
    `).join("") : "";
  }

  // Option B: Monitoring uses phase.approaches + #pApproaches
  const approachesEl = document.getElementById("pApproaches");
  if (approachesEl) {
    const approaches = phase.approaches || [];
    approachesEl.innerHTML = approaches.length ? approaches.map(a => `
      <div class="modeCard">
        <div class="modeTitle">${a.name}</div>
        <div class="modeLine"><span>When:</span> ${a.when}</div>
        <div class="modeLine"><span>Typical:</span> ${a.typical}</div>
        <div class="modeLine"><span>Focus:</span> ${a.focus}</div>
      </div>
    `).join("") : "";
  }

  // WHO DOES WHAT — avatar circles
  const rolesEl = byId("pRoles");
  if (rolesEl) {
    rolesEl.innerHTML = (phase.roles || []).map(r => `
      <div class="roleChip" tabindex="0" aria-label="${r.name}">
        <img class="roleAvatar" src="${r.img}" alt="${r.name}">
        <div class="rolePop" role="dialog" aria-label="${r.name} responsibilities">
          <div class="rolePopTitle">${r.name}</div>
          <ul class="rolePopList">
            ${(r.work || []).map(x => `<li>${x}</li>`).join("")}
          </ul>
        </div>
      </div>
    `).join("");
  }

  // OUTPUTS
  const outEl = byId("pOut");
  if (outEl) outEl.innerHTML = (phase.outputs || []).map(x => `<li>${x}</li>`).join("");

  // NAV
  const prev = window.PHASES.find(p => p.next === phase.key);
  const next = phase.next ? window.PHASES.find(p => p.key === phase.next) : null;

  const navEl = byId("pNav");
  if (navEl) {
    navEl.innerHTML = `
      <a class="btn secondary" href="index.html">← Overview</a>
      ${prev ? `<a class="btn secondary" href="${prev.key}.html">← ${prev.title}</a>` : ""}
      ${next ? `<a class="btn" href="${next.key}.html">Next: ${next.title} →</a>` : `<a class="btn" href="index.html">Finish →</a>`}
    `;
  }
})();
