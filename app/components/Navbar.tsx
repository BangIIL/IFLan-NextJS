"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    initFlowbite(); // wajib agar toggle bekerja
  }, []);

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-700 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Logo"
          />
          <span className="self-center text-xl font-semibold">
            MyNavbar
          </span>
        </Link>

        {/* Toggle (Mobile) */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>

        {/* Menu */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">

            <li>
              <Link
                href="/"
                className="block py-2 px-3 rounded bg-blue-600 md:bg-transparent md:text-blue-400 md:p-0"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/blog/1"
                className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
