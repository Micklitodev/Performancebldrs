"use client";

import React, { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/icons/logo";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(): JSX.Element {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-purple-300 mb-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center overflow-hidden">
            <LogoIcon size={160} />
          </Link>
          <div className="w-full md:hidden">
            <button
              className="flex items-center float-right mt-2 px-3 py-2 border rounded text-gray-600 border-gray-400 focus:outline-none focus:border-blue-500 focus:text-blue-500 dark:hover:text-blue-400 dark:focus:border-blue-400 dark:focus:text-blue-400"
              onClick={handleDropdownToggle}
            >
              <GiHamburgerMenu size={18} />
            </button>
            {/* Mobile */}
            {isDropdownOpen && (
              <div className="mt-2 absolute right-16">
                <ul className="bg-white border rounded-md shadow-md px-8 py-4 space-y-2">
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
                      className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
                      href="/page/about"
                    >
                      About Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
                      href="/page/projects"
                    >
                      Projects
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
                      href="/page/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Desktop */}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent">
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
                  className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
                  href="/page/about"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
                  href="/page/projects"
                >
                  Projects
                </Link>
              </li> */}
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
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
