export const nav = [
  { label: "Who we are", href: "/#who-we-are" },
  { label: "Who we work with", href: "/#who-we-work-with" },
  { label: "Founder", href: "/#founder" },
];

export const hero = {
  eyebrow: "CLIMATE | ACTUARIAL | DATA | INCLUSION",
  lines: [
    { text: "Risk intelligence.", tone: "light" },
    { text: "Inclusive protection.", tone: "sage" },
    { text: "Resilient growth.", tone: "brass" },
  ],
  body: "CADIIS delivers climate, actuarial, data and inclusive insurance solutions for institutions building resilience across Africa and beyond.",
  tag: "COMPANY PROFILE",
  // Swap these two files in public/images to change the hero collage.
  collage: [
    { src: "/images/scenes/agriculture-scene.webp", alt: "Wheat field in warm evening light" },
    { src: "/images/scenes/livestock-scene.webp", alt: "Cattle crossing a sunlit pasture" },
  ],
};

export const whoWeAre = {
  kicker: "WHO WE ARE",
  heading: "A specialist advisory firm built for climate risk, inclusion and resilience.",
  body: "CADIIS helps insurers, governments, donors, agribusinesses and delivery partners turn complex risk into practical solutions. We combine actuarial discipline, data intelligence, geospatial analysis and market development to design protection systems that work in the real world.",
  callout: {
    heading: "We do not treat insurance as a standalone product.",
    body: "We connect analytics, product design, operations, distribution and payout readiness so protection reaches people when it matters.",
  },
  pillars: [
    {
      title: "Evidence first",
      body: "Data, climate, yield, exposure, vulnerability, pricing and customer behavior.",
      icon: "/images/icons/evidence-first.png",
    },
    {
      title: "Built for use",
      body: "Designed for actual users, operational realities and decision-making.",
      icon: "/images/icons/built-for-use.png",
    },
    {
      title: "Africa-grounded",
      body: "Rooted in African markets while applying global technical standards.",
      icon: "/images/icons/africa-grounded.png",
    },
    {
      title: "End-to-end",
      body: "From feasibility and prototype through operationalization, monitoring and scale-up.",
      icon: "/images/icons/end-to-end.png",
    },
  ],
};

export const whatWeDo = {
  kicker: "WHAT WE DO",
  heading: "From risk insight to implementation at scale.",
  body: "Our service lines help institutions move from analysis to action with practical tools, systems and partnerships.",
  items: [
    {
      id: "actuarial",
      title: "Actuarial & insurance analytics",
      body: "Product design, pricing, reserving, portfolio review, basis-risk analysis and technical monitoring.",
    },
    {
      id: "gis",
      title: "GIS, remote sensing & Earth observation",
      body: "Climate, exposure, vegetation and hazard mapping, spatial analytics and geospatial monitoring.",
    },
    {
      id: "derisking",
      title: "Climate de-risking & resilience finance",
      body: "Layered-risk strategies, early warning integration, shock-responsive systems and resilience planning.",
    },
    {
      id: "inclusive",
      title: "Inclusive insurance & market development",
      body: "Feasibility studies, distribution pathways, customer value propositions and operational readiness.",
    },
    {
      id: "product",
      title: "Product design & technical documentation",
      body: "Index formulation, technical notes, policy rules, calibration and independent technical assurance.",
    },
    {
      id: "capacity",
      title: "Capacity development & technical assistance",
      body: "Training, institutional strengthening, stakeholder learning and embedding quality implementation practice.",
    },
  ],
};

export const serviceDetails = [
  {
    id: "actuarial",
    kicker: "ACTUARIAL & INSURANCE",
    heading: "Actuarial rigor, translated into workable products.",
    intro:
      "The heart of climate and agricultural insurance is not abstract concept notes. It is building products that are technically defensible, commercially viable, operationally executable and understandable to customers.",
    image: "/images/chart-resilience.webp",
    imageAlt: "Stacks of coins with small ladders",
    imageLabel: "Resilience finance",
    checklist: [
      "Design trigger calibration and basis-risk assessment using historical, satellite and operational data.",
      "Perform pricing, loss-cost modelling, scenario analysis and premium adequacy testing.",
      "Structure index solutions, reinsurance support and monitoring frameworks.",
      "Develop policy wording, product notes, rules files and technical controls.",
      "Review portfolios, reserve approaches and performance metrics.",
      "Strengthen governance around product quality, validation and reporting.",
    ],
    outcome: {
      heading: "What this means for clients",
      body: "Sharper decisions on what risk is covered, whether the design is fit for purpose, whether the product can sustain itself, and whether payouts can happen quickly and transparently.",
    },
    theme: "dark",
  },
  {
    id: "gis",
    kicker: "GIS & EARTH OBSERVATION",
    heading: "Spatial intelligence for decisions that cannot wait.",
    intro:
      "CADIIS uses GIS, remote sensing and Earth observation to make climate-risk programmes more measurable, timely and scalable. We turn complex spatial datasets into evidence that insurers, governments, agribusinesses and funders can act on.",
    image: "/images/satellite-grid.webp",
    imageAlt: "A satellite above cloud-covered Earth",
    imageLabel: "GIS and Earth observation",
    steps: [
      { n: "1", title: "Observe", body: "Rainfall, vegetation, exposure, soils, hazards and livelihood indicators." },
      { n: "2", title: "Interpret", body: "Spatial analysis, anomaly detection, vulnerability profiling and verification." },
      { n: "3", title: "Decide", body: "Underwriting, trigger setting, monitoring, early action and verification." },
    ],
    focus: [
      { title: "Agriculture", body: "Crop condition monitoring, yield estimation, weather and vegetation indices, area characterization.", image: "/images/scenes/agriculture-scene.webp", alt: "Wheat field in warm evening light" },
      { title: "Livestock", body: "Rangeland monitoring, forage availability, drought impact analysis and herd-risk intelligence.", image: "/images/scenes/livestock-scene.webp", alt: "Cattle crossing a sunlit pasture" },
      { title: "Climate finance", body: "Exposure mapping, resilience targeting, disaster-risk financing and programme monitoring.", image: "/images/scenes/climate-finance-scene.webp", alt: "Climate finance graphic with a seedling and stacked coins" },
    ],
    theme: "light",
  },
  {
    id: "derisking",
    kicker: "CLIMATE DE-RISKING",
    heading: "Climate de-risking is a system, not a single instrument.",
    intro:
      "Insurance is one layer of protection. CADIIS helps clients combine risk analytics, early warning, adaptation, financial instruments and public support so households and businesses are less exposed before a shock — and recover faster after one.",
    layers: [
      { n: "1", title: "Reduce risk", body: "Climate-smart practices, risk-sensitive planning, advisory and preparedness." },
      { n: "2", title: "Retain manageable risk", body: "Savings, contingency planning, input packages and enterprise risk management." },
      { n: "3", title: "Transfer severe risk", body: "Insurance, reinsurance, catastrophe and disaster-risk financing structures." },
      { n: "4", title: "Respond and recover", body: "Early action, rapid payouts, social protection linkages and recovery finance." },
    ],
    outcome: {
      heading: "The outcome: better use of scarce resilience capital.",
      body: "We help clients identify where a subsidy, grant, insurance solution or public financing mechanism creates the greatest incremental value.",
    },
    theme: "dark",
  },
  {
    id: "inclusive",
    kicker: "INCLUSIVE INSURANCE",
    heading: "Designing protection people can access, understand and use.",
    intro:
      "A technically sound product still fails if distribution is weak, customer value is unclear or payout delivery breaks down. CADIIS works across the full delivery chain to build inclusive insurance markets that can endure beyond a pilot.",
    grid: [
      { title: "Market diagnosis", body: "Demand, supply, regulation, distribution and institutional roles.", icon: "/images/icons/market-diagnosis.png" },
      { title: "Business model design", body: "Partnership structures, target segments, channels and operating models.", icon: "/images/icons/business-model.png" },
      { title: "Customer value proposition", body: "Simple product language, contextual services and engagement pathways.", icon: "/images/icons/customer-value.png" },
      { title: "Operationalization & payout readiness", body: "Digital enrolment, premium collection, support processes, payout operations and reporting.", icon: "/images/icons/payout-readiness.png" },
    ],
    theme: "light",
  },
  {
    id: "product",
    kicker: "PRODUCT ARCHITECTURE",
    heading: "From concept note to technical control and delivery discipline.",
    intro:
      "CADIIS helps translate feasibility findings into product architecture, rules files, premium logic, monitoring protocols and implementation documents that underwriters, delivery teams and funders can actually use.",
    grid: [
      { title: "Index formulation", body: "Define the insured peril, proxy variable, trigger logic, exit thresholds and payout curve.", icon: "/images/icons/index-formulation.png" },
      { title: "Calibration and validation", body: "Test historical performance, basis risk, false positives, false negatives and payout adequacy.", icon: "/images/icons/calibration.png" },
      { title: "Documentation", body: "Product notes, policy wording, technical manuals, operational workflows and governance controls.", icon: "/images/icons/documentation.png" },
      { title: "Calculating agent services", body: "Independent data processing, index calculation, reporting and payout recommendation support.", icon: "/images/icons/calculating-agent.png" },
    ],
    image: "/images/chart-climate.webp",
    imageAlt: "Power station and transmission lines beyond a field",
    imageLabel: "Climate risk intelligence",
    theme: "dark",
  },
  {
    id: "capacity",
    kicker: "CAPACITY DEVELOPMENT",
    heading: "Technical assistance that stays in the institution.",
    intro:
      "CADIIS supports training, institutional strengthening, stakeholder learning and the embedding of quality implementation practice.",
    grid: [
      {
        title: "Capacity and operational readiness",
        body: "Training, technical oversight, workflow design, dashboard inputs and governance structures.",
        icon: "/images/icons/capacity.png",
      },
      {
        title: "Stakeholder learning",
        body: "Training and capacity building for the institutions that have to run the work after the assignment.",
        icon: "/images/icons/built-for-use.png",
      },
    ],
    theme: "light",
  },
];

export const workstreams = {
  kicker: "REPRESENTATIVE WORKSTREAMS",
  heading: "Where CADIIS creates value.",
  body: "Representative founder-led and supported workstreams relevant to CADIIS service lines. Specific mandates can be detailed separately based on approval and client confidentiality.",
  items: [
    {
      title: "Feasibility and product structuring",
      body: "Diagnostic studies, business-case analysis, product architecture and implementation options for climate and agricultural risk programmes.",
      icon: "/images/icons/feasibility.png",
    },
    {
      title: "Crop and livestock index insurance",
      body: "Index formulation, trigger design, satellite and weather data integration, calibration and validation.",
      icon: "/images/icons/crop-livestock-index.png",
    },
    {
      title: "Insurance market strengthening",
      body: "Support to insurers, intermediaries, supervisors and market actors on product readiness and sector coordination.",
      icon: "/images/icons/market-strengthening.png",
    },
    {
      title: "Geospatial risk analytics",
      body: "Hazard mapping, exposure profiling and geospatial monitoring for underwriting, targeting and portfolio management.",
      icon: "/images/icons/geospatial-analytics.png",
    },
    {
      title: "Capacity and operational readiness",
      body: "Training, technical oversight, workflow design, dashboard inputs and governance structures.",
      icon: "/images/icons/capacity.png",
    },
    {
      title: "Climate finance and resilience strategies",
      body: "De-risking pathways, layered-risk approaches, subsidy architecture and public-private resilience frameworks.",
      icon: "/images/icons/climate-finance-strategy.png",
    },
  ],
};

export const whoWeWorkWith = {
  kicker: "WHO WE WORK WITH",
  heading: "Built for institutions that need evidence, discipline and delivery.",
  body: "CADIIS works where climate risk, financial resilience and implementation realities meet. Our role is to help institutions make technically sound decisions that survive contact with the field.",
  items: [
    { title: "Insurers and reinsurers", body: "Product quality, pricing, portfolio review, reinsurance support and climate-sensitive business lines.", icon: "/images/icons/insurers.png" },
    { title: "Governments and public programmes", body: "Resilience strategies, social protection linkages, subsidy design and implementation readiness.", icon: "/images/icons/governments.png" },
    { title: "Donors and grant facilities", body: "Technical due diligence, committee papers, grant facility design and partner monitoring.", icon: "/images/icons/donors.png" },
    { title: "Agribusinesses and financial institutions", body: "Risk transfer products, value-chain protection and embedded insurance opportunities.", icon: "/images/icons/agribusiness.png" },
    { title: "Technology and delivery partners", body: "Data workflows, operational tools, monitoring dashboards and payout systems.", icon: "/images/icons/tech-partners.png" },
    { title: "Supervisors and market actors", body: "Capacity building, product standards, market coordination and quality assurance.", icon: "/images/icons/supervisors.png" },
  ],
};

export const founder = {
  kicker: "FOUNDER & PRINCIPAL CONSULTANT",
  heading: "Technical depth, commercial perspective and field relevance.",
  name: "Lawrence Kenduiywa",
  role: "Founder & Principal Consultant",
  bio: "Lawrence Kenduiywa is an actuarial and business development specialist with experience in climate risk, inclusive insurance, agricultural insurance, product development, pricing, feasibility studies and resilience finance. His work spans advisory mandates involving livestock, crops, climate analytics, market development and technical structuring.",
  workWith: [
    "Insurers and reinsurers",
    "Governments and public programmes",
    "Donors, grant facilities and development partners",
    "Agribusinesses and financial institutions",
    "Technology and delivery partners",
  ],
  engage: [
    "Feasibility studies and diagnostics",
    "Product development and pricing",
    "Technical review and quality assurance",
    "Market strategy and operational readiness",
    "Training and capacity building",
  ],
};

export const contact = {
  heading: "Ready to build climate resilience that works in practice?",
  body: "CADIIS partners with institutions looking to turn climate-risk insight into practical, scalable protection and resilience solutions.",
  email: "info@cadiis.com",
  website: "https://www.cadiis.com",
  linkedin: "Lawrence Kenduiywa",
  details: [
    { label: "Website", value: "www.cadiis.com", href: "https://www.cadiis.com" },
    { label: "Email", value: "info@cadiis.com", href: "mailto:info@cadiis.com" },
    { label: "Location", value: "Nairobi, Kenya" },
    { label: "LinkedIn", value: "Lawrence Kenduiywa" },
  ],
  interests: [
    "Actuarial & insurance analytics",
    "GIS, remote sensing & Earth observation",
    "Climate de-risking & resilience finance",
    "Inclusive insurance & market development",
    "Product design & technical documentation",
    "Capacity development & technical assistance",
  ],
};

export const statement = {
  before: "Insurance is one layer.",
  emphasis: "Resilience is a system.",
};

export const proof = {
  kicker: "WHERE WE WORK",
  place: "Nairobi, Kenya",
  reach: "Africa-wide",
  body: "CADIIS is based in Nairobi and works with institutions building resilience across African markets.",
};

export const perspectives = {
  kicker: "PERSPECTIVES",
  heading: "How protection gets built.",
  body: "Three ways into the work, each leading to the service behind it.",
  items: [
    {
      title: "Insurance is one layer",
      body: "Protection holds when analytics, early warning, adaptation and payout readiness sit in the same system.",
      href: "/services/derisking",
      label: "Climate de-risking",
    },
    {
      title: "From observation to a decision",
      body: "Spatial data earns its place when it changes underwriting, triggers, monitoring or early action.",
      href: "/services/gis",
      label: "Earth observation",
    },
    {
      title: "A curve you can point at",
      body: "Index design is easier to discuss when the trigger, the exit and the payout shape are visible.",
      href: "/services/product",
      label: "Product architecture",
    },
  ],
};
