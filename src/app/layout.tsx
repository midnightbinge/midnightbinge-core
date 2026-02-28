import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AudioProvider } from "@/components/AudioProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MakhanaFloat } from "@/components/MakhanaFloat";

export const metadata: Metadata = {
  title: "Midnight | Better Feels Good.",
  description: "Premium makhana snacks. Made for real moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased font-body`}>
        <ThemeProvider>
          <AudioProvider>
            <MakhanaFloat />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
