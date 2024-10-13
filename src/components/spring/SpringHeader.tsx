"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "./css/site.css";

const SpringHeader: React.FC = () => {
  useEffect(() => {
    const activateSwitch = (control: HTMLInputElement | null) => {
      if (!control) return;
      control.checked =
        document.documentElement.classList.contains("dark-theme");
      control.addEventListener("change", onThemeChange.bind(control));
    };

    const onThemeChange = function (this: HTMLInputElement) {
      const isDarkMode = this.checked;
      document.documentElement.classList.toggle("dark-theme", this.checked);
      document.documentElement.setAttribute(
        "data-theme",
        this.checked ? "dark" : "light"
      );
      saveTheme(this.checked ? "dark" : "light");

      const logoTextElements = document.querySelectorAll(".st1");
      logoTextElements.forEach((el) => {
        (el as SVGPathElement).style.fill = isDarkMode ? "#FFFFFF" : "#000000";
      });

      if (isDarkMode) {
        this.parentElement?.classList.add("active");
      } else {
        this.parentElement?.classList.remove("active");
      }
    };

    const saveTheme = (theme: string) => {
      if (window.localStorage) {
        window.localStorage.setItem("theme", theme);
      }
    };

    // 활성화 함수 호출
    const checkbox = document.getElementById(
      "switch-theme-checkbox"
    ) as HTMLInputElement | null;
    activateSwitch(checkbox);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://spring.io">
            <Image
              id="springlogo"
              className="block"
              src="/spring/img/spring-logo.svg"
              alt="Spring"
              width={250}
              height={45}
            />
          </a>
          <button className="navbar-burger" data-target="topbar-nav">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div id="topbar-nav" className="navbar-menu">
          <div className="navbar-end">
            {/* Dropdown sections for each menu item */}
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#">
                Why Spring?
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="https://spring.io/why-spring">
                  개요
                </a>
                <a
                  className="navbar-item"
                  href="https://spring.io/microservices"
                >
                  마이크로서비스
                </a>
                <a className="navbar-item" href="https://spring.io/reactive">
                  리액티브
                </a>
                {/* More items... */}
              </div>
            </div>

            {/* Repeat similar structure for other menu items */}
            {/* Learn */}
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#">
                Learn
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="https://spring.io/learn">
                  개요
                </a>
                <a className="navbar-item" href="https://spring.io/quickstart">
                  빠른 시작
                </a>
                {/* More items... */}
              </div>
            </div>

            {/* Projects */}
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#">
                Projects
              </a>
              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  href="https://spring.io/projects/spring-boot"
                >
                  Spring Boot
                </a>
                {/* More items... */}
              </div>
            </div>

            {/* More dropdowns as per the content */}

            {/* Theme Toggle */}
            <label className="theme-toggler" htmlFor="switch-theme-checkbox">
              <input
                type="checkbox"
                id="switch-theme-checkbox"
                name="switch-theme-checkbox"
              />
              <span className="icon">
                {/* Moon Icon */}
                <svg
                  aria-hidden="true"
                  className="svg-inline--fa fa-moon moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                  ></path>
                </svg>
                {/* Sun Icon */}
                <svg
                  aria-hidden="true"
                  className="svg-inline--fa fa-sun sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
                  ></path>
                </svg>
              </span>
              <span className="text">light</span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SpringHeader;
