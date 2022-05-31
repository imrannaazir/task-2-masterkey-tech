import {
  faComputer,
  faTrainTram,
  faUserDoctor,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import React from "react";

const Analytics = () => {
  const infos = [
    {
      id: 1,
      name: "Team Members",
      logo: faUserDoctor,
      quantity: 125,
    },
    {
      id: 2,
      name: "Projects Done",
      logo: faComputer,
      quantity: 490,
    },
    {
      id: 3,
      name: "New Equipments",
      logo: faTrainTram,
      quantity: 630,
    },
    {
      id: 1,
      name: "Happy Customers",
      logo: faUsers,
      quantity: 550,
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4  ">
      {infos.map((info, i) => (
        <div key={i}>
          <div
            className=" flex flex-col items-center gap-4  m-2 py-6  uppercase bg-white rounded-lg"
            key={info.id}
          >
            <FontAwesomeIcon
              className="text-5xl text-gray-600"
              icon={info.logo}
            />
            <span className="text-3xl text-primary">
              <CountUp duration={5} end={info.quantity} delay={2} />
              <span>+</span>
            </span>
            <p className="text-xl text-black">{info.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
