import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex justify-between items-center h-32 bg-gray-50 border-b-4 z-10">
      <a href="#" className="">
        <Image
          src="/static/images/logo_2x.png"
          width="150"
          height="150"
          alt="Logo Image"
        />
      </a>
      <div className="hidden h-full md:flex lg:flex">
        <ul className="flex flex-col font-medium md:flex-row lg:flex-row h-full gap-4 items-end pb-4 text-gray-500 cursor-pointer">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </div>

      <div className="h-full">
        <ul className="flex h-full gap-4 items-end pb-4 cursor-pointer">
          <li>
            <a>SignIn</a>
          </li>
          <li>
            <a>Register</a>
          </li>
          <li>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="lg:hidden md:hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
