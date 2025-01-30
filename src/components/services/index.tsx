import { Link } from "react-router-dom";
import { FaFigma } from "react-icons/fa";
import { SiPrime } from "react-icons/si";
import { SiAppletv } from "react-icons/si";
import { BsDropbox } from "react-icons/bs";
import { SiNetflix } from "react-icons/si";
import { ReactNode, useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoArrowBack, IoOptionsOutline } from "react-icons/io5";

type ServicesType = {
  logo: ReactNode;
  name: string;
  description: string;
  price: string;
}

const Services = () => {

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
        price: "18,50",
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
      <div className="flex flex-col items-center gap-4 px-4 pt-9 fixed top-0 w-full bg-primary z-10">
        <div className=" flex justify-center items-center w-full">
          <Link to="/" className="absolute left-4">
            <IoArrowBack size="1.5rem" />
          </Link>
          <h4>Services</h4>
        </div>
        <div className="flex items-center shadow-[0px_0px_2px_1px_rgba(255,255,255,0.1)] rounded-md w-full px-2 gap-2 mb-2">
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
      </div>
      <div className="sm:p-12 px-4 flex-col w-full mb-12 mt-[22vh] sm:mt-[10vh]">
        {
          mocked.map((item: ServicesType) => (
            <button className="flex flex-col gap-4 items-left bg-primary-light w-full h-auto mt-2 mb-2 rounded-2xl p-6">
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
                  <h2>{item.price}</h2>
                  <p className="text-primary-ultralight text-sm mb-3">$/month</p>
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