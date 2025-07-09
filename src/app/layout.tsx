import AppBar from "@/components/ui/app-bar";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import ClientInit from "@/components/ui/init";
import { cn } from "@/utils/cn";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

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
    "خرید لباس در قائمشهر",
    "خرید لباس در قائم شهر",
    "ساده",
    "خرید لباس",
    "فروشگاه پوشاک D2",
    "d2collection",
    "تومان",
    "فروشگاه D2",
  ],
  applicationName: "فروشگاه پوشاک D2",
  publisher: "شرکت داده کاو وب",
  metadataBase: new URL("https://azcpcf-d-2.vercel.app"),
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
    url: "https://azcpcf-d-2.vercel.app",
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
    enamad: "۴۴۳۱۲۹۶۴",
    author: "azcpcf",
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
      <body className="antialiased">
        <ClientInit>
          <Header />
          {children}
          <Footer />
          <AppBar />
        </ClientInit>
      </body>
    </html>
  );
}
