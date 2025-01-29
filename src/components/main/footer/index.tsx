import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { PiPlus } from "react-icons/pi";

function Footer() {

  return (
    <div className="px-12 pt-2 pb-6 flex justify-between space-around absolute bottom-0 left-0 w-full bg-primary h-[auto]">
      <button>
        <GoHomeFill size="1.5rem" />
      </button>
      <button className="flex items-center justify-center bg-gray-100 font-extralight text-black text-[1.5rem] w-[3rem] h-[3rem] rounded-full">
        <PiPlus />
      </button>
      <button className="text-primary-extralight">
        <FaUser size="1.15rem" />
      </button>
    </div>
  )
}

export default Footer;