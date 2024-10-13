"use client";

import React, { useState } from "react";
import Overview from "@/components/spring/tab/SpringOverview";
import Learn from "@/components/spring/tab/SpringLearn";
import "./css/site.css";

const SpringMain: React.FC<{ selectedProject: string }> = ({
  selectedProject,
}) => {
  // 탭 상태 관리
  const [selectedTab, setSelectedTab] = useState<string>("Overview");

  // 현재 선택된 탭에 맞는 컴포넌트를 렌더링
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview selectedProject={selectedProject} />;
      case "Learn":
        return <Learn selectedProject={selectedProject} />;
      default:
        return <Overview selectedProject={selectedProject} />;
    }
  };

  return (
    <div className="project-content flex flex-col w-full pl-6">
      {/* 프로젝트명 및 링크 */}
      <h1 className="text-3xl mb-5 pb-3 font-bold flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-4">{selectedProject}</span>
          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
            GA
          </span>
        </div>

        <div className="flex space-x-4">
          <a
            href="http://github.com/spring-projects/spring-kafka"
            title="Github"
            aria-label="Github"
            className="group transition-colors duration-200"
          >
            <svg
              id="github-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 75.93 75.93"
              width="32"
              height="32"
            >
              <path
                className="fill-current text-gray-900 group-hover:text-[#6db33f]"
                d="M38,0a38,38,0,1,0,38,38A38,38,0,0,0,38,0Z"
              />
              <path
                className="fill-current text-white"
                d="M38,15.59A22.95,22.95,0,0,0,30.71,60.3c1.15.21,1.57-.5,1.57-1.11s0-2,0-3.9c-6.38,1.39-7.73-3.07-7.73-3.07A6.09,6.09,0,0,0,22,48.86c-2.09-1.42.15-1.39.15-1.39a4.81,4.81,0,0,1,3.52,2.36c2,3.5,5.37,2.49,6.67,1.91a4.87,4.87,0,0,1,1.46-3.07c-5.09-.58-10.45-2.55-10.45-11.34a8.84,8.84,0,0,1,2.36-6.15,8.29,8.29,0,0,1,.23-6.07s1.92-.62,6.3,2.35a21.82,21.82,0,0,1,11.49,0c4.38-3,6.3-2.35,6.3-2.35a8.29,8.29,0,0,1,.23,6.07,8.84,8.84,0,0,1,2.36,6.15c0,8.81-5.37,10.75-10.48,11.32a5.46,5.46,0,0,1,1.56,4.25c0,3.07,0,5.54,0,6.29s.42,1.33,1.58,1.1A22.94,22.94,0,0,0,38,15.59Z"
              />
            </svg>
          </a>

          <a
            href="https://stackoverflow.com/questions/tagged/spring-kafka"
            title="Stack Overflow"
            aria-label="Stack Overflow"
            className="hover:text-[#6db33f] transition-colors duration-200"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="stack-overflow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="32"
              height="32"
              aria-label="Stack Overflow"
            >
              <path
                fill="currentColor"
                d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
              ></path>
            </svg>
          </a>
        </div>
      </h1>

      {/* Navigation Tabs */}
      <div className="bg-[#ebf2f2] my-5 px-3 h-16 flex items-center">
        <ul className="flex space-x-4 h-[96%] justify-center">
          {["Overview", "Learn"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer flex items-center mt-1 ${
                selectedTab === tab
                  ? "bg-white border-t-[4px] border-[#6db33f] font-bold"
                  : ""
              }`}
            >
              <a
                onClick={() => setSelectedTab(tab)}
                className={`${
                  selectedTab === tab
                    ? "text-[#111] font-bold"
                    : "text-gray-600 hover:text-blue-600 font-bold"
                } py-[18px] px-[20px]`}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="pb-4 pt-2">
        <div className="prose">
          {renderTabContent()} {/* 현재 선택된 탭에 따라 컴포넌트 렌더링 */}
        </div>
      </div>
    </div>
  );
};

export default SpringMain;
