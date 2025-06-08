import React, { useRef, useEffect, useState } from "react";
import { useAppContext } from "@/components/context/Context";

interface CardProps {
  title: string;
  items: {
    label: string;
    link: string;
    translatable: boolean;
  }[];
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
      <h2 className="text-xl font-bold text-left mb-4 truncate">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="flex flex-row sm:justify-between sm:items-center">
              <div className="flex gap-2 sm:space-x-2 text-sm w-1/2 md:w-1/2 lg:w-7/12 text-left">
                {/* title & link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate w-full text-blue-500 font-medium hover:underline"
                  title={item.label}
                >
                  {item.label}
                </a>
              </div>
              <div className="flex gap-2 sm:space-x-2 text-sm w-1/2 md:w-1/2 lg:w-5/12 justify-end">
                {/* translatable */}
                <span
                  className={`ml-4 px-2 py-1 rounded-full text-xs font-bold ${
                    item.translatable
                      ? "bg-green-200 text-green-700 border border-green-400"
                      : "bg-red-200 text-red-700 border border-red-400"
                  }`}
                  title={item.translatable ? "번역 지원" : "번역 미지원"}
                >
                  {item.translatable ? "●" : "●"}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
