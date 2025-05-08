"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const basePath = '/docs';

const SetMode: React.FC = () => {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
  const [isReady, setIsReady] = useState(false); // loading status

  useEffect(() => {
    if (resolvedTheme !== undefined) {
      setIsReady(true);
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(
      theme === "dark" || (systemTheme === "dark" && !theme) ? "light" : "dark"
    );
  };

  if (!isReady) {
    return (
      <div className="animate-pulse">
        <div className="rounded-full bg-gray-400 h-8 w-14"></div>
      </div>
    );
  }

  return (
    <>
      {/* 스위치 컨테이너 */}
      <div
        className="relative inline-block w-14 h-8 select-none cursor-pointer"
        onClick={toggleTheme}
      >
        <input type="checkbox" className="hidden" />
        {/* 스위치 배경 */}
        <div
          className={`rounded-full h-8 bg-gray-400 p-1 transition-colors duration-200 ease-in-out`}
        >
          {/* 스위치 토글 핸들 */}
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
              resolvedTheme === "dark" ? "translate-x-6" : ""
            }`}
          >
            <Image
              src={
                resolvedTheme === "dark"
                  ? `${basePath}/images/moon.png`
                  : `${basePath}/images/sun.png`
              }
              alt={resolvedTheme === "dark" ? "Dark Mode On" : "Dark Mode Off"}
              width={24}
              height={24}
              priority={true}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetMode;
