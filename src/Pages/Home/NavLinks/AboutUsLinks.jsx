import React from "react";

const AboutUsLinks = () => {
  return (
    <div className="lg:flex justify-around">
      <img
        src="https://i.ibb.co/NZgfQVC/Untitled-design-42.jpg"
        className="w-56 hidden lg:block"
        alt=""
      />
      <ul className="lg:grid lg:grid-cols-3">
        <li>
          <a>Capital Profile</a>
        </li>
        <li>
          <a>Mission And Vision</a>
        </li>
        <li>
          <a>Board of Directors</a>
        </li>
        <li>
          <a>Management/Executive</a>
        </li>
        <li>
          <a>Circulation</a>
        </li>
        <li>
          <a>Career Opportunity</a>
        </li>
        <li>
          <a>Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default AboutUsLinks;
