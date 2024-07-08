"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Link href="/" passHref>
        <div className="flex items-center">
          <svg
            className="hidden sm:block w-10 h-10 ps-3 pt-3 text-gray-800 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
            />
          </svg>
          <span className="min-w-32 text-2xl md:text-3xl truncate text-center font-navbar dark:text-slate-50 px-5 select-none">
            mogumogu&#39;s docs
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
