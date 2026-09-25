/**
 * UI STRINGS  —  every fixed word in the interface
 * ------------------------------------------------
 * Two languages, side by side, so nothing can drift out of sync.
 * Adding a third language later = add a third key to each entry
 * and add it to `languages` below.
 *
 * Rule for the Telugu: write it the way you would say it out loud to a
 * neighbour. No official words, no English words in Telugu letters
 * unless everyone already uses them.
 */
export const languages = [
  { code: 'te', label: 'తెలుగు' },
  { code: 'en', label: 'English' },
]

export const strings = {
  // ---------- navigation ----------
  navHome: { te: 'హోమ్', en: 'Home' },
  navIssues: { te: 'సమస్యలు', en: 'Issues' },
  navAbout: { te: 'మా గురించి', en: 'About' },
  back: { te: 'వెనక్కి', en: 'Back' },

  // ---------- home ----------
  homeFeature1: {
    te: 'ఒక క్లిక్‌తో అధికారులకు మెయిల్',
    en: 'One tap — your email to the officials is ready',
  },
  homeFeature2: { te: 'ప్రతి సమస్యకు ఫోటోలు, వీడియోలు', en: 'Photos and videos with every issue' },
  homeFeature3: { te: 'మన ఊరి మంచి కోసం అందరం కలిసి', en: 'Together, for our village' },
  homeCta: { te: 'సమస్యలు చూడండి', en: 'See the issues' },
  homeHowTitle: { te: 'ఇది ఎలా పనిచేస్తుంది?', en: 'How does this work?' },
  homeStep1: { te: 'సమస్యను ఎంచుకోండి', en: 'Pick an issue' },
  homeStep2: { te: 'మెయిల్ బటన్ నొక్కండి', en: 'Tap the email button' },
  homeStep3: { te: 'మీ మెయిల్ యాప్‌లో పంపండి', en: 'Send it from your email app' },

  // ---------- issues list ----------
  issuesTitle: { te: 'మన ఊరి సమస్యలు', en: 'Issues in our area' },
  filterAll: { te: 'అన్నీ', en: 'All' },
  issuesEmpty: { te: 'ఈ విభాగంలో ఇప్పుడు సమస్యలు లేవు.', en: 'No issues in this group right now.' },
  issuesCount: { te: 'సమస్యలు', en: 'issues' },

  // ---------- issue details ----------
  sendEmailCta: { te: 'అధికారులకు మెయిల్ పంపండి', en: 'Send email to the officials' },
  sendEmailHelp: {
    te: 'ఒక క్లిక్‌తో మీ మెయిల్ సిద్ధం అవుతుంది. మీరు చదివి, నచ్చితేనే పంపండి.',
    en: 'One tap prepares the email. Read it, and send it only if you want to.',
  },
  previewEmail: { te: 'మెయిల్ ఏమి రాసి ఉంటుందో చూడండి', en: 'See what the email says' },
  hidePreview: { te: 'మూసివేయండి', en: 'Close' },
  copyEmail: { te: 'మెయిల్ కాపీ చేయండి', en: 'Copy the email' },
  copied: { te: 'కాపీ అయ్యింది', en: 'Copied' },
  emailLongHint: {
    te: 'మెయిల్ యాప్‌లో సందేశం పూర్తిగా రాకపోతే, కింద ఉన్న బటన్‌తో కాపీ చేసి అతికించండి.',
    en: 'If your email app shows the message cut short, copy it with the button below and paste it in.',
  },
  emailTo: { te: 'ఎవరికి', en: 'To' },
  emailSubject: { te: 'విషయం', en: 'Subject' },
  evidenceTitle: { te: 'సాక్ష్యాలు (ఫోటోలు / వీడియోలు)', en: 'Evidence (photos / videos)' },
  evidencePhoto: { te: 'ఫోటో చూడండి', en: 'View photo' },
  evidenceYoutube: { te: 'వీడియో చూడండి', en: 'Watch video' },
  evidenceInstagram: { te: 'ఇన్‌స్టాగ్రామ్', en: 'Instagram' },
  evidenceTwitter: { te: 'X లో చూడండి', en: 'View on X' },
  authorityTitle: { te: 'సంబంధిత అధికారి', en: 'Concerned authority' },
  reportedOn: { te: 'నివేదించిన తేదీ', en: 'Reported on' },
  resolvedOn: { te: 'పరిష్కరించిన తేదీ', en: 'Resolved on' },
  resolutionTitle: { te: 'ఇప్పుడు పరిష్కారం అయ్యింది', en: 'This has been resolved' },
  beforeLabel: { te: 'ముందు', en: 'Before' },
  afterLabel: { te: 'తరువాత', en: 'After' },
  shareIssue: { te: 'వాట్సాప్‌లో పంచుకోండి', en: 'Share on WhatsApp' },

  // ---------- status legend ----------
  statusLegendTitle: { te: 'సమస్య స్థితి', en: 'Issue status' },

  // ---------- about ----------
  aboutTitle: { te: 'మా గురించి', en: 'About Citizen Report' },
  aboutBody: {
    te: 'Citizen Report అనేది మన ఊరి సమస్యలను ఒకచోట చూపించి, సంబంధిత అధికారికి ఫిర్యాదు మెయిల్‌ను సిద్ధం చేసే ఒక చిన్న వెబ్‌సైట్. మీరు చేయవలసింది ఒక్కటే — సమస్యను ఎంచుకొని, మెయిల్ బటన్ నొక్కడం.',
    en: 'Citizen Report is a small website that collects documented local issues in one place and prepares a complaint email to the right office. All you do is pick an issue and tap the email button.',
  },
  aboutPromiseTitle: { te: 'మేము ఏమి చేస్తాము, ఏమి చేయము', en: 'What we do, and what we do not' },
  aboutDo1: { te: 'సమస్యను అందరికీ కనిపించేలా చేస్తాము', en: 'We make the issue visible' },
  aboutDo2: {
    te: 'సరైన అధికారికి మెయిల్‌ను సిద్ధం చేస్తాము',
    en: 'We prepare the email for the right authority',
  },
  aboutDo3: { te: 'ఏమి జరిగిందో నమోదు చేస్తాము', en: 'We record what happened next' },
  aboutDont1: {
    te: 'మీ అనుమతి లేకుండా మేము ఏ మెయిల్‌నూ పంపము. మీరే పంపుతారు.',
    en: 'We never send an email for you. You press Send yourself.',
  },
  aboutDont2: {
    te: 'సమస్య పరిష్కారం అధికారుల చేతిలో ఉంటుంది — దాన్ని మేము హామీ ఇవ్వలేము.',
    en: 'The fix is in the hands of the authorities — we cannot promise it.',
  },
  aboutNoAccount: {
    te: 'లాగిన్ అవసరం లేదు. మీ వివరాలు మేము సేకరించము.',
    en: 'No login needed. We collect nothing about you.',
  },

  // ---------- generic ----------
  notFoundTitle: { te: 'ఈ పేజీ దొరకలేదు', en: 'This page was not found' },
  notFoundCta: { te: 'హోమ్ పేజీకి వెళ్లండి', en: 'Go to the home page' },
  languageLabel: { te: 'భాష', en: 'Language' },
  footerNote: {
    te: 'ఈ వెబ్‌సైట్ మెయిల్‌ను సిద్ధం చేస్తుంది. పంపే నిర్ణయం పూర్తిగా మీదే.',
    en: 'This site only prepares the email. The decision to send it is entirely yours.',
  },
}
