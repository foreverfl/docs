"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface ProjectData {
  name: string;
  description: string;
  features: string[];
}

const SpringOverview: React.FC<{ selectedProject: string }> = ({
  selectedProject,
}) => {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const lan = pathParts[1];

  const formatProjectName = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const [data, setData] = useState<ProjectData>({
    name: "",
    description: "",
    features: [],
  });

  useEffect(() => {
    const projectSlug = formatProjectName(selectedProject);

    async function fetchData() {
      const res = await fetch(`/api/spring/${projectSlug}`);
      if (res.ok) {
        const jsonData = await res.json();
        setData(jsonData[lan]);
      } else {
        setData({
          name: "No data available",
          description: "The requested data could not be retrieved.",
          features: [],
        });
      }
    }

    fetchData();
  }, [lan, selectedProject]);

  // JSX 반환
  return (
    <>
      <div className="project-content flex flex-col w-full pl-6">
        {/* Features Section */}
        <div className="pb-4 pt-2">
          <div className="mt-2 mb-4 whitespace-pre-line leading-normal">
            {data.description}
          </div>
          <h2 className="text-xl font-bold mt-4 mb-2">
            {" "}
            {lan === "ko" ? "기능" : lan === "ja" ? "特徴" : "Features"}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.features.map((feature, index) => (
              <li key={index}>
                <code>{feature}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SpringOverview;
