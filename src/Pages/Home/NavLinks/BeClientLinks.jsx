import React from "react";

const BeClientLinks = () => {
  return (
    <div className="lg:flex justify-around">
      <img
        src="https://i.ibb.co/hKzdgpW/client.jpg"
        className="w-56 hidden lg:block"
        alt=""
      />
      <ul className="lg:grid grid-cols-3">
        <li>
          <a>Bangladeshi Individuals</a>
        </li>
        <li>
          <a>Bangladeshi Institutions</a>
        </li>
        <li>
          <a>Foreign Investors</a>
        </li>
        <li>
          <a>NRBs</a>
        </li>
        <li>
          <a>Foreign Individuals</a>
        </li>
        <li>
          <a>Foreign Institution</a>
        </li>
        <li>
          <a>Bangladeshi Investors</a>
        </li>
      </ul>
    </div>
  );
};

export default BeClientLinks;
