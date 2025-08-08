import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClientSure - Secure Your Business Success",
  description:
    "Comprehensive business solutions that protect, optimize, and grow your company. Cybersecurity, cloud infrastructure, analytics, and 24/7 support.",
  keywords: "business security, cybersecurity, cloud infrastructure, business analytics, IT support",
  authors: [{ name: "ClientSure Team" }],
  openGraph: {
    title: "ClientSure - Secure Your Business Success",
    description: "Comprehensive business solutions that protect, optimize, and grow your company.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
