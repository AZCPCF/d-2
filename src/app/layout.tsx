import ClientInit from "@/components/init";
import AppBar from "@/components/ui/app-bar";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { cn } from "@/utils/cn";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
// import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#fed00b",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "خرید تیشرت، شلوار و شلوارک ساده با بهترین قیمت | فروشگاه D2",
  description:
    "فروش تیشرت، شلوار، شلوارک ساده و باکیفیت با قیمت مناسب به تومان. تنوع بالا از لباس‌های راحتی مردانه، طرح‌های جدید، ارسال سریع، تخفیف‌های ویژه و تضمین کیفیت در فروشگاه D2.",
  keywords: [
    "تیشرت",
    "شلوار",
    "شلوارک",
    "تومان",
    "ساده",
    "خرید لباس",
    "فروشگاه D2",
  ],
  applicationName: "فروشگاه پوشاک D2",
  publisher: "شرکت داده کاو وب",
  metadataBase: new URL("https://d-2-orpin.vercel.app"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    title: "فروشگاه پوشاک دی دو",
    description:
      "فروشگاه اینترنتی پوشاک D2 در شمال کشور با تولید انواع لباس و پوشاک مردانه و بچگانه و هدف اصلی فروشگاه دی دو لباس ارزان با کیفیت عالی در مازندران و ارسال و فروش اینترنتی به سایر نقاط کشور است.",
    url: "https://d-2-orpin.vercel.app",
    siteName: "فروشگاه پوشاک دی دو",
    locale: "fa-IR",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "فروشگاه پوشاک دی دو",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "فروشگاه پوشاک دی دو",
    description:
      "فروشگاه اینترنتی پوشاک D2 در شمال کشور با تولید انواع لباس و پوشاک مردانه و بچگانه و هدف اصلی فروشگاه دی دو لباس ارزان با کیفیت عالی در مازندران و ارسال و فروش اینترنتی به سایر نقاط کشور است.",
    images: ["/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-adsense-account": "ca-pub-4948885497524533",
    "google-site-verification": "RqKyXT-2BF05A2ypG3nH0OMMcJNlaNqGDFt0IyrDQXA",
    category: "men-clothes , shoes-and-sneakers , کتونی, لباس مردانه",
    enamad: "۴۴۳۱۲۹۶۴",
    author: "d2collection",
  },
};

const kalamehFont = localFont({
  src: "./kalameh.ttf",
  display: "fallback",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("scroll-smooth", kalamehFont.className)}
    >
      <head>
        <meta name="theme-color" content="#fed00b" />
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SJW7PL0MXP"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date(), { cookie_domain: "auto" });
    gtag('config', 'G-SJW7PL0MXP', { cookie_domain: "auto" });
  `}
        </Script> */}
      </head>
      <body className="antialiased">
        <ClientInit>
          <Header />
          {children}
          <Footer />
          <AppBar />
        </ClientInit>
        <div className="hidden">
          <div
            className="fb-like"
            data-href="https://d-2-orpin.vercel.app"
            data-layout="standard"
            data-action="like"
            data-size="small"
            data-share="true"
          />
          <a
            href="https://twitter.com/share"
            className="twitter-share-button"
            data-url="https://d-2-orpin.vercel.app"
            data-show-count="false"
          >
            Tweet
          </a>
        </div>
      </body>
    </html>
  );
}
