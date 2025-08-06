import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { DEFAULT_METADATA } from "@/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/header/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen mx-auto overflow-hidden px-4 md:max-w-5xl md:px-24 w-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className="flex-1 py-2">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
