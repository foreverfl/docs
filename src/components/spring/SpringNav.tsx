"use client";

import React, { useEffect, useState } from "react";
import "./css/site.css";
import SpringNavMenu from "./SpringNavMenu";

interface NavItem {
  content: string;
  url?: string;
  items?: NavItem[];
}

const SpringNav: React.FC<{ onProjectSelect: (project: string) => void }> = ({
  onProjectSelect,
}) => {
  const [navigationData, setNavigationData] = useState<NavItem[]>([]);

  const handleItemClick = (content: string) => {
    onProjectSelect(content);
  };

  useEffect(() => {
    const isSidebarClosed =
      localStorage && localStorage.getItem("sidebar") === "close";
    if (isSidebarClosed) {
      document.body.classList.add("nav-sm");
    }

    fetch("/api/spring-nav-data")
      .then((response) => response.json())
      .then((data) => setNavigationData(data));
  }, []);

  return (
    <div className="nav-container">
      <aside className="nav">
        <div className="panels">
          <div className="nav-panel-menu is-active" data-panel="menu">
            <nav className="nav-menu">
              <SpringNavMenu
                navigation={navigationData}
                onItemClick={handleItemClick}
              />
              <div className="toggle-sm">
                <button id="nav-toggle-2" className="nav-toggle"></button>
              </div>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SpringNav;
