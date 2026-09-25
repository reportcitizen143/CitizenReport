/**
 * AUTHORITIES  —  who receives the complaint
 * ------------------------------------------
 * Kept separate from issues on purpose: an office's email address changes
 * far more often than the issue itself. Change it here once and every
 * issue pointing at that authority is fixed instantly.
 *
 * HOW TO ADD ONE
 *   1. Copy a block below.
 *   2. Give it a new `id` (any unique text, e.g. "AUTH-004").
 *   3. Use that id as `authorityId` inside an issue in issues.js.
 *
 * FIELDS
 *   id       required  unique id, referenced by issues
 *   name     required  office name, shown to the citizen  { te, en }
 *   email    required  main recipient of the complaint
 *   cc       optional  array of extra addresses kept in the loop
 *   office   optional  address / area it covers            { te, en }
 *   phone    optional  public phone number, shown as a tap-to-call link
 */
export const authorities = [
  {
    id: 'AUTH-001',
    name: { te: 'పంచాయతీ కార్యాలయం', en: 'Gram Panchayat Office' },
    email: 'panchayat@example.gov.in',
    cc: [],
    office: { te: 'ఎయినంపూడి గ్రామ పంచాయతీ', en: 'Ainampudi Gram Panchayat' },
    phone: null,
  },
  {
    id: 'AUTH-002',
    name: { te: 'మున్సిపల్ కమిషనర్', en: 'Municipal Commissioner' },
    email: 'commissioner@example.gov.in',
    cc: [],
    office: { te: 'మున్సిపల్ కార్యాలయం', en: 'Municipal Office' },
    phone: null,
  },
  {
    id: 'AUTH-003',
    name: { te: 'విద్యుత్ శాఖ (APEPDCL)', en: 'Electricity Department (APEPDCL)' },
    email: 'ae.section@example.gov.in',
    cc: [],
    office: { te: 'సెక్షన్ కార్యాలయం', en: 'Section Office' },
    phone: null,
  },
  {
    id: 'AUTH-004',
    name: { te: 'రోడ్లు & భవనాల శాఖ (R&B)', en: 'Roads & Buildings Department' },
    email: 'rnb.division@example.gov.in',
    cc: [],
    office: { te: 'డివిజన్ కార్యాలయం', en: 'Division Office' },
    phone: null,
  },
]
