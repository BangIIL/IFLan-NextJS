export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">

        {/* COPYRIGHT */}
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a
            href="https://flowbite.com/"
            className="font-medium text-blue-600 hover:underline hover:text-blue-700 transition"
          >
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>

        {/* MENU */}
        <ul className="flex flex-wrap items-center mt-4 text-sm font-medium text-gray-600 md:mt-0">
          <li>
            <a
              href="#"
              className="mr-4 md:mr-6 hover:text-blue-600 hover:underline transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 md:mr-6 hover:text-blue-600 hover:underline transition"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 md:mr-6 hover:text-blue-600 hover:underline transition"
            >
              Licensing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 hover:underline transition"
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}
