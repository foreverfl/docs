import React, { useRef, useEffect, useState } from "react";
import { useAppContext } from "@/components/context/Context";

interface CardProps {
  title: { en: string; ja: string; ko: string };
  items: { label: string; links: { lang: string; url: string }[] }[];
  setMaxHeight: (height: number) => void;
  maxHeight: number;
}

const Card: React.FC<CardProps> = ({
  title,
  items,
  setMaxHeight,
  maxHeight,
}) => {
  const { language } = useAppContext();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const links = cardRef.current.querySelectorAll("ul > li > div > div > a");
      links.forEach((link) => {
        let content = link.textContent;
        if (content?.includes("**")) {
          link.classList.replace("text-blue-500", "text-green-500");
          link.textContent = content.replace(/\*\*/g, "");
        } else if (content?.includes("*")) {
          link.classList.replace("text-blue-500", "text-orange-500");
          link.textContent = content.replace(/\*/g, "");
        }
      });
    }
  }, [items]);

  useEffect(() => {
    if (cardRef.current) {
      setMaxHeight(cardRef.current.clientHeight);
    }
  }, [setMaxHeight]);

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-lg shadow-2xl p-4 flex flex-col"
      style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
    >
      <h2 className="text-xl font-bold text-left mb-4 truncate">
        {title[language as keyof typeof title]}
      </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="flex flex-row sm:justify-between sm:items-center">
              <div className="flex gap-2 sm:space-x-2 text-sm w-1/2 md:w-1/2 lg:w-7/12 text-left">
                <span className="truncate w-full" title={item.label}>
                  {item.label}
                </span>
              </div>
              <div className="flex gap-2 sm:space-x-2 text-sm w-1/2 md:w-1/2 lg:w-5/12 justify-center">
                {item.links.map((link, idx) => (
                  <a
                    key={`${item.label}-${idx}`}
                    href={link.url}
                    className={`${
                      link.url === "#"
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-500"
                    } w-1/3 truncate sm:text-clip	`}
                    target={link.url === "#" ? "_self" : "_blank"} // href가 "#"인 경우 새 탭 열지 않음
                    rel="noopener noreferrer"
                  >
                    {link.lang}
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
