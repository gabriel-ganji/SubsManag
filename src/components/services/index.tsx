import { Link } from "react-router-dom";
import ServiceCard from "./serviceCard";
import { ServicesType } from "../../types";
import { servicesInfo } from "../../mocked";
import userServicesActive from "../../user";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoArrowBack, IoOptionsOutline } from "react-icons/io5";

const Services = () => {

  return (
    <>
      <div className="flex flex-col items-center gap-4 px-4 pt-9 fixed md:w-[700px] top-0 w-full bg-primary z-10">
        <div className=" flex justify-center items-center w-full">
          <Link to="/" className="absolute left-4">
            <IoArrowBack size="1.5rem" />
          </Link>
          <h4>Services</h4>
        </div>
        <div className="flex items-center border border-primary-extralight rounded-md w-full px-2 gap-2 mb-2 mt-12">
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
      <div className="md:py-12 px-4 flex-col w-full mb-12 mt-48 md:mt-36">
        {
          servicesInfo.map((servInfo: ServicesType) => {
            const active = userServicesActive.servicesInUse.find((el) => el?.id === servInfo.id);
            if (active) {
              return <ServiceCard info={active} activePlan={true} key={servInfo.id} />;
            } else {
              return <ServiceCard info={servInfo} activePlan={false} key={servInfo.id} />;
            }
          })
        }
      </div>
    </>
  )

}

export default Services;