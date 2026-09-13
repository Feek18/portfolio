import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
    description: "Frontend focused developer currently working remotely with Ruby on Rails and Hotwire. I care most about design — from Figma to production code.",
    siteName: "Fikri Bintang Achmada Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fikri Bintang Achmada | Frontend Developer & UI/UX Designer",
    description: "Frontend focused developer currently working remotely with Ruby on Rails and Hotwire. I care most about design — from Figma to production code.",
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
        className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-surface text-on-surface antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
