/**
 * ISSUES  —  your content database
 * --------------------------------
 * This is the ONLY file you touch to publish a new issue or to mark one
 * resolved. The React components never need to change.
 *
 * HOW TO ADD A NEW ISSUE
 *   1. Copy the whole `{ ... }` block of any issue below.
 *   2. Paste it at the TOP of the list (newest first).
 *   3. Give it a new `id`, change the text, point `authorityId` at the
 *      right office from authorities.js, and save.
 *
 * HOW TO MARK AN ISSUE RESOLVED
 *   Change  status: 'pending'  to  status: 'resolved'
 *   and (optionally) add a `resolution` block with the after-photo.
 *
 * FIELDS
 *   id            required  unique, e.g. 'CR-005'. Used in the page URL.
 *   title         required  short — it must fit on one phone line  { te, en }
 *   location      required  where it is, in plain words            { te, en }
 *   description   required  2–3 plain sentences, no jargon         { te, en }
 *   status        required  a key from statuses.js: 'pending' | 'in-progress' | 'resolved'
 *   reportedDate  required  'YYYY-MM-DD'
 *   authorityId   required  an `id` from authorities.js
 *   evidence      optional  image + links to your posts (any field may be null)
 *   resolution    optional  only once it is fixed
 *
 * Any text field may be written as { te: '...', en: '...' } or as a plain
 * string. A plain string is shown in both languages.
 */
export const issues = [
  {
    id: 'CR-001',
    title: {
      te: 'డ్రైనేజ్ నీరు రోడ్డు పైకి',
      en: 'Drainage water overflowing onto the road',
    },
    location: {
      te: 'ఎయినంపూడి ప్రధాన రోడ్డు',
      en: 'Main Road, Ainampudi',
    },
    description: {
      te: 'డ్రైనేజ్ నీరు రోడ్డు పైకి వచ్చి వాహనాలకు మరియు ప్రజలకు ఇబ్బంది కలిగిస్తోంది. దోమలు పెరిగి అనారోగ్య సమస్యలు వస్తున్నాయి.',
      en: 'Drainage water is overflowing onto the road, causing difficulty for vehicles and pedestrians. Stagnant water is also breeding mosquitoes.',
    },
    status: 'pending',
    reportedDate: '2026-09-25',
    authorityId: 'AUTH-001',
    evidence: {
      image: '/images/issues/CR-001.jpg',
      youtube: 'https://youtube.com/watch?v=xxxxxxxxxxx',
      instagram: 'https://instagram.com/p/xxxxxxxxxxx',
      twitter: 'https://x.com/citizenreport/status/xxxxxxxxxxx',
    },
    resolution: null,
  },

  {
    id: 'CR-002',
    title: {
      te: 'వీధి దీపాలు పనిచేయడం లేదు',
      en: 'Street lights not working',
    },
    location: {
      te: 'చర్చి రోడ్డు, ఎయినంపూడి',
      en: 'Church Road, Ainampudi',
    },
    description: {
      te: 'చర్చి రోడ్డులో చాలా వీధి దీపాలు పనిచేయడం లేదు. రాత్రి వేళల్లో నడవడం, ముఖ్యంగా మహిళలకు మరియు పిల్లలకు, చాలా ప్రమాదకరంగా ఉంది.',
      en: 'Several street lights on Church Road are not working. Walking at night is unsafe, especially for women and children.',
    },
    status: 'pending',
    reportedDate: '2026-09-22',
    authorityId: 'AUTH-003',
    evidence: {
      image: '/images/issues/CR-002.jpg',
      youtube: null,
      instagram: 'https://instagram.com/p/xxxxxxxxxxx',
      twitter: null,
    },
    resolution: null,
  },

  {
    id: 'CR-003',
    title: {
      te: 'చెత్త పేరుకుపోవడం',
      en: 'Garbage piling up',
    },
    location: {
      te: 'బస్ స్టాండ్ దగ్గర',
      en: 'Near the bus stand',
    },
    description: {
      te: 'బస్ స్టాండ్ పక్కన చెత్త చాలా రోజులుగా పేరుకుపోయింది. దుర్వాసన వస్తోంది, ప్రయాణికులకు ఇబ్బందిగా ఉంది.',
      en: 'Garbage has been piling up next to the bus stand for many days. It smells badly and is a problem for passengers waiting there.',
    },
    status: 'in-progress',
    reportedDate: '2026-09-15',
    authorityId: 'AUTH-002',
    evidence: {
      image: '/images/issues/CR-003.jpg',
      youtube: 'https://youtube.com/watch?v=xxxxxxxxxxx',
      instagram: null,
      twitter: null,
    },
    resolution: null,
  },

  {
    id: 'CR-004',
    title: {
      te: 'రోడ్డు గుంతలు',
      en: 'Potholes on the road',
    },
    location: {
      te: 'మెయిన్ రోడ్డు, ఎయినంపూడి',
      en: 'Main Road, Ainampudi',
    },
    description: {
      te: 'రోడ్డు మీద పెద్ద గుంతలు ఏర్పడ్డాయి. ద్విచక్ర వాహనదారులు పడిపోయే ప్రమాదం ఉంది.',
      en: 'Large potholes have formed on the road. Two-wheeler riders are at risk of falling.',
    },
    status: 'resolved',
    reportedDate: '2026-08-28',
    authorityId: 'AUTH-004',
    evidence: {
      image: '/images/issues/CR-004.jpg',
      youtube: null,
      instagram: null,
      twitter: 'https://x.com/citizenreport/status/xxxxxxxxxxx',
    },
    resolution: {
      resolvedDate: '2026-09-10',
      description: {
        te: 'గుంతలు పూడ్చి రోడ్డు బాగు చేశారు. అధికారులకు ధన్యవాదాలు.',
        en: 'The potholes were filled and the road surface was repaired. Thanks to the officials who acted.',
      },
      image: '/images/issues/CR-004-resolved.jpg',
    },
  },
]
