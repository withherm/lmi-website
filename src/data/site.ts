export interface Sector {
  slug: string; name: string; h1: string; lede: string;
  challenges: string[]; context: string; body: string[];
  programmes: string[];
}

export const SECTORS: Sector[] = [
  {
    slug: "corporate", name: "Corporate",
    h1: "Fix the handovers, not the people.",
    lede: "Most corporate delay lives in the gaps between teams. We train your people to see those gaps, measure them, and close them.",
    challenges: ["Handovers between teams add days to every cycle.", "Improvement work stalls the week after the workshop ends.", "Nobody agrees which number is the real one.", "Every function reports a different version of the same process."],
    context: "We work from your own process data, your escalation paths and the reporting your executives already read, so the project lands in language the business accepts.",
    body: [
      "Corporate improvement work usually fails for one of two reasons. Either it never gets past the workshop, because nobody was given the time to finish a project. Or it finishes and cannot be defended, because the numbers came from somewhere the finance team does not trust.",
      "We train against both. Participants bring a live problem their leadership already wants solved, and the credential is earned on a documented result rather than attendance.",
    ],
    programmes: ["lean-six-sigma-green-belt", "lean-practitioner", "ai-enabled-improvement-practitioner"],
  },
  {
    slug: "government", name: "Government",
    h1: "Improvement that survives a change of minister.",
    lede: "Public sector processes carry obligations a private one does not. We train inside those constraints rather than around them.",
    challenges: ["Policy changes faster than the process can absorb it.", "Demand keeps rising while headcount stays flat.", "Improvement has to survive a change of minister.", "Procurement and records rules shape what can actually change."],
    context: "We build around your procurement rules, records obligations and approval chains, and we design the change to hold through a machinery-of-government shift.",
    body: [
      "Departments and agencies do not get to redesign a process freely. Records obligations, procurement rules and approval chains are part of the process, not an obstacle to it, and an improvement that ignores them will be reversed.",
      "We teach the method with those constraints in the room from day one, and we scope projects that can finish inside a budget cycle rather than spanning three.",
    ],
    programmes: ["lean-six-sigma-green-belt", "lean-service-designer", "lean-executive-champion"],
  },
  {
    slug: "financial-services", name: "Financial Services",
    h1: "Make the control evidence a by-product of the work.",
    lede: "Controls and improvement usually pull against each other. Taught properly, the same project produces both.",
    challenges: ["Controls and improvement pull in opposite directions.", "Remediation work crowds out everything else.", "Evidence has to satisfy a regulator, not just a manager.", "Process change needs a paper trail before it needs a result."],
    context: "We build the control evidence into the project as it runs, not as a write-up afterwards, so the improvement and the obligation are the same piece of work.",
    body: [
      "In banking, insurance and superannuation, the constraint is rarely a lack of ideas. It is that every change has to be evidenced to a standard a regulator will accept, and that evidence is usually assembled after the fact by someone who was not there.",
      "We teach control plans, measurement and documentation as part of the improvement rather than a report about it, so the project closes with the evidence already built.",
    ],
    programmes: ["lean-six-sigma-green-belt", "lean-six-sigma-black-belt", "lean-business-analyst"],
  },
  {
    slug: "healthcare", name: "Healthcare",
    h1: "Give the time back to care.",
    lede: "Clinical time lost to administration is the waste that matters most. We train on that, using your own flow and incident data.",
    challenges: ["Clinical time disappears into administration.", "Improvement competes directly with patient safety work.", "Data sits in systems that were never meant to talk.", "Rosters make it hard to get a cohort in one room."],
    context: "We protect care time in how the training is scheduled, and we use your incident, audit and flow data so the projects are about patients rather than paperwork.",
    body: [
      "Health services do not lack improvement appetite. They lack uninterrupted hours. So we schedule delivery around rosters, run shorter blocks where needed, and pick projects that a clinician can progress in the time they actually have.",
      "The projects use your own patient flow, incident and audit data, which means the result is legible to a clinical governance committee rather than only to an improvement team.",
    ],
    programmes: ["lean-six-sigma-yellow-belt", "lean-six-sigma-green-belt", "lean-service-designer"],
  },
];

export interface ResourceHub {
  slug: string; name: string; kind: string; h1: string; lede: string;
  status: "In build" | "Planned";
  items: { h: string; b: string; meta: string }[];
  gating: string;
}

export const RESOURCE_HUBS: ResourceHub[] = [
  {
    slug: "tools", name: "Tools", kind: "Interactive tool", status: "In build",
    h1: "Put the method against a real number.",
    lede: "Calculators and selectors that do a job on a live problem. No sign-up, no email, no watermark.",
    gating: "Ungated. The AI Readiness Check emails you the result, which is the one exception.",
    items: [
      { h: "Belt Level Selector", b: "Six questions on the work your team does and the decisions they have to defend, then a straight answer on which belt fits.", meta: "Tool, 3 min" },
      { h: "Sample size calculator", b: "How many observations you actually need, from margin of error, confidence and population.", meta: "Calculator" },
      { h: "Process sigma calculator", b: "DPMO and continuous data, both tabs, with the 1.5 sigma shift applied where it belongs.", meta: "Calculator" },
      { h: "Catapult experiment simulator", b: "Run a designed experiment, watch the arc, build the factorial. The teaching tool from the classroom, on the web.", meta: "Simulator" },
      { h: "Hypothesis test selector", b: "Which test, for which data, answering which question. A decision tree rather than a textbook.", meta: "Selector" },
      { h: "Process capability calculator", b: "Cp, Cpk, Pp and Ppk from your spec limits and your data.", meta: "Calculator" },
      { h: "Cost of poor quality calculator", b: "What the defect is costing, and what closing it would return. The number that gets a project approved.", meta: "Calculator" },
      { h: "Lean and AI Readiness Check", b: "Where your organisation actually sits on applying AI to improvement work.", meta: "Assessment" },
    ],
  },
  {
    slug: "templates", name: "Templates", kind: "Template", status: "In build",
    h1: "The templates we teach with, free to reuse.",
    lede: "The working documents from our own programmes. Use them on your project whether or not you ever train with us.",
    gating: "Individual templates are ungated. The bundled toolkits ask for an email.",
    items: [
      { h: "DMAIC project toolkit", b: "Charter, SIPOC, A3, fishbone, five whys, FMEA, control plan, value stream map, RACI, gauge R&R and a DOE planner. Everything a Green Belt project needs.", meta: "Toolkit, bundled" },
      { h: "Lean Service Design toolkit", b: "Service blueprint, journey map, ECRS and a waste walk, built for front-stage and back-stage work.", meta: "Toolkit, bundled" },
      { h: "Lean Business Analysis toolkit", b: "Requirements, process map, stakeholder and RACI, and a benefits map.", meta: "Toolkit, bundled" },
      { h: "Project charter", b: "The single page that stops a project sprawling. Ungated.", meta: "Single template" },
      { h: "Control plan", b: "Every control traced to a ranked risk, with an owner against each one.", meta: "Single template" },
    ],
  },
  {
    slug: "guides", name: "Guides", kind: "Guide", status: "In build",
    h1: "The short version, written to be scanned.",
    lede: "Plain-English explainers and print-quality cheat sheets, using the same teaching diagrams we use in the room.",
    gating: "Ungated. Print-quality posters may ask for an email.",
    items: [
      { h: "Lean Six Sigma 101", b: "What it is, what it is not, and whether it fits the problem you have.", meta: "Guide, 8 min read" },
      { h: "What is DMAIC", b: "The five phases, what each one is actually for, and where projects usually stall.", meta: "Guide, 6 min read" },
      { h: "What is a SIPOC", b: "The one-page scope tool, and how to build one that survives contact with a sponsor.", meta: "Guide, 5 min read" },
      { h: "The belt pathway", b: "White through Master Black, what each level can be trusted to do, and how to choose.", meta: "Guide, 7 min read" },
      { h: "The eight wastes poster", b: "DOWNTIME on one printable page, drawn rather than listed.", meta: "Cheat sheet" },
      { h: "Sigma conversion table", b: "DPMO to sigma, with and without the shift, on one page.", meta: "Cheat sheet" },
    ],
  },
  {
    slug: "glossary", name: "Glossary", kind: "Definition", status: "In build",
    h1: "Every term, in plain words.",
    lede: "Most Lean and Six Sigma jargon is doing no work. Here is what each term means and, more usefully, whether you need it.",
    gating: "Ungated, always.",
    items: [
      { h: "A to E", b: "A3, andon, attribute data, capability, control chart, control plan, cycle time, defect, DMAIC, DPMO.", meta: "Definitions" },
      { h: "F to M", b: "FMEA, gauge R&R, heijunka, hypothesis test, jidoka, kaizen, kanban, lead time, muda.", meta: "Definitions" },
      { h: "N to S", b: "Non-value-add, OEE, PDCA, poka-yoke, process capability, RACI, SIPOC, standard work, SPC.", meta: "Definitions" },
      { h: "T to Z", b: "Takt time, TIMWOOD, value stream, variation, visual management, voice of the customer, waste.", meta: "Definitions" },
    ],
  },
  {
    slug: "knowledge-base", name: "Knowledge base", kind: "Answer", status: "In build",
    h1: "The questions people actually ask.",
    lede: "Short answers to the things we get asked before every enrolment, so you do not have to email us to find out.",
    gating: "Ungated, always.",
    items: [
      { h: "How does certification work?", b: "Who assesses what, how long it takes, and what happens if you do not clear a gate.", meta: "Answer" },
      { h: "Which belt do I need?", b: "Matched to the decisions you have to make and defend, not to your job title.", meta: "Answer" },
      { h: "Is the credential recognised?", b: "Who issues it, who verifies it, and what an employer sees when they check.", meta: "Answer" },
      { h: "Online or in-house?", b: "What actually differs, and when each one is the wrong choice.", meta: "Answer" },
      { h: "Do I need statistics?", b: "No. What we teach instead, and what AI does with the arithmetic.", meta: "Answer" },
      { h: "What does the project involve?", b: "Scope, timeframe, evidence, and how much of your week it really takes.", meta: "Answer" },
    ],
  },
  {
    slug: "reports", name: "Reports", kind: "Report", status: "Planned",
    h1: "Research, once we have the data to justify it.",
    lede: "We would rather publish nothing than publish a survey of forty people dressed up as a market study.",
    gating: "Email-gated when published.",
    items: [
      { h: "Lean and AI in practice", b: "What organisations are actually getting from applying AI to improvement work, drawn from delivery rather than from a vendor survey.", meta: "Report, planned" },
      { h: "State of Lean and AI in ANZ", b: "An annual read on the region, once there is enough data behind it to be worth reading.", meta: "Report, aspirational" },
    ],
  },
];
