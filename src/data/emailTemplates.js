/**
 * EMAIL TEMPLATES  —  the words of the complaint
 * ----------------------------------------------
 * One template per language. Change the wording here and EVERY issue's
 * email changes with it. There is no logic in this file on purpose —
 * you only edit sentences.
 *
 * The values you can drop into the text (all ready-to-use plain strings):
 *   {title}        the issue title
 *   {location}     where it is
 *   {description}  the full description
 *   {issueId}      e.g. CR-001
 *   {reportedDate} e.g. 25-09-2026
 *   {authority}    the office name
 *   {signature}    from siteConfig.emailSignature
 *   {siteName}     from siteConfig.name
 *   {link}         a link back to this issue's page (empty when not deployed)
 */
export const emailTemplates = {
  te: {
    subject: ({ title, location }) => `ఫిర్యాదు: ${title} – ${location}`,

    body: ({
      title,
      location,
      description,
      issueId,
      reportedDate,
      signature,
      siteName,
      link,
    }) => `మర్యాదపూర్వకంగా,

మా ప్రాంతంలో ఈ క్రింది సమస్యను మీ దృష్టికి తీసుకువస్తున్నాను.

సమస్య : ${title}
ప్రదేశం : ${location}
తేదీ : ${reportedDate}
ఫిర్యాదు నంబర్ : ${issueId}

వివరాలు :
${description}

ఈ సమస్య వల్ల స్థానిక ప్రజలు చాలా ఇబ్బంది పడుతున్నారు. దీనిపై త్వరగా చర్యలు తీసుకొని సమస్యను పరిష్కరించాలని మనవి చేసుకుంటున్నాను.
${link ? `\nఫోటోలు మరియు వివరాలు : ${link}\n` : ''}
ధన్యవాదాలు,
${signature}
(${siteName} ద్వారా పంపబడింది)`,
  },

  en: {
    subject: ({ title, location }) => `Complaint: ${title} – ${location}`,

    body: ({
      title,
      location,
      description,
      issueId,
      reportedDate,
      signature,
      siteName,
      link,
    }) => `Respected Sir / Madam,

I would like to bring the following issue in our area to your attention.

Issue       : ${title}
Location    : ${location}
Date        : ${reportedDate}
Reference   : ${issueId}

Details :
${description}

This is causing real difficulty for people living here. I request you to kindly look into the matter and take the necessary action at the earliest.
${link ? `\nPhotos and details : ${link}\n` : ''}
Thank you,
${signature}
(Sent via ${siteName})`,
  },
}
