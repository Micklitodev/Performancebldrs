"use client";

import React, { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/icons/logo";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-purple-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center overflow-hidden">
            <LogoIcon size={160} />
          </Link>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent ">
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-500  dark:hover:text-blue-400"
                  href="/page/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-500  dark:hover:text-blue-400"
                  href="/page/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-500  dark:hover:text-blue-400"
                  href="/page/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
