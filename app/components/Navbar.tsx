"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Logo"
          />
          <span className="text-xl font-semibold text-gray-900">
            Flowbite
          </span>
        </Link>

        {/* RIGHT BUTTON */}
        <div className="flex items-center space-x-2 md:order-2">
          <Link
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-200"
          >
            Login
          </Link>

          <Link
            href="#"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
          >
            Sign Up
          </Link>

          <button
            data-collapse-toggle="navbar-menu"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>

        {/* MENU */}
        <div id="navbar-menu" className="hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">

            <li>
              <Link href="/" className="text-blue-600">
                Home
              </Link>
            </li>

            {/* DROPDOWN / MEGA MENU */}
            <li className="relative">
              <button
                data-dropdown-toggle="dropdown-company"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Company
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              {/* DROPDOWN CONTENT */}
              <div
                id="dropdown-company"
                className="hidden absolute z-10 mt-3 w-[280px] bg-white rounded-lg shadow-lg border border-gray-200"
              >
                <div className="grid grid-cols-2 gap-2 p-2 text-sm text-gray-700">

                  {/* COLUMN 1 */}
                  <ul className="space-y-2">
                    <li><a href="#" className="block px-2 py-1 hover:text-blue-600">About</a></li>
                    <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Library</a></li>
                    <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Resources</a></li>
                    <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Pro Version</a></li>
                  </ul>

                  {/* COLUMN 2 */}
                  <ul className="space-y-2">
                    <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Blog</a></li>
                    <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Newsletter</a></li>
                    <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Playground</a></li>
                  </ul>

                </div>
              </div>
            </li>

            <li>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Team
              </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
