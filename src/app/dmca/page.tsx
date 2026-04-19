import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "DMCA Policy | KDramaSL — KDSL App",
  description: "DMCA Policy and copyright infringement notice procedure for KDramaSL — including takedown requests for K-Drama content.",
};

export default function DmcaPage() {
  return (
    <LegalLayout title="DMCA Policy" lastUpdated="April 19, 2026">
      <p>
        KDramaSL (&ldquo;KDSL&rdquo;) respects the intellectual property rights of all copyright holders and
        expects users to do the same. In accordance with the Digital Millennium Copyright Act of
        1998 (&ldquo;DMCA&rdquo;), we will respond promptly to valid claims of copyright infringement reported
        to our designated copyright agent.
      </p>

      <h2>1. Content Disclaimer</h2>
      <p>
        KDSL is a free streaming platform that provides access to Korean drama (K-Drama) and Asian
        entertainment content. All drama titles, episodes, trailers, posters, and associated media
        are the intellectual property of their respective copyright holders, including Korean
        broadcasters (KBS, MBC, SBS, tvN, JTBC, OCN), production studios, and licensed streaming
        distributors.
      </p>
      <p>
        KDSL does not host or store copyrighted video files on its own servers. Content is streamed
        from third-party sources. We make every reasonable effort to comply with copyright law and
        respond to valid takedown requests in a timely manner.
      </p>

      <h2>2. Who Can Submit a DMCA Notice</h2>
      <p>
        A DMCA takedown notice may be submitted by:
      </p>
      <ul>
        <li>The original copyright owner of the K-Drama, film, or media in question</li>
        <li>An authorised representative or legal agent acting on behalf of the copyright owner</li>
        <li>A licensed distributor who holds exclusive regional streaming rights</li>
      </ul>
      <p>
        If you are not the rights holder or their authorised agent, please do not submit a notice on
        their behalf, as false DMCA claims carry legal liability (see Section 7).
      </p>

      <h2>3. Notice of Copyright Infringement</h2>
      <p>
        To submit a valid DMCA takedown notice, please send a written notification to our designated
        DMCA agent containing <strong>all</strong> of the following information:
      </p>
      <ul>
        <li>
          A physical or electronic signature of the copyright owner or a person authorised to act on
          their behalf
        </li>
        <li>
          Identification of the copyrighted work — e.g., the drama title, episode number, season,
          and production studio
        </li>
        <li>
          Identification of the infringing material — include the specific URL, screen title, or
          description of where the content appears within the App or Site
        </li>
        <li>Your full name, mailing address, telephone number, and email address</li>
        <li>
          A statement that you have a good faith belief that use of the material in the manner
          complained of is not authorised by the copyright owner, its agent, or the law
        </li>
        <li>
          A statement, made under penalty of perjury, that the above information is accurate and that
          you are the copyright owner or are authorised to act on their behalf
        </li>
      </ul>

      <h2>4. Designated DMCA Agent</h2>
      <p>Send all DMCA notices to our designated agent via email:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:contact@kdramasl.site">contact@kdramasl.site</a>
        <br />
        <strong>Subject Line:</strong> DMCA Takedown Notice — [Drama Title]
      </p>
      <p>
        For faster processing, please include &ldquo;DMCA&rdquo; in your subject line. We aim to
        acknowledge all valid notices within <strong>48 hours</strong> and take appropriate action
        within <strong>7 business days</strong>.
      </p>

      <h2>5. Our Response to Valid Notices</h2>
      <p>Upon receiving a valid and complete DMCA takedown notice, we will:</p>
      <ul>
        <li>Remove or disable access to the allegedly infringing content</li>
        <li>Notify the user or source responsible for the content, if applicable</li>
        <li>Document the takedown for our records</li>
        <li>Provide the content submitter with confirmation of the action taken</li>
      </ul>

      <h2>6. Counter-Notice</h2>
      <p>
        If you believe your content was removed or disabled by mistake or misidentification, you may
        send a counter-notice to our DMCA Agent containing:
      </p>
      <ul>
        <li>Your physical or electronic signature</li>
        <li>
          Identification of the material that was removed and the location where it appeared before
          removal
        </li>
        <li>
          A statement under penalty of perjury that you believe the material was removed by mistake
          or misidentification
        </li>
        <li>Your full name, address, and telephone number</li>
        <li>
          A statement that you consent to the jurisdiction of the federal court in your district (if
          in the USA) or the appropriate court in your jurisdiction
        </li>
      </ul>
      <p>
        Upon receipt of a valid counter-notice, we may restore the removed content within 10–14
        business days unless the original complainant files a court action.
      </p>

      <h2>7. False Claims & Misuse</h2>
      <p>
        Under Section 512(f) of the DMCA, any person who knowingly and materially misrepresents that
        content is infringing, or that removed content was removed by mistake, may be subject to
        liability for damages, including legal costs and attorneys&apos; fees. If you are unsure
        whether the material infringes your copyright, please consult a qualified legal advisor
        before filing a notice.
      </p>

      <h2>8. Repeat Infringers</h2>
      <p>
        KDramaSL reserves the right to terminate, in appropriate circumstances, access for users who
        are deemed repeat copyright infringers. We may, in our sole discretion, limit or block access
        to the App for anyone who repeatedly infringes the intellectual property rights of others.
      </p>

      <h2>9. Advertising Network — No DMCA Liability</h2>
      <p>
        Advertisements displayed in the KDSL App are served by <strong>Start.io</strong>, an
        independent advertising network. KDSL has no control over the specific ads displayed and is
        not responsible for any third-party content within advertisements. Any concerns about ad
        content should be directed to{" "}
        <a href="https://www.start.io/" target="_blank" rel="noopener noreferrer">Start.io</a>{" "}
        directly. DMCA claims relating to ad content cannot be processed through KDramaSL.
      </p>

      <h2>10. Contact</h2>
      <p>
        For all DMCA inquiries, copyright concerns, or content removal requests, please contact us
        at{" "}
        <a href="mailto:contact@kdramasl.site">contact@kdramasl.site</a>. For faster processing,
        use the subject line format: <strong>&ldquo;DMCA — [Drama Title] — [Episode/Content]&rdquo;</strong>.
      </p>
      <p>
        You may also use our <a href="/contact">Contact page</a> for general enquiries or to provide
        additional information about a copyright claim.
      </p>
    </LegalLayout>
  );
}
