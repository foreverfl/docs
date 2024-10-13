import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppProvider } from "@/components/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mogumogu's docs",
  description:
    "A comprehensive collection of developer documentation resources I have studied and will study across various technologies and languages.",
  icons: {
    icon: "/images/icons8-document-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <AppProvider>
            <div>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
