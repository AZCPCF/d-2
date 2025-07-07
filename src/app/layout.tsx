import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.css";
import AppBar from "@/components/ui/app-bar";
import { ClientContextProvider } from "@/contexts/client-context";
import localFont from "next/font/local";
import { cn } from "@/utils/cn";
import { Toaster } from "sonner";

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
  title: "فروش انواع لباس مردانه و بچگانه | فروشگاه پوشاک دی دو",
  description:
    "فروشگاه اینترنتی پوشاک D2 در شمال کشور با تولید انواع لباس و پوشاک مردانه و بچگانه و هدف اصلی فروشگاه دی دو لباس ارزان با کیفیت عالی در مازندران و ارسال و فروش اینترنتی به سایر نقاط کشور است.",
  applicationName: "فروشگاه پوشاک D2",
  publisher: "شرکت داده کاو وب",
  keywords: [
    "پوشاک مردانه",
    "پوشاک بچگانه",
    "کفش و کتونی",
    "men-clothes",
    "shoes-and-sneakers",
    "کتونی",
    "لباس مردانه",
  ],
  // metadataBase: new URL("https://d2collection.com"),
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
    // url: "https://d2collection.com",
    siteName: "فروشگاه پوشاک دی دو",
    locale: "fa-IR",
    // images: [
    //   {
    //     url: "https://d2collection.com/_next/static/media/logo.7e20632b.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "فروشگاه پوشاک دی دو",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "فروشگاه پوشاک دی دو",
    description:
      "فروشگاه اینترنتی پوشاک D2 در شمال کشور با تولید انواع لباس و پوشاک مردانه و بچگانه و هدف اصلی فروشگاه دی دو لباس ارزان با کیفیت عالی در مازندران و ارسال و فروش اینترنتی به سایر نقاط کشور است.",
    // images: ["https://d2collection.com/_next/static/media/logo.7e20632b.png"],
  },
  icons: {
    // icon: "/_next/static/media/logo.7e20632b.png",
  },
  // other: {
  //   "google-site-verification": "EL9Fiday4Iyqg073cWgC5GwhpAzj0F1BrTSuLnbxNdg",
  //   category: "men-clothes , shoes-and-sneakers , کتونی, لباس مردانه",
  //   enamad: "۴۴۳۱۲۹۶۴",
  //   author: "d2collection",
  // },
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
        <Toaster
          position="top-center"
          gap={4}
          duration={2000}
          toastOptions={{
            classNames: {
              toast: "!bg-gray-50",
              title: "text-lg font-bold",
              success: "!text-teal-500",
              error: "!text-red-500",
              warning: "!text-yellow-500",
              info: "!text-blue-500",
              description: "!text-sm !text-zinc-400",
            },
          }}
        />
        <ClientContextProvider>
          <Header />
          {children}
          <Footer />
          <AppBar />
        </ClientContextProvider>
      </body>
    </html>
  );
}
