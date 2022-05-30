import React from "react";

const ServiceLinks = () => {
  return (
    <div className="flex justify-around">
      <img
        src="https://i.ibb.co/gt56tcG/Untitled-design-2.png"
        className="w-56"
        alt=""
      />
      <ul className="grid grid-cols-3 items-start">
        <li>
          <a className="text-primary">Coppertech Industries Ltd.</a>
          <ul>
            <li>
              <a>Prospectus</a>
            </li>
            <li>
              <a>Abridged Version</a>
            </li>
          </ul>
        </li>

        <li>
          <a className="text-primary">Oimex electrode Limited</a>
          <ul>
            <li>
              <a>Prospectus</a>
            </li>
            <li>
              <a>IPO Application Process</a>
            </li>
            <li>
              <a>List of IPO Applicants</a>
            </li>
            <li>
              <a>IPO result</a>
            </li>
          </ul>
        </li>

        <li>
          <a className="text-primary">Zaheen Spinnin Ltd</a>
          <ul>
            <li>
              <a>Prospectus</a>
            </li>
            <li>
              <a>Abridged Version</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ServiceLinks;
