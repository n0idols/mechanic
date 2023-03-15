import {
  Inter,
  Roboto_Mono,
  Space_Grotesk,
  League_Spartan,
} from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import "./globals.css";

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
          {/* <Navbar /> */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
