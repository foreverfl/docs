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
      setMaxHeight(cardRef.current.clientHeight);
    }
  }, [setMaxHeight]);

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-neutral-900 rounded-lg shadow-2xl p-4 flex flex-col dark:text-white"
      style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
    >
      <h2 className="text-xl font-bold text-left mb-4 truncate">
        {title[language as keyof typeof title]}
      </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="flex flex-wrap gap-2 sm:space-x-2 text-sm w-full lg:w-3/5 justify-start">
                {item.label}
              </div>
              <div className="flex flex-wrap gap-2 sm:space-x-2 text-sm w-full lg:w-2/5 justify-start">
                {item.links.map((link, idx) =>
                  link.url === "#" ? (
                    <span
                      key={idx}
                      className="text-gray-400 cursor-not-allowed"
                    >
                      {link.lang}
                    </span>
                  ) : (
                    <a
                      key={idx}
                      href={link.url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.lang}
                    </a>
                  )
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
