import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grapevine - Cookies Policy",
  description:
    "Learn about how Grapevine uses cookies and similar technologies. Read our cookies policy for details on tracking and your choices.",
  alternates: {
    canonical: "/policy/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesPolicy() {
  return (
    <div className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="prose prose-navy">
          <h1 className="text-navy mb-6 text-3xl font-bold md:mb-8 md:text-4xl lg:text-5xl">
            COOKIES POLICY
          </h1>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">WHAT ARE COOKIES?</h2>

          <p className="text-body mb-8">
            A cookie is a small text file that a website saves on your computer or mobile device
            when you visit the site. It enables the website to remember your actions and preferences
            (such as login, language, font size and other display preferences) over a period of
            time, so you don&apos;t have to keep re-entering them whenever you come back to the site
            or browse from one page to another.
          </p>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">
            HOW DO WE USE COOKIES?
          </h2>

          <p className="text-body mb-6">
            A cookie is a small file of letters and numbers that we store on your browser or the
            hard drive of your computer if you agree. Cookies contain information that is
            transferred to your computer&apos;s hard drive.
          </p>

          <p className="text-body mb-6">We use the following cookies:</p>

          <p className="text-body mb-6">
            <strong className="text-navy">Strictly necessary cookies.</strong> These are cookies
            that are required for the operation of our website. They include, for example, cookies
            that enable you to log into secure areas of our website, use a shopping cart or make use
            of e-billing services.
          </p>

          <p className="text-body mb-6">
            <strong className="text-navy">Analytical/performance cookies.</strong> They allow us to
            recognise and count the number of visitors and to see how visitors move around our
            website when they are using it. This helps us to improve the way our website works, for
            example, by ensuring that users are finding what they are looking for easily.
          </p>

          <p className="text-body mb-6">
            <strong className="text-navy">Functionality cookies</strong>. These are used to
            recognise you when you return to our website. This enables us to personalise our content
            for you, greet you by name and remember your preferences (for example, your choice of
            language or region).
          </p>

          <p className="text-body mb-6">
            <strong className="text-navy">Targeting cookies.</strong> These cookies record your
            visit to our website, the pages you have visited and the links you have followed. We
            will use this information to make our website and the advertising displayed on it more
            relevant to your interests. We may also share this information with third parties for
            this purpose.
          </p>

          <p className="text-body mb-6">
            Enabling these cookies is not strictly necessary for the website to work but it will
            provide you with a better browsing experience. You can delete or block these cookies,
            but if you do that some features of this site may not work as intended.
          </p>

          <p className="text-body mb-8">
            The cookie-related information{" "}
            <strong className="text-navy">is not used to identify you</strong> personally and the
            pattern data is fully under our control. These cookies are not used for any purpose
            other than those described here.
          </p>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">
            DO WE USE OTHER COOKIES?
          </h2>

          <p className="text-body mb-8">
            Some of our pages or subsites may use additional or different cookies to the ones
            described above. If so, the details of these will be provided in their specific cookies
            notice page. You may be asked for your agreement to store these cookies.
          </p>

          <h2 className="text-navy mt-10 mb-4 text-2xl font-bold md:text-3xl">
            HOW TO CONTROL COOKIES
          </h2>

          <p className="text-body mb-8">
            You can control <strong className="text-navy">and/or delete cookies</strong> as you wish
            - for details, see{" "}
            <a
              href="https://aboutcookies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              aboutcookies.org
            </a>
            . You can delete all cookies that are already on your computer and you can set most
            browsers to prevent them from being placed. If you do not accept our use of cookies, you
            may not be able to use our service to place an order. This is because we use cookies to
            enable you to log in to your account.
          </p>
        </div>
      </div>
    </div>
  );
}
