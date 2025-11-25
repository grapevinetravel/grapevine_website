import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import { siteConfig, generateOrganizationSchema } from "@/lib/seo";

const ambit = localFont({
  src: [
    {
      path: "../public/fonts/Ambit/Ambit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Ambit/Ambit-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Ambit/Ambit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Ambit/Ambit-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/Ambit/Ambit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Ambit/Ambit-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Ambit/Ambit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Ambit/Ambit-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Ambit/Ambit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Ambit/Ambit-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Ambit/Ambit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Ambit/Ambit-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Ambit/Ambit-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Ambit/Ambit-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-ambit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141C25",
};

export const metadata: Metadata = {
  title: {
    default: "Grapevine - AI Powered Traveller Communications",
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.xHandle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className={`${ambit.variable} ${ambit.className} antialiased`}>
        <Header />
        <main className="bg-navy pt-20 md:pt-[88px] lg:pt-[104px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
