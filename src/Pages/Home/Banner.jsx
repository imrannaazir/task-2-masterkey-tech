import React from "react";

const Banner = ({ banner: { img, subtitle, title } }) => {
  return (
    <div className="h-screen -z-50 relative">
      <img src={img} alt="" />
      <div className="absolute top-[40%] left-[10%] flex flex-col">
        <span className="text-lg border-b-4 border-orange-500">{subtitle}</span>
        <span className="text-5xl font-bold">{title}</span>
      </div>
    </div>
  );
};

export default Banner;
