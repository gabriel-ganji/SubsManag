import { Link } from "react-router-dom";
import { ServicesType } from "../../types";
import { servicesInfo } from "../../mocked";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoArrowBack, IoOptionsOutline } from "react-icons/io5";
import ServiceCard from "./serviceCard";

const Services = () => {

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
          servicesInfo.map((item: ServicesType) => (
            <ServiceCard info={item} key={item.id} />
          ))
        }
      </div>
    </>
  )
}

export default Services;