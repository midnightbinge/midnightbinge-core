import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MakhanaFloat } from "@/components/MakhanaFloat";
import { Analytics } from "@/components/Analytics";

export const viewport: Viewport = {
  themeColor: "#060b28",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Midnight | Better Feels Good.",
    template: "%s | Midnight"
  },
  description: "Premium makhana snacks crafted for real moments. Roasted in olive oil, seasoned with care. Honest ingredients for your quietest hours.",
  metadataBase: new URL("https://midnightbinge.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://midnightbinge.com",
    siteName: "Midnight Binge",
    title: "Midnight | Better Feels Good.",
    description: "Premium makhana snacks crafted for real moments. Roasted in olive oil, seasoned with care.",
    images: [
      {
        url: "/assets/logo-tm-white.png",
        width: 1200,
        height: 630,
        alt: "Midnight Binge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midnight | Better Feels Good.",
    description: "Premium makhana snacks crafted for real moments.",
    images: ["/assets/logo-tm-white.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body className={`antialiased font-body selection:bg-accent selection:text-white`}>
        <ThemeProvider>
          <Analytics />
          <MakhanaFloat />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
