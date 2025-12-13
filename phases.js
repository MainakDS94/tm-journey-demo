// phases.js
// Data model for the 8-phase trademark journey (used by index.html, detailed.html, and phase pages)

window.PHASES = [
  {
    key: "ideation",
    idx: "01",
    icon: "💡",
    title: "Ideation",
    desc: "Collect candidate names and keep them organized.",
    products: ["Equinox Brand Proposal"],
    overview: "Capture proposed names in one place so Legal can review consistently and quickly.",

    steps: [
      "Marketing/Brand generates candidate names and captures context (meaning, tone, audience).",
      "Names are recorded in Equinox Brand Proposal with consistent formatting and key variants.",
      "Paralegal normalises entries (spelling, spacing, hyphens, plural/singular) and completes missing fields.",
      "IP/Legal applies naming policy constraints (e.g., prohibited terms, overly descriptive language).",
      "A shortlist is agreed (with alternates) and logged as ready for clearance."
    ],

    roles: [
      {
        name: "Marketing / Brand",
        img: "assets/roles/marketing.jpg",
        work: [
          "Propose candidate names with brand context (meaning, tone, target audience).",
          "Provide intended goods/services and target markets.",
          "Align internal stakeholders on preferred options and alternates."
        ]
      },
      {
        name: "Paralegal",
        img: "assets/roles/paralegal.jpg",
        work: [
          "Capture names and variants in Equinox Brand Proposal.",
          "Standardise entries and ensure required fields are complete.",
          "Track comments, decisions, and shortlist status over time."
        ]
      },
      {
        name: "IP Manager",
        img: "assets/roles/ip-manager.jpg",
        work: [
          "Define priority jurisdictions and overall scope.",
          "Set risk tolerance and shortlist ordering.",
          "Approve readiness to proceed to clearance."
        ]
      },
      {
        name: "In-house Legal",
        img: "assets/roles/inhouse-legal.jpg",
        work: [
          "Apply policy constraints and eliminate obvious high-risk candidates early.",
          "Validate that the shortlist can proceed to clearance search.",
          "Approve the final shortlist for search."
        ]
      },
      {
        name: "Outside Counsel (Law Firm)",
        img: "assets/roles/outside-counsel.jpg",
        work: [
          "Optional early sanity-check for high-stakes launches.",
          "Flag problematic jurisdictions/terms before search spend."
        ]
      }
    ],

    outputs: [
      "Shortlist of finalists with preferred order + alternates",
      "Approved spelling + key variants (spacing, hyphens, plural/singular)",
      "Target countries/regions for clearance",
      "Initial goods/services intent (draft class direction)",
      "Decision log: why candidates were dropped/kept"
    ],

    next: "clearance"
  },

{
  key: "clearance",
  idx: "02",
  icon: "🔎",
  title: "Clearance",
  desc: "Check if the name is risky or already taken.",
  products: ["Markify ProSearch", "Markify Comprehensive Search", "Markify Bulk Search"],
  overview:
    "Search for similar trademarks and decide whether to proceed, adjust the name, or change filing scope.",

  steps: [
  "Define search scope: markets, classes, and name variants.",
  "Select the appropriate search approach based on the task.",
  "Run searches and identify the most relevant conflicts.",
  "Evaluate risk based on similarity, scope, and status.",
  "Decision gate: proceed, adjust scope, switch name, or stop."
],


  roles: [
    {
      name: "Paralegal",
      img: "assets/roles/paralegal.jpg",
      work: [
        "Run searches and keep the scope consistent (countries, classes, variants).",
        "Use Bulk Search when comparing many candidate marks quickly (up to ~500 at once).",
        "Compile a concise conflict pack (top hits + why they matter + links/screens)."
      ]
    },
    {
      name: "IP Manager",
      img: "assets/roles/ip-manager.jpg",
      work: [
        "Set the search scope aligned to launch strategy (priority markets, classes).",
        "Interpret risk in context of the portfolio and business priorities.",
        "Choose proceed vs modify vs drop (and when to escalate to counsel)."
      ]
    },
    {
      name: "In-house Legal",
      img: "assets/roles/inhouse-legal.jpg",
      work: [
        "Approve the risk decision and final mark direction for filing.",
        "Decide mitigation actions (narrow spec, territory choices, coexistence approach).",
        "Document the decision rationale for auditability."
      ]
    },
    {
      name: "Outside Counsel (Law Firm)",
      img: "assets/roles/outside-counsel.jpg",
      work: [
        "Often delivers a one-time professional clearance using Comprehensive Search.",
        "Provides the legal opinion on registrability and conflict risk.",
        "Recommends mitigation options (spec narrowing, strategy, next searches)."
      ]
    }
  ],

  outputs: [
    "Search plan: markets + classes + variants + similarity settings",
    "Clearance summary: key conflicts and risk rating (low/medium/high)",
    "Decision gate: proceed / modify scope / alternate name / drop",
    "If needed: follow-up targeted search requests and rationale"
  ],

  searchModes: [
  {
    mode: "ProSearch",
    when: "Ongoing clearance work with multiple iterations.",
    typical: "In-house IP teams and paralegals.",
    value: "Fast refinement and repeatable searching."
  },
  {
    mode: "Compr. Search",
    when: "One-off, high-stakes clearance for a specific mark.",
    typical: "Law firms or IP managers delivering a legal opinion.",
    value: "Depth and defensibility for decision-making."
  },
  {
    mode: "Bulk Search",
    when: "Early screening of many candidate names, multiple projects.",
    typical: "Paralegals and brand teams shortlisting options, working on multiple projects.",
    value: "Rapid elimination of shortlisted options, muliple searches in parallel."
  }
],


  next: "filing"
},


  {
    key: "filing",
    idx: "03",
    icon: "📝",
    title: "Filing",
    desc: "Prepare and submit the trademark application.",
    products: ["Qthena", "Filing Services"],
    overview: "Draft the specification, confirm owner details, and file to secure a filing date.",

    steps: [
      "Confirm owner entity, mark representation (word/logo), and filing jurisdictions.",
      "Draft goods/services specification aligned with business intent and risk tolerance.",
      "Use Qthena guidance to refine terminology and local practice requirements.",
      "Collect required data (priority claims, supporting docs where applicable).",
      "Submit via Questel Filing Services and open the case for tracking."
    ],

    roles: [
      {
        name: "Marketing / Brand",
        img: "assets/roles/marketing.jpg",
        work: [
          "Confirm final mark presentation (word/logo) and usage plan.",
          "Provide product descriptors and commercial context for drafting.",
          "Validate any compromises in scope that impact go-to-market."
        ]
      },
      {
        name: "Paralegal",
        img: "assets/roles/paralegal.jpg",
        work: [
          "Draft application data (owner, address, priority, mark depiction).",
          "Prepare goods/services draft and supporting documents in the case file.",
          "Coordinate approvals and handoff to Questel Filing Services."
        ]
      },
      {
        name: "IP Manager",
        img: "assets/roles/ip-manager.jpg",
        work: [
          "Approve filing strategy: jurisdictions, classes, timing, priorities.",
          "Validate the scope aligns with portfolio strategy and budget.",
          "Decide on phased filings if required."
        ]
      },
      {
        name: "In-house Legal",
        img: "assets/roles/inhouse-legal.jpg",
        work: [
          "Approve filing scope and final application content.",
          "Confirm risk posture and any constraints (disclaimers/limitations).",
          "Sign off submission."
        ]
      },
      {
        name: "Outside Counsel (Law Firm)",
        img: "assets/roles/outside-counsel.jpg",
        work: [
          "Refine goods/services with local practice to reduce objections.",
          "Prepare any required legal statements or limitations.",
          "Advise on best filing route in complex jurisdictions."
        ]
      }
    ],

    outputs: [
      "Filed application(s) with confirmed filing date(s)",
      "Final goods/services specification per jurisdiction",
      "Case created for tracking and document storage",
      "Budget and approvals captured in the case record"
    ],

    next: "prosecution"
  },

  {
    key: "prosecution",
    idx: "04",
    icon: "🛡️",
    title: "Prosecution",
    desc: "Handle office objections and deadlines.",
    products: ["Equinox Corporate" , "Equinox Law", "Qthena", "Uz.ip"],
    overview: "Manage office actions, evidence, deadlines, and responses until the application is allowed or refused.",

    steps: [
      "Track incoming office actions and deadlines in the case workspace.",
      "Classify objection type: formalities, absolute grounds, relative grounds, specification issues.",
      "Use Qthena to draft response direction and check jurisdictional requirements.",
      "Centralise supporting documents and data in Uz.ip (built by lawyers for lawyers, based on user-provided documents).",
      "Optionally schedule automatic website capture to preserve online evidence; retrieve and classify product pages where relevant.",
      "Submit responses, monitor examiner communications, and iterate until resolution; keep the case record auditable."
    ],

    roles: [
      {
        name: "Marketing / Brand",
        img: "assets/roles/marketing.jpg",
        work: [
          "Provide brand context, usage plans, and clarifications as needed.",
          "Support evidence requests (campaigns, naming rationale, materials).",
          "Validate any required changes that affect brand usage."
        ]
      },
      {
        name: "Paralegal",
        img: "assets/roles/paralegal.jpg",
        work: [
          "Track deadlines and status updates in Equinox.",
          "Collect documents and centralise evidence/correspondence in Uz.ip.",
          "Schedule website captures when evidence needs to be preserved and organised."
        ]
      },
      {
        name: "IP Manager",
        img: "assets/roles/ip-manager.jpg",
        work: [
          "Decide response strategy: argue vs amend vs withdraw/abandon.",
          "Coordinate multi-country consistency across parallel filings.",
          "Escalate when business decisions are required (scope reduction, rename)."
        ]
      },
      {
        name: "In-house Legal",
        img: "assets/roles/inhouse-legal.jpg",
        work: [
          "Approve substantive arguments and settlement posture.",
          "Approve amendments that change protection scope.",
          "Manage internal risk acceptance and stakeholder sign-off."
        ]
      },
      {
        name: "Outside Counsel (Law Firm)",
        img: "assets/roles/outside-counsel.jpg",
        work: [
          "Draft compliant responses (legal arguments, amendments) using Qthena guidance.",
          "Handle examiner communications and formal submissions.",
          "Use Uz.ip as the central evidence/document hub when building the file."
        ]
      }
    ],

    outputs: [
      "Office action responses filed (or amendments submitted)",
      "Updated prosecution status and timeline with tracked deadlines",
      "Evidence and correspondence centralised and searchable in Uz.ip (incl. scheduled captures where used)",
      "Decision record: argue vs amend vs abandon"
    ],

    next: "registration"
  },

  {
    key: "registration",
    idx: "05",
    icon: "✅",
    title: "Registration",
    desc: "Trademark is approved and stored in the portfolio.",
    products: ["Equinox Corporate","Equinox Law"],
    overview: "Once accepted, the trademark becomes a managed asset with documents, scope, and upcoming maintenance dates.",

    steps: [
      "Confirm registration details (owner, mark, scope, territories, classes).",
      "Update the portfolio record in Equinox Corporate or Equinox Law.",
      "Store registration certificate and key documents.",
      "Set maintenance deadlines and renewal schedule visibility.",
      "Align internal stakeholders on usage guidelines and monitoring posture."
    ],

    roles: [
      {
        name: "Marketing / Brand",
        img: "assets/roles/marketing.jpg",
        work: [
          "Confirm usage guidelines and consistent mark use.",
          "Provide brand assets for record completeness where needed.",
          "Report future expansion plans that may require new filings."
        ]
      },
      {
        name: "Paralegal",
        img: "assets/roles/paralegal.jpg",
        work: [
          "Update portfolio status and documents in Equinox Corporate/Law.",
          "Attach certificates and relevant correspondence to the asset record.",
          "Create visibility for maintenance/renewal dates."
        ]
      },
      {
        name: "IP Manager",
        img: "assets/roles/ip-manager.jpg",
        work: [
          "Validate coverage aligns with intended business footprint.",
          "Tag and categorise the asset for reporting and portfolio strategy.",
          "Decide monitoring scope for the newly registered mark."
        ]
      },
      {
        name: "In-house Legal",
        img: "assets/roles/inhouse-legal.jpg",
        work: [
          "Confirm final scope and any constraints/limitations.",
          "Approve monitoring/enforcement posture and escalation thresholds.",
          "Coordinate with business on acceptable risk and use."
        ]
      },
      {
        name: "Outside Counsel (Law Firm)",
        img: "assets/roles/outside-counsel.jpg",
        work: [
          "Confirm registration details and any post-registration formalities.",
          "Advise on local requirements if follow-on actions exist."
        ]
      }
    ],

    outputs: [
      "Registered asset recorded in portfolio (Equinox Corporate/Law)",
      "Certificate and key documents stored and linked",
      "Maintenance/renewal deadlines visible",
      "Monitoring scope confirmed"
    ],

    next: "monitoring"
  },

  {
    key: "monitoring",
    idx: "06",
    icon: "👁️",
    title: "Monitoring",
    desc: "Watch for new filings and online misuse.",
    products: ["Markify Trademark Watch", "Markify Brand Monitor", "Markify Intelligence Monitor", "Markify Domain Watch"],
    overview: "Detect conflicts and online misuse early, then triage and escalate when necessary.",

	approaches: [
		{
			name: "Trademark Watch",
			when: "Ongoing monitoring of new trademark filings.",
			typical: "Paralegals and IP teams managing legal conflicts.",
			focus: "Register-based conflicts, similar marks, oppositions."
		},
		{
			name: "Intelligence Monitor",
			when: "Continuous competitive and portfolio intelligence.",
			typical: "IP managers and legal leadership monitoring trends.",
			focus: "Owner watch, G&S watch, business watch and reporting."
		},
		{
			name: "Brand & Domain Monitoring",
			when: "Continuous online and digital brand protection.",
			typical: "Brand protection + legal teams handling misuse signals.",
			focus: "ECOM, social, web search, and domain abuse detection."
		}
	],



    steps: [
		"Define monitoring scope and alert routing (legal, intelligence, online/digital).",
		"Configure Trademark Watch + Intelligence Monitor for legal and portfolio signals.",
		"Configure Brand Monitor + Domain Watch for online misuse and domain abuse.",
		"Paralegal triages alerts: ignore, watchlist, investigate, escalate.",
		"IP/Legal approves escalation thresholds; escalate to Enforcement when action is approved."
	],

    roles: [
      {
        name: "Marketing / Brand",
        img: "assets/roles/marketing.jpg",
        work: [
          "Report online misuse patterns and market feedback.",
          "Help prioritise channels/regions where misuse is most damaging.",
          "Provide examples of consumer confusion where available."
        ]
      },
      {
        name: "Paralegal",
        img: "assets/roles/paralegal.jpg",
        work: [
          "Configure Markify Watch and Domain Watch.",
          "Review alerts on a cadence and triage outcomes consistently.",
          "Set up Brand Monitor, Intelligence Monitor queries and route actionable hits."
        ]
      },
      {
        name: "IP Manager",
        img: "assets/roles/ip-manager.jpg",
        work: [
          "Define watch scope aligned to portfolio and risk.",
          "Set escalation rules and enforcement priorities.",
          "Decide what becomes a formal enforcement case."
        ]
      },
      {
        name: "In-house Legal",
        img: "assets/roles/inhouse-legal.jpg",
        work: [
          "Approve enforcement actions based on triage and risk analysis.",
          "Coordinate business input on tolerance vs escalation.",
          "Align messaging and legal posture."
        ]
      },
      {
        name: "Outside Counsel (Law Firm)",
        img: "assets/roles/outside-counsel.jpg",
        work: [
          "Assess conflict significance and recommend action options.",
          "Advise on opposition windows and cancellation strategies.",
          "Support local actions where needed."
        ]
      }
    ],
	
	


    outputs: [
      "Watch configuration (scope, variants, routing rules)",
      "Alert triage decisions with rationale (ignore / monitor / escalate)",
      "Escalation candidates for enforcement review",
      "Online misuse signals captured via Brand Monitor"
    ],

    next: "enforcement"
  },

  {
	key: "enforcement",
	idx: "07",
	icon: "⚖️",
	title: "Enforcement",
	desc: "Opposition, cancellation, takedowns, or litigation when conflicts arise.",
	products: ["Equinox Corporate", "Equinox Law", "Qthena", "Uz.ip"],
	overview: "Turn conflicts into structured cases: decide the action, manage evidence and deadlines, and close with a documented outcome.",

	steps: [
		"Open an enforcement case and capture the trigger (watch alert, online misuse, complaint).",
		"Assess facts: similarity, goods/services, territory, status, and procedural deadlines.",
		"Decide action: monitor, contact/settle, oppose, cancel, takedown, or litigate.",
		"Non-use scenario (if raised): assess use status and collect proof-of-use for defence or counter-attack.",
		"Centralise documents in Uz.ip (user-provided docs + structured case data) and preserve online evidence when needed.",
		"Draft positions with Qthena guidance, file/execute actions, and track the case to closure in Equinox."
	],

	roles: [
		{
		name: "Marketing / Brand",
		img: "assets/roles/marketing.jpg",
		work: [
			"Provide impact context (channels, markets, reputational risk).",
			"Share examples of consumer confusion and misuse patterns.",
			"Support the business decision: tolerate, negotiate, or escalate."
		]
		},
		{
		name: "Paralegal",
		img: "assets/roles/paralegal.jpg",
		work: [
			"Open and maintain the case record in Equinox (tasks, deadlines, correspondence).",
			"Collect and organise evidence in Uz.ip; request missing documents from the business.",
			"If needed, schedule website captures and classify retrieved pages for the file.",
			"For non-use challenges, build the proof-of-use pack (timeline + supporting documents)."
		]
		},
		{
		name: "IP Manager",
		img: "assets/roles/ip-manager.jpg",
		work: [
			"Choose the response path and prioritise based on portfolio risk and markets.",
			"Align strategy across jurisdictions and approve budget/effort.",
			"Decide whether to narrow scope, settle, enforce, or counter-attack."
		]
		},
		{
		name: "In-house Legal",
		img: "assets/roles/inhouse-legal.jpg",
		work: [
			"Approve legal posture and settlement terms; manage risk exposure.",
			"Escalate to litigation when required and align internal stakeholders.",
			"Validate arguments and key submissions (especially high-stakes matters)."
		]
		},
		{
		name: "Outside Counsel (Law Firm)",
		img: "assets/roles/outside-counsel.jpg",
		work: [
			"Advise on likelihood of success and recommended procedure (opposition/cancellation/litigation).",
			"Draft and file actions; handle hearings/briefing where applicable.",
			"For non-use matters, assess vulnerability and prepare defence or revocation filings.",
			"Review evidence centrally in Uz.ip with the team."
		]
		}
	],

	outputs: [
		"Case record in Equinox (issue, action path, deadlines, status)",
		"Evidence pack in Uz.ip (documents + preserved online captures where relevant)",
		"Action executed (opposition / cancellation / takedown / litigation step, as applicable)",
		"Outcome recorded (settlement, coexistence, decision, closure) + next steps"
	],

	next: "maintenance"
	},


  {
    key: "maintenance",
    idx: "08",
    icon: "🔁",
    title: "Maintenance",
    desc: "Renewals and portfolio changes over time.",
    products: ["Renewals Services", "Recordals Services"],
    overview: "Renew rights on time and record official changes (ownership/merger/assignment) to keep portfolio data accurate.",

    steps: [
      "Maintain a clear renewal calendar and confirm which rights to renew vs drop.",
      "Trigger renewals through Questel renewal services with correct scope and timing.",
      "When changes occur (address, name, ownership, merger/acquisition), prepare recordal packages.",
      "Execute recordals via Questel recordals services to update official registers.",
      "Update portfolio records so reporting, enforcement, and ownership chain remain accurate."
    ],

    roles: [
      {
        name: "Marketing / Brand",
        img: "assets/roles/marketing.jpg",
        work: [
          "Confirm ongoing brand importance per market and product line.",
          "Provide notice of rebrands or product retirement impacting scope.",
          "Share upcoming launches that may require new filings."
        ]
      },
      {
        name: "Paralegal",
        img: "assets/roles/paralegal.jpg",
        work: [
          "Manage renewal schedules and initiate renewal instructions.",
          "Prepare recordal inputs for address/name/ownership changes.",
          "Keep portfolio records current and auditable."
        ]
      },
      {
        name: "IP Manager",
        img: "assets/roles/ip-manager.jpg",
        work: [
          "Decide renew vs drop based on cost/value and strategy.",
          "Approve recordals linked to corporate events (M&A, assignments).",
          "Confirm portfolio structure and reporting accuracy post-change."
        ]
      },
      {
        name: "In-house Legal",
        img: "assets/roles/inhouse-legal.jpg",
        work: [
          "Approve corporate event documentation and legal positions.",
          "Validate ownership chain accuracy post-transaction.",
          "Coordinate internal governance and approvals."
        ]
      },
      {
        name: "Outside Counsel (Law Firm)",
        img: "assets/roles/outside-counsel.jpg",
        work: [
          "Advise on local renewal/recordal requirements when complex.",
          "Support filings requiring notarisation/legalisation or local formalities."
        ]
      }
    ],

    outputs: [
      "Renewals filed and confirmed",
      "Recordals completed (official registers updated)",
      "Portfolio data and ownership chain kept accurate",
      "Ongoing maintenance calendar and decision log"
    ],

    next: null
  }
];
