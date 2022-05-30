import React from "react";

const DownloadLinks = () => {
  return (
    <div className="flex justify-around">
      <img
        src="https://i.ibb.co/7vQct8b/download.jpg"
        className="w-56"
        alt=""
      />
      <ul className="grid grid-cols-3">
        <li>
          <a className="text-primary">Forms</a>
          <li>
            <a>All Forms</a>
          </li>
        </li>

        <li>
          <a className="text-primary">Notice/Circular</a>
          <li>
            <a>BSEC</a>
          </li>
        </li>

        <li>
          <a className="text-primary">Research</a>
          <li>
            <a>Daily Market Commentary</a>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default DownloadLinks;
