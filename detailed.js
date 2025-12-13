let MODE = "inhouse"; // "inhouse" | "lawfirm"

const lanesInhouse = [
  { key:"business", label:"Business / Marketing" },
  { key:"paralegal", label:"Paralegal" },
  { key:"legal", label:"IP Manager / Legal" },
  { key:"questel", label:"Questel tools/services" },
];

const lanesLawfirm = [
  { key:"client", label:"Client (IP Manager)" },
  { key:"lawyer", label:"Trademark Lawyer" },
  { key:"paralegal", label:"Law-firm Paralegal" },
  { key:"questel", label:"Questel tools/services" },
];

// Reusable step templates per phase (short + realistic)
const steps = {
  ideation: {
    inhouse: {
      business: [
        step("Brainstorm candidate names", "Create 5–20 options with context (products, markets, meaning).", ["Equinox Brand Proposal"]),
      ],
      paralegal: [
        step("Structure proposals", "Normalize spelling, intended classes, markets; remove duplicates.", ["Equinox Brand Proposal"]),
      ],
      legal: [
        step("Select shortlist", "Approve names that go to clearance based on risk tolerance and brand strategy.", ["Equinox Brand Proposal"]),
      ],
      questel: [toolStep(["Equinox Brand Proposal"])],
    },
    lawfirm: {
      client: [step("Send candidates to counsel", "Client shares proposed names and intended scope.", ["Equinox Brand Proposal"])],
      lawyer: [step("Define clearance scope", "Confirm territories/classes, risk level, and timeline.", ["Equinox Law"])],
      paralegal: [step("Prepare search set", "Clean list and map to classes/territories for clearance.", ["Equinox Brand Proposal"])],
      questel: [toolStep(["Equinox Brand Proposal","Equinox Law"])],
    }
  },

  clearance: {
    inhouse: {
      business: [step("Provide intended use", "Confirm products, markets, and go-to-market timeline.", ["—"])],
      paralegal: [step("Run clearance searches", "Similarity searches across territories/classes; compile findings.", ["Markify ProSearch"])],
      legal: [step("Decision gate: proceed?", "Proceed / modify name / abandon based on risk.", ["Markify ProSearch"])],
      questel: [toolStep(["Markify ProSearch"])],
    },
    lawfirm: {
      client: [step("Confirm scope & priority", "Which countries first? What is negotiable?", ["—"])],
      lawyer: [step("Interpret risk", "Assess conflicts and advise on options.", ["Markify ProSearch"])],
      paralegal: [step("Execute clearance", "Run searches, save reports, prepare summary.", ["Markify ProSearch"])],
      questel: [toolStep(["Markify ProSearch"])],
    }
  },

  filing: {
    inhouse: {
      business: [step("Lock brand usage", "Final brand name + intended goods/services confirmed.", ["—"])],
      paralegal: [step("Draft application", "Applicant data + classes + wording prepared.", ["Qthena","Filing Services"])],
      legal: [step("Validate and approve", "Review drafting and filing strategy.", ["Qthena"])],
      questel: [toolStep(["Qthena","Filing Services","Equinox Corporate"])],
    },
    lawfirm: {
      client: [step("Approve filing instructions", "Sign off on applicant details and scope.", ["—"])],
      lawyer: [step("Set filing strategy", "National/Regional/International route and risk controls.", ["Qthena"])],
      paralegal: [step("Prepare filing package", "Draft goods/services + documents; submit.", ["Filing Services"])],
      questel: [toolStep(["Qthena","Filing Services","Equinox Law"])],
    }
  },

  prosecution: {
    inhouse: {
      business: [step("Support evidence", "Provide use plans, branding samples if needed.", ["—"])],
      paralegal: [step("Track deadlines", "Monitor office deadlines; collect documents.", ["Equinox Corporate","Uz.ip"])],
      legal: [step("Draft/approve response", "Legal arguments + amendments as needed.", ["Qthena"])],
      questel: [toolStep(["Equinox Corporate","Uz.ip","Qthena"])],
    },
    lawfirm: {
      client: [step("Approve response approach", "Agree to amend/argue/escalate.", ["—"])],
      lawyer: [step("Build response", "Legal analysis + argumentation.", ["Qthena"])],
      paralegal: [step("Assemble evidence", "Upload/organize exhibits and submit.", ["Uz.ip","Equinox Law"])],
      questel: [toolStep(["Equinox Law","Uz.ip","Qthena"])],
    }
  },

  registration: {
    inhouse: {
      business: [step("Brand rollout", "Launch with confidence once protected.", ["—"])],
      paralegal: [step("Update portfolio record", "Status + certificates + key dates stored.", ["Equinox Corporate"])],
      legal: [step("Confirm monitoring plan", "Decide which territories/classes need watching.", ["Markify Watch"])],
      questel: [toolStep(["Equinox Corporate"])],
    },
    lawfirm: {
      client: [step("Receive registration update", "Client notified and stores outcome.", ["—"])],
      lawyer: [step("Confirm next actions", "Monitoring + enforcement thresholds.", ["Markify Watch"])],
      paralegal: [step("Close prosecution / archive", "Store registration docs and dates.", ["Equinox Law"])],
      questel: [toolStep(["Equinox Law"])],
    }
  },

  monitoring: {
    inhouse: {
      business: [step("Share new brand variants", "New logos/slogans/lines may need watch rules.", ["—"])],
      paralegal: [step("Set up watches", "Conflicting filings + online monitoring.", ["Markify Watch","Brand Monitor"])],
      legal: [step("Triage alerts", "Decide oppose / negotiate / ignore.", ["Equinox Corporate"])],
      questel: [toolStep(["Markify Watch","Brand Monitor","Equinox Corporate"])],
    },
    lawfirm: {
      client: [step("Define alert thresholds", "What is a must-act conflict?", ["—"])],
      lawyer: [step("Advise triage", "Recommend action based on risk and precedent.", ["Qthena"])],
      paralegal: [step("Operate monitoring", "Maintain watch rules; compile alerts for counsel.", ["Markify Watch","Brand Monitor"])],
      questel: [toolStep(["Markify Watch","Brand Monitor"])],
    }
  },

  enforcement: {
    inhouse: {
      business: [step("Provide impact context", "Market impact and urgency.", ["—"])],
      paralegal: [step("Evidence management", "Collect screenshots, filings, and correspondence.", ["Uz.ip"])],
      legal: [step("Opposition / litigation decision", "Choose strategy and execute with counsel if needed.", ["Qthena","Equinox Corporate"])],
      questel: [toolStep(["Uz.ip","Qthena","Equinox Corporate"])],
    },
    lawfirm: {
      client: [step("Approve action", "Budget + objectives agreed.", ["—"])],
      lawyer: [step("Lead action", "Opposition filing / litigation management.", ["Qthena","Equinox Law"])],
      paralegal: [step("File + track", "Deadlines, exhibits, submissions.", ["Uz.ip","Equinox Law"])],
      questel: [toolStep(["Uz.ip","Qthena","Equinox Law"])],
    }
  },

  maintenance: {
    inhouse: {
      business: [step("Communicate changes", "New markets/products/corporate changes.", ["—"])],
      paralegal: [step("Renewals & recordals", "Renew on time; record ownership changes.", ["Renewals Services","Recordals Services"])],
      legal: [step("Approve portfolio changes", "Sign off on scope, transfers, assignments.", ["Equinox Corporate"])],
      questel: [toolStep(["Renewals Services","Recordals Services","Equinox Corporate"])],
    },
    lawfirm: {
      client: [step("Provide corporate docs", "M&A/assignment docs, sign-offs.", ["—"])],
      lawyer: [step("Validate legal change", "Confirm what must be recorded where.", ["Equinox Law"])],
      paralegal: [step("Execute renewals/recordals", "Submit requests and track completion.", ["Renewals Services","Recordals Services"])],
      questel: [toolStep(["Renewals Services","Recordals Services","Equinox Law"])],
    }
  },
};

// Branches: show two standard “exception” scenarios in relevant phases
const branches = {
  prosecution: [
    branch("Office Action", "Trademark office raises objections (absolute/relative). Team responds using Qthena guidance; documents stored in Uz.ip; deadlines tracked in Equinox."),
  ],
  monitoring: [
    branch("Conflict Found", "Markify Watch / Brand Monitor triggers an alert. Legal triages and decides whether to oppose, negotiate, or escalate."),
  ],
  enforcement: [
    branch("Opposition", "File opposition within deadline; manage evidence and submissions."),
    branch("Litigation", "Escalate when necessary; track milestones and documents."),
  ],
  maintenance: [
    branch("M&A / Ownership Change", "Recordals update the official owner after merger/acquisition/assignment."),
  ]
};

function step(title, text, productBadges){
  return { title, text, badges: (productBadges||[]).filter(x=>x && x!=="—") };
}
function toolStep(list){
  return { title:"Questel touchpoints", text:"Tools/services used in this phase.", badges:list };
}
function branch(title, text){
  return { title, text };
}

function activeLanes(){
  return MODE === "lawfirm" ? lanesLawfirm : lanesInhouse;
}

function buildTOC(){
  const toc = document.getElementById("toc");
  toc.innerHTML = "";
  window.PHASES.forEach(p=>{
    const a = document.createElement("a");
    a.className = "tocItem";
    a.href = `#${p.key}`;
    a.innerHTML = `<strong>${p.idx} · ${p.title}</strong><div style="margin-top:6px;color:rgba(255,255,255,.65);font-size:12.5px">${p.desc}</div>`;
    toc.appendChild(a);
  });
}

function buildSections(){
  const root = document.getElementById("sections");
  root.innerHTML = "";

  window.PHASES.forEach(p=>{
    const modelSteps = steps[p.key]?.[MODE] || {};
    const lanes = activeLanes();

    const sec = document.createElement("div");
    sec.className = "section";
    sec.id = p.key;

    sec.innerHTML = `
      <div class="sectionHeader">
        <div>
          <h2>${p.idx} · ${p.title}</h2>
          <p>${p.overview || p.desc}</p>
          <div class="pills" style="margin-top:10px">
            ${(p.products||[]).map((x,i)=>`<span class="pill ${i===0?"accent":""}">${x}</span>`).join("")}
          </div>
        </div>
        <div>
          <a class="btn secondary" href="${p.key}.html">Open phase page →</a>
        </div>
      </div>

      <div class="sectionBody">
        <div class="lanes" id="lanes_${p.key}"></div>

        ${branches[p.key] ? `
          <div class="branchRow">
            ${branches[p.key].map(b=>`
              <div class="branch">
                <h3>${b.title}</h3>
                <p>${b.text}</p>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </div>
    `;

    root.appendChild(sec);

    const lanesHost = document.getElementById(`lanes_${p.key}`);
    lanesHost.innerHTML = "";

    lanes.forEach(l=>{
      const label = document.createElement("div");
      label.className = "laneLabel";
      label.textContent = l.label;

      const track = document.createElement("div");
      track.className = "laneTrack";

      (modelSteps[l.key] || []).forEach(s=>{
        const node = document.createElement("div");
        node.className = "step";
        node.innerHTML = `
          <p class="stepTitle">${s.title}</p>
          <p class="stepText">${s.text}</p>
          ${s.badges?.length ? `<div class="badges">${s.badges.map((x,i)=>`<span class="badge ${i===0?"accent":""}">${x}</span>`).join("")}</div>` : ""}
        `;
        track.appendChild(node);
      });

      lanesHost.appendChild(label);
      lanesHost.appendChild(track);
    });
  });
}

function setMode(mode){
  MODE = mode;
  // visually toggle buttons
  const inBtn = document.getElementById("modeInhouse");
  const lawBtn = document.getElementById("modeLawfirm");
  inBtn.classList.toggle("btn", true);
  lawBtn.classList.toggle("btn", true);

  inBtn.classList.toggle("secondary", MODE !== "inhouse");
  lawBtn.classList.toggle("secondary", MODE !== "lawfirm");

  buildSections();
}

document.getElementById("modeInhouse").addEventListener("click", ()=>setMode("inhouse"));
document.getElementById("modeLawfirm").addEventListener("click", ()=>setMode("lawfirm"));

buildTOC();
setMode("inhouse");
