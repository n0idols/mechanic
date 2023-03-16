import { League_Spartan, Roboto_Mono, Space_Mono } from "next/font/google";
import Providers from "@/components/Providers";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceg = League_Spartan({
  variable: "--font-spaceg",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto_mono.variable} ${spaceg.variable}`}>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
