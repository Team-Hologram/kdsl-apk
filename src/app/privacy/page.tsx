import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | KDramaSL — KDSL App",
  description: "Privacy Policy for the KDramaSL (KDSL) Android application — including ad network, data collection, and third-party service disclosures.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 19, 2026">
      <p>
        Welcome to KDramaSL (&ldquo;KDSL&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). This Privacy Policy explains
        how we collect, use, and protect information when you use our Android application (the &ldquo;App&rdquo;)
        and our website (the &ldquo;Site&rdquo;). By using KDSL, you agree to the practices described in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Usage Data:</strong> Information about how you use the App, including content viewed,
          search queries, and viewing history. This data is stored locally on your device.
        </li>
        <li>
          <strong>Device Information:</strong> Device model, operating system version, screen resolution,
          and unique device identifiers used for crash reporting and ad serving.
        </li>
        <li>
          <strong>Network Information:</strong> IP address and network type for content delivery and
          regional availability.
        </li>
        <li>
          <strong>Advertising Data:</strong> Our ad network partner (Start.io) may collect device
          identifiers (such as Android Advertising ID), location data, installed app lists, and
          browsing behaviour to deliver personalised advertisements. See Section 4 for full details.
        </li>
        <li>
          <strong>Voluntary Information:</strong> If you contact us via email or our contact form, we
          collect your email address and the content of your message.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide, maintain, and improve the App and Site</li>
        <li>Deliver relevant advertisements through our ad network partner (Start.io)</li>
        <li>Analyse usage patterns to enhance user experience</li>
        <li>Respond to your questions and support requests</li>
        <li>Send important updates about the App (with your consent)</li>
        <li>Detect and prevent abuse, fraud, or technical issues</li>
        <li>Ensure legal compliance and enforce our Terms of Service</li>
      </ul>

      <h2>3. Advertising — Start.io</h2>
      <p>
        KDSL uses <strong>Start.io</strong> (formerly StartApp) as its advertising network. Start.io
        is embedded in this App and provides personalised advertising experiences based on your
        interests, location, and app usage across the Start.io Network and its Data Partners.
      </p>
      <p>Start.io may collect and use the following data to serve relevant ads:</p>
      <ul>
        <li>
          <strong>Device identifiers:</strong> Android Advertising ID (AAID) and other persistent
          identifiers
        </li>
        <li>
          <strong>Location data:</strong> Approximate or precise location (if permission is granted)
        </li>
        <li>
          <strong>App activity:</strong> List of installed apps, in-app interactions, and browsing
          behaviour
        </li>
        <li>
          <strong>Network data:</strong> IP address, carrier information, and connection type
        </li>
      </ul>
      <p>
        You can opt out of personalised advertising by Start.io at any time by visiting{" "}
        <a href="https://www.start.io/privacy/" target="_blank" rel="noopener noreferrer">
          Start.io&apos;s Privacy Policy & Opt-Out page
        </a>
        . You can also reset your Android Advertising ID in your device settings under{" "}
        <strong>Settings → Google → Ads</strong>.
      </p>
      <p>
        For more information, please review{" "}
        <a href="https://www.start.io/privacy/" target="_blank" rel="noopener noreferrer">
          Start.io&apos;s Privacy Policy
        </a>{" "}
        and{" "}
        <a href="https://www.start.io/terms-of-use/" target="_blank" rel="noopener noreferrer">
          Terms of Use
        </a>
        .
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        In addition to Start.io, the App may integrate the following third-party services, each
        governed by their own privacy policies:
      </p>
      <ul>
        <li>
          <strong>Firebase (Google):</strong> Used for crash reporting and app analytics to help us
          understand bugs and performance issues.
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            {" "}Google Privacy Policy
          </a>
        </li>
        <li>
          <strong>Content Delivery Networks (CDNs):</strong> Video streaming content is served
          through third-party CDN infrastructure. These providers may log access requests including
          IP addresses.
        </li>
      </ul>

      <h2>5. Copyright Content Notice</h2>
      <p>
        KDSL provides access to Korean drama (K-Drama) and Asian entertainment content. All drama
        titles, characters, posters, trailers, and related media are the intellectual property of
        their respective copyright holders, including but not limited to Korean broadcasters (KBS,
        MBC, SBS, tvN, JTBC), production studios, and streaming platforms.
      </p>
      <p>
        KDSL does not claim ownership over any third-party copyrighted content. If you are a rights
        holder and believe your content has been included without authorisation, please refer to our{" "}
        <a href="/dmca">DMCA Policy</a> and submit a takedown request.
      </p>

      <h2>6. Data Storage and Security</h2>
      <p>
        Most of your personal data (watchlist, viewing history, preferences) is stored locally on
        your Android device and is never transmitted to our servers. We implement industry-standard
        security measures for any data that is processed or transmitted. We do not sell, trade, or
        rent your personal information to third parties, except as disclosed in this policy (e.g.,
        through Start.io&apos;s ad serving).
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        KDSL is not directed to children under 13 years of age. We do not knowingly collect personal
        information from children under 13. If you believe we have inadvertently collected such
        information, please contact us immediately at{" "}
        <a href="mailto:contact@kdramasl.site">contact@kdramasl.site</a>.
      </p>

      <h2>8. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Opt out of personalised advertising (see Section 3)</li>
        <li>Opt out of non-essential communications</li>
        <li>Lodge a complaint with your local data protection authority</li>
      </ul>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically to reflect changes in our practices or for
        legal reasons. We will notify you of significant changes by updating the &ldquo;Last
        updated&rdquo; date at the top of this page. Continued use of the App after changes
        constitutes acceptance of the updated policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or wish to exercise your data rights, please
        contact us at{" "}
        <a href="mailto:contact@kdramasl.site">contact@kdramasl.site</a> or visit our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  );
}
