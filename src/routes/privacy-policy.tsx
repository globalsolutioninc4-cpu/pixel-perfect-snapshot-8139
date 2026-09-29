import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, TextSection } from "@/components/site-chrome";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "ScamGuide Privacy Policy" },
    { name: "description", content: "How ScamGuide handles contact-form information, technical data, cookies, privacy choices, and data security." },
    { property: "og:title", content: "ScamGuide Privacy Policy" },
    { property: "og:description", content: "How ScamGuide handles contact-form information, technical data, cookies, privacy choices, and data security." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Page,
});
function Page() { return <ContentPage eyebrow="Privacy" title="ScamGuide Privacy Policy" intro="This Privacy Policy explains how ScamGuide handles information when you visit or interact with this website.">
    <TextSection title="Information you provide"><p>If you use the contact form, you voluntarily provide an email address and a comment or question. This information may be used only to respond to your inquiry and provide relevant educational information. Do not submit passwords, financial details, verification codes, or other sensitive information.</p><p>Contact submissions are not displayed publicly and do not automatically subscribe you to marketing.</p></TextSection>
    <TextSection title="Technical information"><p>The website host may process limited technical information needed to deliver and secure the site, such as IP address, browser or device information, request times, and server logs. ScamGuide does not currently install analytics, advertising pixels, remarketing technology, or non-essential cookies. Because no optional tracking technology is installed, no cookie-consent banner is shown.</p></TextSection>
    <TextSection title="How information may be used"><p>Information may be used to operate and secure the website, prevent abuse, respond to inquiries, and improve educational content. Service providers involved in hosting or message delivery may process limited data on ScamGuide’s behalf.</p></TextSection>
    <TextSection title="Retention and security"><p>Information should be retained only as long as reasonably needed for the purposes described above or to meet applicable obligations. Reasonable safeguards can reduce risk, but no internet transmission or storage system can be guaranteed completely secure.</p></TextSection>
    <TextSection title="External links"><p>ScamGuide links to third-party websites, including official product resources. Their privacy practices are governed by their own policies.</p></TextSection>
    <TextSection title="Children’s privacy"><p>ScamGuide is a general-audience educational resource and is not directed to children. We do not knowingly seek personal information from children.</p></TextSection>
    <TextSection title="Your choices and rights"><p>Depending on where you live, you may have rights to request access, correction, deletion, restriction, or objection concerning personal information. Contact details: [SCAMGUIDE OWNER: ADD CONTACT EMAIL].</p></TextSection>
    <TextSection title="Changes to this policy"><p>This policy may be updated when the website or its practices change. Material changes will be reflected by the date below.</p><p>Last updated: September 29, 2026.</p></TextSection>
  </ContentPage>; }
