"use client";

// Third-party imports
import { Menu, X } from "@geist-ui/icons";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Local components
import Logo from "./ui/Logo";
import SetLanguage from "./ui/SetLanguage";
import SetMode from "./ui/SetMode";
import { useAppContext } from "@/components/context/Context";

// React hooks
import { useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const pathname = usePathname();
  const allowedPaths = ["/", "/ja/about", "/ko/about", "/en/about"];

  const { language } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!allowedPaths.includes(pathname)) {
    return null;
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-slate-50 dark:bg-neutral-800">
      {/* 로고 영역 */}
      <div>
        <Logo />
      </div>

      {/* 메뉴 영역 */}
      <div
        className={`flex flex-1 text-lg mt-2 mx-6 space-x-8 justify-end sm:justify-start ${inter.className}`}
      >
        <Link
          href={`/${language}/about`}
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="https://mogumogu.dev/"
          className="hidden sm:block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          Blog
        </Link>
      </div>

      {/* 버튼 영역 */}
      <div className="hidden sm:flex items-center space-x-4">
        <SetLanguage />
        <SetMode />
      </div>

      {/* 햄버거 버튼(모바일) */}
      <div className="lg:hidden mt-2 mr-2">
        <Menu
          className={`dark:stroke-white ${
            isMenuOpen ? "stroke-transparent" : "stroke-gray-700"
          }`}
          onClick={toggleMenu}
        />
      </div>

      {/* 전체 화면을 덮는 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }} // 애니메이션 시작 상태
            animate={{ x: 0 }} // 애니메이션 종료 상태
            exit={{ x: "100%" }} // 닫힐 때 상태
            transition={{ duration: 0.5, ease: "easeInOut" }} // 애니메이션 시간 설정
            className="fixed inset-0 z-50 bg-gradient-to-b from-black/70 to-white/90 dark:from-black/90 dark:to-gray-300/60 flex items-start justify-between p-4"
          >
            {/* 메뉴 항목 */}
            <div className="flex space-x-6">
              <SetLanguage />
              <span className="flex items-center">
                <SetMode />
              </span>
            </div>

            {/* 닫기 버튼 */}
            <X
              className="stroke-black-700 dark:stroke-white mt-2 mr-2"
              onClick={toggleMenu}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
