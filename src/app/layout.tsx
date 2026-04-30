import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
});

import { MotionProvider } from "@/context/MotionContext";
import { MotionEngineProvider } from "@/components/MotionEngineProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import MotionSwitcher from "@/components/MotionSwitcher";

export const metadata: Metadata = {
  title: "SereneYOLO - Cinematic Portfolio",
  description: "A premium interactive experience using GSAP, Framer Motion, and Lenis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MotionProvider>
            <MotionEngineProvider>
              <MotionSwitcher />
              {children}
            </MotionEngineProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
