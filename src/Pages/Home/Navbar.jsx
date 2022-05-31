import React from "react";
import AboutUsLinks from "./NavLinks/AboutUsLinks";
import BeClientLinks from "./NavLinks/BeClientLinks";
import DownloadLinks from "./NavLinks/DownloadLinks";
import ServiceLinks from "./NavLinks/ServiceLinks";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokejinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex="0">
                <a>
                  Products & Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100 w-screen -right-[660px] dropdown-end  absolute z-50">
                  <ServiceLinks />
                </ul>
              </li>
              {/* Become a client */}
              <li tabIndex="0">
                <a>
                  Become a Client
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100 w-screen -right-[480px] dropdown-end  absolute z-50">
                  <BeClientLinks />
                </ul>
              </li>
              <li tabIndex="0">
                <a>
                  Downloads
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100 w-screen -right-[350px] dropdown-end  absolute z-50">
                  <DownloadLinks />
                </ul>
              </li>
              <li tabIndex="0">
                <a>
                  About Us
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100 w-screen -right-[210px] dropdown-end  absolute z-50">
                  <AboutUsLinks />
                </ul>
              </li>
              <li>
                <a className="btn btn-outline">Login</a>
              </li>
              <li>
                <a className="btn btn-primary text-white ml-4">Register</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex="0">
              <a>
                Products & Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 w-screen -right-[660px] dropdown-end  absolute z-50">
                <ServiceLinks />
              </ul>
            </li>
            {/* Become a client */}
            <li tabIndex="0">
              <a>
                Become a Client
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 w-screen -right-[480px] dropdown-end  absolute z-50">
                <BeClientLinks />
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Downloads
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 w-screen -right-[350px] dropdown-end  absolute z-50">
                <DownloadLinks />
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                About Us
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 w-screen -right-[210px] dropdown-end  absolute z-50">
                <AboutUsLinks />
              </ul>
            </li>
            <li>
              <a className="btn btn-outline">Login</a>
            </li>
            <li>
              <a className="btn btn-primary text-white ml-4">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
