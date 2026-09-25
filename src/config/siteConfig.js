/**
 * SITE CONFIG
 * -----------
 * Everything about *you* — the name, the tagline, your social accounts,
 * the signature that goes at the bottom of every complaint email.
 *
 * Edit this file to rebrand the whole site. Nothing else needs to change.
 */
export const siteConfig = {
  /** Shown in the header, in the browser tab and in the footer. */
  name: 'Citizen Report',

  /** Small line under the logo. Keep it short — it sits on one line on a phone. */
  tagline: {
    te: 'మన ఊరి సమస్య - మన స్వరం',
    en: 'Our village, our voice',
  },

  /** The big promise on the home page. */
  heroHeadline: {
    te: 'మన ఊరి సమస్యలను అధికారుల దృష్టికి తీసుకెళ్లండి',
    en: 'Take our local problems to the right authorities',
  },

  /**
   * The logo mark shown in the header — the emblem only, without the words,
   * so it stays readable at 40px. Swap the file in /public/ to rebrand.
   */
  logo: './logo-mark.png',

  /** Background photo for the home page hero. Put the file in /public/images/. */
  heroImage: '/images/hero.jpg',

  /**
   * Which language the site opens in the very first time someone visits.
   * 'te' = Telugu, 'en' = English. The visitor's choice is remembered after that.
   */
  defaultLanguage: 'te',

  /**
   * Your public accounts. Set a value to null to hide that icon.
   * These appear in the footer only — they are supporting evidence,
   * never the main action.
   */
  social: {
    youtube: 'https://www.youtube.com/@CitizenReport143',
    instagram: 'https://www.instagram.com/reportcitizen143/',
    twitter: 'https://x.com/reportcitizen14',
  },

  /** Signed at the bottom of every generated complaint email. */
  emailSignature: {
    te: 'ఒక స్థానిక పౌరుడు',
    en: 'A concerned citizen',
  },

  /** Optional: a reply-to address citizens can reach you on. null hides it. */
  contactEmail: null,
}
