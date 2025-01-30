import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoArrowBack, IoOptionsOutline } from "react-icons/io5";
import { servicesInfo } from "../../mocked";
import { ServicesType } from "../../types";

const Services = () => {

  const [isOnMap, setIsOnMap] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (id: string) => {
    setIsOnMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const navigate = useNavigate();
  const handleClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`)
  }

  const servInfo = servicesInfo;

  return (
    <>
      <div className="flex flex-col items-center gap-4 px-4 pt-9 fixed top-0 w-full bg-primary z-10">
        <div className=" flex justify-center items-center w-full">
          <Link to="/" className="absolute left-4">
            <IoArrowBack size="1.5rem" />
          </Link>
          <h4>Services</h4>
        </div>
        <div className="flex items-center border border-primary-extralight rounded-md w-full px-2 gap-2 mb-2">
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
          servInfo.map((item: ServicesType) => (
            <div key={item.id} className="flex flex-col gap-4 items-left bg-primary-light w-full h-auto mt-2 mb-2 rounded-2xl p-6" onClick={() => handleClick(item.id)}>
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
                  onClick={(event) => {
                    event.stopPropagation();
                    handleToggle(item.id);
                  }}
                  className={
                    `relative w-10 h-5 flex items-center rounded-full px-[2px] py-[12px] transition-colors ${isOnMap[item.id] ? "bg-green-500" : "bg-primary-ultralight"
                    }`}
                >
                  <div
                    className={
                      `w-5 h-5 rounded-full shadow-md transform transition-transform ${isOnMap[item.id] ? "translate-x-4 bg-white" : "translate-x-0 bg-primary"
                      }`}
                  />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Services;