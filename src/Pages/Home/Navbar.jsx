import React from "react";
import AboutUsLinks from "./NavLinks/AboutUsLinks";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            {/* products & Services */}
            <li tabindex="0">
              <a>
                Products & Services
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-base-100 w-screen -right-[500px] dropdown-end  absolute">
                <AboutUsLinks />
              </ul>
            </li>
            {/* Become a client */}
            <li tabindex="0">
              <a>
                Become a Client
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-base-100 w-screen -right-[350px] dropdown-end  absolute">
                <AboutUsLinks />
              </ul>
            </li>
            <li tabindex="0">
              <a>
                Downloads
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-base-100 w-screen -right-[200px] dropdown-end  absolute">
                <AboutUsLinks />
              </ul>
            </li>
            <li tabindex="0">
              <a>
                About Us
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-base-100 w-screen -right-[85px] dropdown-end  absolute">
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
