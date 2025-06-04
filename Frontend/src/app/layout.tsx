import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Components and Layout",
  description: "side til at kunne hente componenter se layout osv.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/IMG/favicons/favicon-light.png',
        href: '/IMG/favicons/favicon-light.png'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/IMG/favicons/favicon-dark.png',
        href: '/IMG/favicons/favicon-dark.png'
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
