import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://borngreat.dev"),
  title: {
    template: "%s | Borngreat Opoku",
    default: "Borngreat Opoku — Independent Developer & Technology Builder",
  },
  description:
    "I'm Borngreat Opoku, an independent developer building sophisticated websites, intelligent digital solutions and innovative products that help businesses move forward.",
  keywords: [
    "Borngreat Opoku",
    "BorgTech",
    "web developer",
    "website development",
    "AI solutions",
    "digital product development",
    "frontend developer",
    "creative technologist",
  ],
  authors: [{ name: "Borngreat Opoku" }],
  creator: "Borngreat Opoku",
  publisher: "Borngreat Opoku",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Borngreat Opoku — Independent Developer & Technology Builder",
    description:
      "I'm Borngreat Opoku, an independent developer building sophisticated websites, intelligent digital solutions and innovative products that help businesses move forward.",
    siteName: "BorgTech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Borngreat Opoku - BorgTech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borngreat Opoku — Independent Developer & Technology Builder",
    description:
      "I'm Borngreat Opoku, an independent developer building sophisticated websites, intelligent digital solutions and innovative products that help businesses move forward.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070B14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-white selection:bg-primary selection:text-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
