import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fikri Bintang Achmada | Frontend Developer & UI/UX Designer",
  description: "Personal portfolio of Fikri Bintang Achmada, a Software Engineering fresh graduate from Politeknik Negeri Bali. Specialized in React.js, Tailwind CSS, and Figma.",
  keywords: [
    "Fikri Bintang Achmada",
    "Frontend Developer",
    "UI/UX Designer",
    "Bali Web Developer",
    "React Developer",
    "Next.js Developer",
    "Politeknik Negeri Bali",
    "Remote Developer AU SG"
  ],
  authors: [{ name: "Fikri Bintang Achmada", url: "https://linkedin.com/in/fikriachmada" }],
  creator: "Fikri Bintang Achmada",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://room-production-app.vercel.app",
    title: "Fikri Bintang Achmada | Frontend Developer & UI/UX Designer",
    description: "I turn designs into fast, responsive interfaces — from Figma prototypes to production code.",
    siteName: "Fikri Bintang Achmada Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fikri Bintang Achmada | Frontend Developer & UI/UX Designer",
    description: "I turn designs into fast, responsive interfaces — from Figma prototypes to production code.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
