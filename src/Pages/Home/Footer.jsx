import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-base-200 text-base-content">
      <div>
        <h1 className="text-4xl font-bold">LOGO</h1>
        <p>
          MasterKeyTech Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Prospectus</a>
        <a class="link link-hover">Abridged Version</a>
        <a class="link link-hover">IPO Application Process</a>
        <a class="link link-hover">IPO Results</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">Copper Tech Ltd</a>
        <a class="link link-hover">Oimexel Ectrodes</a>
        <a class="link link-hover">Zaheen Spinning Ltd</a>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
