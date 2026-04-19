import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | KDramaSL — KDSL App",
  description: "Terms of Service for the KDramaSL (KDSL) Android application — including content use, copyright, advertising, and user responsibilities.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 19, 2026">
      <p>
        Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the KDramaSL
        application (&ldquo;KDSL&rdquo;, &ldquo;App&rdquo;) or website (&ldquo;Site&rdquo;) operated by KDramaSL
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using the App, you agree to be
        bound by these Terms and our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using the KDSL application, you confirm that you are at least
        13 years old and agree to these Terms and our Privacy Policy. If you do not agree to these
        Terms, do not use the App or Site.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        KDramaSL provides free access to Korean drama (K-Drama) and Asian entertainment content
        through our Android application. The App streams content from third-party sources and
        provides features including offline downloads, subtitle support, and content discovery.
        We do not guarantee continuous, uninterrupted access to any specific content, as availability
        may change based on licensing, technical issues, or copyright claims.
      </p>

      <h2>3. Copyright Content</h2>
      <p>
        All Korean drama titles, episodes, trailers, posters, character names, and related media
        content accessible through KDSL are the exclusive intellectual property of their respective
        copyright holders. This includes but is not limited to:
      </p>
      <ul>
        <li>Korean broadcasters: KBS, MBC, SBS, tvN, JTBC, OCN, and others</li>
        <li>Korean and international production studios and distribution companies</li>
        <li>Licensed streaming platforms that hold regional distribution rights</li>
      </ul>
      <p>
        KDSL does not claim ownership of any K-Drama or third-party content. Content is provided for
        personal, non-commercial viewing purposes only. If you are a rights holder and believe your
        content is accessible through KDSL without proper authorisation, please submit a request
        through our <a href="/dmca">DMCA Policy</a> page. We will respond promptly.
      </p>

      <h2>4. Advertising</h2>
      <p>
        KDSL is a free application supported by advertising. We use <strong>Start.io</strong>{" "}
        (formerly StartApp) as our advertising network. By using the App, you agree that:
      </p>
      <ul>
        <li>Ads may be displayed within the App during normal use</li>
        <li>
          Start.io may collect device data to serve personalised advertisements (refer to our{" "}
          <a href="/privacy">Privacy Policy</a> for details)
        </li>
        <li>
          You may opt out of personalised ads by visiting{" "}
          <a href="https://www.start.io/privacy/" target="_blank" rel="noopener noreferrer">
            Start.io&apos;s opt-out page
          </a>
        </li>
        <li>Ad content is served by Start.io and we are not responsible for individual ad content</li>
      </ul>

      <h2>5. User Responsibilities</h2>
      <p>As a user of KDSL, you agree to:</p>
      <ul>
        <li>Use the App only for lawful, personal, non-commercial purposes</li>
        <li>Not reproduce, redistribute, sell or share any content accessed through the App</li>
        <li>Not attempt to reverse engineer, decompile, or modify the App or its systems</li>
        <li>Not use automated tools (bots, scrapers) to access or extract content</li>
        <li>Not interfere with the App&apos;s functionality, security, or servers</li>
        <li>Not circumvent any digital rights management (DRM) or content protection mechanisms</li>
        <li>Respect the intellectual property rights of all content creators and rights holders</li>
      </ul>

      <h2>6. APK Download and Installation</h2>
      <p>
        The KDSL APK is provided for personal use on Android devices. By installing the APK, you
        acknowledge that:
      </p>
      <ul>
        <li>You install the App at your own risk on your personal device</li>
        <li>You are responsible for enabling &ldquo;Install from Unknown Sources&rdquo; on your device if required</li>
        <li>We are not responsible for any device incompatibility, data loss, or damage</li>
        <li>You will not distribute, repackage, or redistribute the APK file to others</li>
        <li>You will only download the APK from official sources (kdramasl.site)</li>
      </ul>

      <h2>7. Offline Downloads</h2>
      <p>
        The KDSL App allows users to download episodes for offline viewing. Downloaded content is
        subject to the following conditions:
      </p>
      <ul>
        <li>Downloaded content is for your personal, offline viewing only</li>
        <li>You must not share, copy, or redistribute downloaded files</li>
        <li>Downloaded content remains the property of its respective copyright holders</li>
        <li>We reserve the right to limit download functionality at any time</li>
      </ul>

      <h2>8. Content Disclaimer</h2>
      <p>
        KDSL provides access to content streamed from third-party sources. We are not responsible
        for the accuracy, legality, or quality of any third-party content accessible through the App.
        Content availability may change without notice. We do not warrant that the App will be
        error-free or uninterrupted.
      </p>

      <h2>9. Intellectual Property — KDSL Brand</h2>
      <p>
        The KDSL name, logo, app interface design, website design, and any original content created
        by KDramaSL are our exclusive intellectual property and may not be used without prior written
        permission. All drama content, titles, and media remain the property of their respective
        rights holders.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by applicable law, KDramaSL shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages arising from your use of
        the App or Site, including but not limited to loss of data, device damage, service
        interruption, or exposure to third-party ad content.
      </p>

      <h2>11. Termination</h2>
      <p>
        We reserve the right to suspend or terminate access to the App at any time for any reason,
        including violations of these Terms. You may stop using the App at any time by uninstalling
        it from your device. These Terms survive termination to the extent required by law.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        We may update these Terms at any time. Significant changes will be communicated through the
        App or website. Continued use of the App after changes constitutes acceptance of the revised
        Terms.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with applicable laws. Any disputes
        arising from these Terms shall be resolved through good-faith negotiation between the parties.
      </p>

      <h2>14. Contact</h2>
      <p>
        For questions about these Terms, contact us at{" "}
        <a href="mailto:contact@kdramasl.site">contact@kdramasl.site</a> or visit our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  );
}
