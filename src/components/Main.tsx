"use client";

import React, { useState, useEffect, useRef } from "react";
import Card from "@/components/ui/Card";
import sections from "@/components/sections.json";

const Main = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const [sortedSections, setSortedSections] = useState(sections);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateMaxHeight = (height: number) => {
    setMaxHeight((prevMaxHeight) => Math.max(prevMaxHeight, height));
  };

  // 섹션의 아이템을 레이블 순으로 정렬
  useEffect(() => {
    const sortedSections = sections.map((section) => ({
      ...section,
      items: [...section.items].sort((a, b) => a.label.localeCompare(b.label)),
    }));

    setSortedSections(sortedSections);
  }, []);

  useEffect(() => {}, [maxHeight]); // maxHeight의 변경을 감지하여 컴포넌트를 리렌더링하게 만듦

  useEffect(() => {
    // console.log(sortedSections);

    sortedSections.forEach((section, sectionIndex) => {
      section.items.forEach((item, itemIndex) => {
        item.links.forEach((link, linkIndex) => {
          // console.log("sectionIndex:", sectionIndex);
          const card = cardsRef.current[sectionIndex]; // 카드 참조

          if (card) {
            // console.log(item.label);
            const linkElement = card.querySelector(`a[href="${link.url}"]`);

            if (linkElement) {
              if (link.lang.startsWith("**")) {
                linkElement.classList.remove("text-blue-500");
                linkElement.classList.add("text-green-500");
              } else if (link.lang.startsWith("*")) {
                linkElement.classList.remove("text-blue-500");
                linkElement.classList.add("text-orange-500");
              }

              const cleanedLang = link.lang.replace(/\*/g, "");
              linkElement.textContent = cleanedLang;
            }
          }
        });
      });
    });

    // console.log("------------------------------------------");

    // 위로 올라오는 효과
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-20");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [sortedSections]);

  const getRowIndex = (index: number) => Math.floor(index / 4);

  return (
    <main className="p-6 text-center bg-white dark:bg-neutral-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedSections.map((section, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="opacity-0 translate-y-20 transition-all duration-1000 ease-out"
            style={{ transitionDelay: `${getRowIndex(index) * 300}ms` }}
          >
            <Card
              title={section.title}
              items={section.items}
              setMaxHeight={updateMaxHeight}
              maxHeight={maxHeight}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
