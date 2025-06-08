import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/components/context/Context";
import ThemeWrapper from "@/components/ui/ThemeWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mogumogu's docs",
  description:
    "A comprehensive collection of developer documentation resources I have studied and will study across various technologies and languages.",
  icons: {
    icon: `/images/icons8-document-white.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeWrapper>
          <AppProvider>
            <div>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </AppProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
