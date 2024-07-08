"use client";

import { useAppContext } from "@/components/context/Context";

const SetLanguage = () => {
  const { language, setLanguage } = useAppContext();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
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
