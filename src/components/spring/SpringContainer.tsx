"use client";

import React, { useEffect, useState } from "react";
import SpringNav from "@/components/spring/SpringNav";
import SpringMain from "@/components/spring/SpringMain";

const SpringLayout: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>("Spring Boot");

  return (
    <div className="flex">
      <div className="w-1/4 min-w-[200px] overflow-x-hidden overflow-y-auto ">
        <SpringNav onProjectSelect={setSelectedProject} />
      </div>
      <div className="w-3/4 overflow-y-auto">
        <SpringMain selectedProject={selectedProject} />
      </div>
    </div>
  );
};

export default SpringLayout;
