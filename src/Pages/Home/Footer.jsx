import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <h1 className="text-4xl font-bold">LOGO</h1>
        <p>
          MasterKeyTech Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Prospectus</a>
        <a className="link link-hover">Abridged Version</a>
        <a className="link link-hover">IPO Application Process</a>
        <a className="link link-hover">IPO Results</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">Copper Tech Ltd</a>
        <a className="link link-hover">Oimexel Ectrodes</a>
        <a className="link link-hover">Zaheen Spinning Ltd</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
