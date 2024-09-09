"use client";

import Logo from "./ui/Logo";
import SetLanguage from "./ui/SetLanguage";
import SetMode from "./ui/SetMode";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useAppContext } from "@/components/context/Context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const { language } = useAppContext();

  return (
    <nav className="flex items-center justify-between p-4 bg-slate-50 dark:bg-neutral-800">
      {/* 로고 영역 */}
      <div>
        <Logo />
      </div>

      {/* 메뉴 영역 */}
      <div
        className={`flex-1 text-lg mt-2 mx-6 space-x-8 justify-start ${inter.className}`}
      >
        <Link
          href={`/${language}/about`}
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="https://mogumogu.dev/"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          Blog
        </Link>
      </div>

      {/* 버튼 영역 */}
      <div className="flex items-center space-x-4">
        <SetLanguage />
        <SetMode />
      </div>
    </nav>
  );
};

export default Navbar;
