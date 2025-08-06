import Footer from "@/components/footer/footer";
import MainLayout from "@/components/main-layout/main-layout";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { DEFAULT_METADATA } from "@/constants";
import type { Metadata } from "next";
import { Noto_Serif_SC, Roboto_Mono, Roboto_Serif } from "next/font/google";
import Header from "../components/header/header";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  preload: false,
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
        className={`${robotoSerif.variable} ${robotoMono.variable} ${notoSerifSC.variable} antialiased flex flex-col h-screen overflow-hidden w-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <MainLayout>{children}</MainLayout>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
