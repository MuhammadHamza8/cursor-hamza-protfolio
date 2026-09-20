export const profile = {
  name: 'Muhammad Hamza',
  role: 'Automation & Manual SQA Engineer',
  location: 'Islamabad, Pakistan · Open to remote',
  tagline:
    'I catch critical defects before production — with Selenium, Cypress, Playwright, and API suites wired into CI/CD.',
  summary:
    'Automation-focused QA engineer with 4 years of hands-on experience in web, mobile, and API testing. I design and execute automated suites with Selenium, Cypress, and Playwright, integrate them into CI/CD, and work Agile with distributed international teams. Defect management from test design through production release.',
  email: 'hamzaicp54@gmail.com',
  phone: '+92 303 985 4053',
  phoneHref: 'tel:+923039854053',
  linkedin: 'https://www.linkedin.com/in/MHamza-SQA',
  github: 'https://github.com/hamzaSqa847',
  resumePdf: '/Muhammad-Hamza-SQA.pdf',
  availability: 'Open to SQA / SDET / Automation Engineer roles',
}

export const metrics = [
  { value: '4', label: 'Years in QA', hint: 'Automation + manual, 2022–present' },
  { value: '3', label: 'Product companies', hint: 'Sweden · Switzerland · Pakistan' },
  { value: '4', label: 'Surfaces covered', hint: 'Web, mobile, API, AI chatbot' },
  { value: 'CI/CD', label: 'Tests in the pipeline', hint: 'UI + API suites on every deploy' },
]

export const skills = [
  {
    title: 'Automation',
    items: ['Selenium WebDriver', 'Cypress', 'Playwright', 'Reusable UI + API scripts'],
  },
  {
    title: 'API & performance',
    items: ['Postman collections', 'Newman in CI', 'JMeter', 'Request/response accuracy'],
  },
  {
    title: 'Test types',
    items: ['Regression & smoke', 'System & integration', 'Manual exploratory', 'Performance'],
  },
  {
    title: 'Delivery',
    items: ['Agile with distributed teams', 'JIRA + TestRail', 'GitHub / GitLab / Bitbucket', 'Azure DevOps · Docker'],
  },
]

export const tools = [
  'Selenium',
  'Cypress',
  'Playwright',
  'Postman',
  'Newman',
  'JMeter',
  'Python',
  'JavaScript',
  'Node.js',
  'CI/CD',
  'Docker',
  'GitHub',
  'GitLab',
  'Bitbucket',
  'Azure DevOps',
  'JIRA',
  'TestRail',
  'Trello',
  'Notion',
  'Asana',
  'SQL',
  'NoSQL',
]

export const cases = [
  {
    tag: '01 · Framework',
    title: 'Automation testing framework',
    problem:
      'Regression depended on manual passes across web and API flows, slowing releases and hiding repeat defects.',
    action:
      'Built reusable Playwright and Cypress scripts for UI and API testing, with structured reporting for defect analysis, then wired the suite into CI/CD.',
    result:
      'Recurring regression became a pipeline job instead of a calendar block — faster, more reliable deployments and earlier defect visibility.',
    stack: ['Playwright', 'Cypress', 'CI/CD', 'Reporting'],
  },
  {
    tag: '02 · Backend',
    title: 'API testing suite',
    problem:
      'Backend behavior was only checked through the UI, so request/response issues showed up late.',
    action:
      'Designed Postman collections to validate performance and response accuracy, then automated them with Newman so they run in CI/CD.',
    result:
      'API checks run on every pipeline — request/response accuracy is proven before the UI is even exercised.',
    stack: ['Postman', 'Newman', 'CI/CD'],
  },
  {
    tag: '03 · Product',
    title: 'Quality across web, mobile & AI chat',
    problem:
      'Digital Tolk shipped across web, mobile, and an AI chatbot — quality had to stay consistent on all three.',
    action:
      'Manual plus automated coverage for system, regression, API, and performance. Automated recurring regression and tracked cases for traceability.',
    result:
      'Critical defects reported before production. International Agile sprints stayed on-time with a shared definition of ready.',
    stack: ['Web', 'Mobile', 'AI chatbot', 'JIRA'],
  },
]

export const experience = [
  {
    role: 'Software QA Tester',
    company: 'Digital Tolk',
    place: 'Remote · Sweden-based',
    dates: 'Jul 2024 — Oct 2025',
    points: [
      'Manual and automated testing across web, mobile, and AI chatbot applications.',
      'Designed and executed cases for system, regression, API, and performance testing — better traceability and coverage.',
      'Automated recurring regression, reducing manual effort and shortening release cycles.',
      'Worked with distributed international teams in Agile sprints for release readiness.',
    ],
  },
  {
    role: 'Software QA Engineer',
    company: 'Cloud Mesh Solutions',
    place: 'Onsite, Islamabad · Swiss-based',
    dates: 'Nov 2022 — Jul 2024',
    points: [
      'Automation and manual testing for e-commerce platforms and mobile apps.',
      'Built and maintained Selenium and Cypress scripts, cutting regression cycle time.',
      'Partnered with developers and product owners to triage defects and raise product quality.',
    ],
  },
  {
    role: 'Software QA Engineer',
    company: 'QuellxCode Pvt Ltd',
    place: 'Onsite',
    dates: 'Apr 2022 — Sep 2022',
    points: [
      'Integration, system, and smoke testing for web and mobile against requirements.',
      'API validation in Postman — request/response accuracy and backend behavior.',
      'QA reports that surfaced critical defects before release.',
    ],
  },
]

export const process = [
  { step: '01', title: 'Design the cases', body: 'System, regression, smoke, API, and performance mapped to what the product actually does.' },
  { step: '02', title: 'Automate the repeats', body: 'Selenium, Cypress, or Playwright for journeys that should never be clicked by hand again.' },
  { step: '03', title: 'Put it in CI/CD', body: 'UI and Newman API suites on the pipeline so every deploy has evidence, not a gut feel.' },
  { step: '04', title: 'Ship with a report', body: 'Defects logged, triaged with developers, and closed before production — not after customers find them.' },
]

export const recruiterNotes = [
  'Hands-on automation: Selenium, Cypress, Playwright — not only test-case writing.',
  'API testing with Postman, Newman, and JMeter; suites run in CI/CD.',
  'Experience with Sweden- and Switzerland-based product teams, remote and onsite.',
  'Web, mobile, e-commerce, and AI chatbot quality in Agile sprints.',
]

export const education = [
  { title: 'MS Computer Science', meta: 'Muslim Youth University · In progress' },
  { title: 'BS Software Engineering', meta: 'Islamia College University · 2017 – 2021' },
]

export const certifications = [
  'Selenium WebDriver',
  'Cypress Automation',
  'SQL & NoSQL',
  'Python for Testing',
]

export const languages = ['English — Fluent', 'Urdu — Native', 'Pashto — Conversational']
