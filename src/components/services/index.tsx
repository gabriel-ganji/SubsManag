import Navbar from "./navbar";
import { IoOptionsOutline } from "react-icons/io5";
import { PiMagnifyingGlassLight } from "react-icons/pi";

import { ReactNode, useState } from "react";
import { SiAppletv } from "react-icons/si";
import { BsDropbox } from "react-icons/bs";
import { SiPrime } from "react-icons/si";
import { SiNetflix } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

type ServicesType = {
  logo: ReactNode
  name: string
  description: string
  price: string
}

function Services() {

  const [isOn, setIsOn] = useState(false);

  const mocked: ServicesType[] = (
    [
      {
        logo: <SiAppletv />,
        name: "Apple TV",
        description: "Premium Family",
        price: "20",
      },
      {
        logo: <BsDropbox />,
        name: "Dropbox",
        description: "Business Plus",
        price: "18.50",
      },
      {
        logo: <SiNetflix />,
        name: "Netflix",
        description: "Premium",
        price: "9,99",
      },
      {
        logo: <FaFigma />,
        name: "Figma",
        description: "Stream",
        price: "12,00",
      },
      {
        logo: <SiPrime />,
        name: "Amazon Prime",
        description: "Student",
        price: "9,99",
      },
    ]
  );

  return (
    <>
      <Navbar />
      <div className="sm:p-12 px-4 flex-col">
        <div className="flex items-center shadow-[0px_0px_2px_1px_rgba(255,255,255,0.1)] rounded-md px-2 gap-2 mb-6">
          <PiMagnifyingGlassLight size="1.5rem" />
          <input
            type="text"
            className="w-full h-12 bg-primary focus:outline-none"
            placeholder="Search service..."
          />
          <button>
            <IoOptionsOutline size="1.5rem" />
          </button>
        </div>
        {
          mocked.map((item: ServicesType) => (
            <button className="flex flex-col gap-4 items-left bg-primary-light w-full h-auto mt-2 rounded-xl p-4">
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-start">
                  <h5>{item.name}</h5>
                  <p className="text-sm text-primary-ultralight">{item.description}</p>
                </div>
                <div className="text-[1.5rem] bg-primary-extralight flex w-12 h-12 items-center justify-center rounded-full">
                  {item.logo}
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-end">
                  <h3 className="font-light">{item.price}</h3>
                  <p className="text-primary-ultralight text-sm mb-2">$/month</p>
                </div>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={
                    `relative w-9 h-5 flex items-center rounded-full p-1 transition-colors ${isOn ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={
                      `w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isOn ? "translate-x-3" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </button>
          ))
        }
      </div>
    </>
  )
}

export default Services;