"use client";

import { useAppContext } from "@/components/context/Context";
import { useRouter } from "next/navigation";

const SetLanguage = () => {
  const { language, setLanguage } = useAppContext();
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(e.target.value);

    // 현재 경로에서 언어 경로를 변경하여 리다이렉트
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(
      /^\/(en|ja|ko)/,
      `/${selectedLanguage}`
    );
    router.push(newPath); // 새로운 언어 경로로 리다이렉트
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="p-2 text-black dark:text-white bg-gray-200 dark:bg-neutral-900 rounded"
    >
      <option value="en">English</option>
      <option value="ja">日本語</option>
      <option value="ko">한국어</option>
    </select>
  );
};

export default SetLanguage;
