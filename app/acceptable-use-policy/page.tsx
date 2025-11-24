import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grapevine - Acceptable Use Policy",
  description:
    "Read our Acceptable Use Policy to understand the rules and guidelines for using the Grapevine website and services.",
  alternates: {
    canonical: "/acceptable-use-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AcceptableUsePolicy() {
  return (
    <div className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="prose prose-navy">
          <h1 className="text-navy mb-6 text-3xl font-bold md:mb-8 md:text-4xl lg:text-5xl">
            ACCEPTABLE USE POLICY
          </h1>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">INTRODUCTION</h2>

          <p className="text-body mb-6">
            Thank you for visiting our website www.grapevine.travel (our site). This is our
            Acceptable Use Policy and by using our site, this policy applies to you and you agree
            with it as part of our Website Terms and Conditions.
          </p>

          <p className="text-body mb-8">
            The terms in our Acceptable Use Policy may change, so we advise you to check this page
            because when you use our site, you are bound by it.
          </p>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">ABOUT US</h2>

          <p className="text-body mb-8">
            This site is run and maintained by Your Grapevine Ltd (&quot;we&quot;). Our email
            address is{" "}
            <a href="mailto:info@grapevine.travel" className="text-primary hover:underline">
              info@grapevine.travel
            </a>
            .
          </p>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">USE OF OUR SITE</h2>

          <p className="text-body mb-4">
            You agree not to use this site for any of the following purposes:
          </p>

          <ul className="mb-8 list-disc space-y-2 pl-6">
            <li className="text-body">to break any laws or regulations;</li>
            <li className="text-body">
              to do anything fraudulent, or which has a fraudulent effect;
            </li>
            <li className="text-body">to harm or attempt to harm minors;</li>
            <li className="text-body">
              to do anything with material that does not meet our content standards (these are
              listed below);
            </li>
            <li className="text-body">to copy in any way or re-sell any part of our site;</li>
            <li className="text-body">
              to interfere with or damage any part of our site, equipment, network, software or
              storage arrangements;
            </li>
            <li className="text-body">
              for unsolicited advertising material (known as spam); and
            </li>
            <li className="text-body">
              to transmit any data or material that is harmful to other programs, software, or
              hardware.
            </li>
          </ul>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">CONTENT STANDARDS</h2>

          <p className="text-body mb-6">
            Our content standards apply to all material that you contribute either to our site or to
            our interactive services.
          </p>

          <p className="text-body mb-6">
            Your contributions must be accurate (if they are factual), genuine (if they state
            opinions) and within the law.
          </p>

          <p className="text-body mb-8">
            Your contributions must not be defamatory, obscene or offensive, likely to deceive,
            harass, annoy, threaten, or invade someone else&apos;s privacy. Your contributions must
            not promote material that is sexually explicit, promote violence or discrimination based
            on race, sex, religion, nationality, age, disability, or sexual orientation, infringe
            anyone else&apos;s intellectual property, be used to impersonate anyone, or misrepresent
            anyone&apos;s identity or encourage or assist anything that breaks the law.
          </p>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">
            INTERACTIVE SERVICES
          </h2>

          <p className="text-body mb-6">
            Where we provide use of interactive services, we will tell you clearly about the
            service, we will tell you what form of moderation we use for the site, we will try to
            assess risks on the site and will moderate if we think it is appropriate.
          </p>

          <p className="text-body mb-8">
            We are not however required to moderate our interactive service and we will not be
            responsible for any loss or damage to anyone who does not use our site according to our
            standards (whether or not we have moderated the service).
          </p>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">AGE LIMIT</h2>

          <p className="text-body mb-8">
            Our services are not intended for the use of minors under the age of 13.
          </p>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">
            SUSPENSION AND TERMINATION
          </h2>

          <p className="text-body mb-6">
            If we believe you are in breach of our Acceptable Use Policy, we will take whatever
            steps we think are necessary to address this, including stopping your use of the site
            temporarily or permanently, removing material you have put on the site or any of our
            social media groups, sending you a formal warning, taking legal action and / or telling
            the relevant authorities.
          </p>

          <p className="text-body mb-8">
            We will not be held liable for any of your costs arising from any actions we take to
            deal with any breach of this policy.
          </p>
        </div>
      </div>
    </div>
  );
}
