import { FiMenu } from "react-icons/fi";
import { PiBellSimple } from "react-icons/pi";
import { useState } from "react";
import { TbCoinFilled } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
        <div
          className={
            `flex flex-col fixed top-0 left-0 h-full w-72 bg-primary text-white shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} z-50`
          }
        >
          <div className="w-full flex items-center justify-between p-6">
            <div className="flex gap-2">
              <div className="">
                <FaUserCircle size="1.5rem" />
              </div>
              <p className="text-primary-ultralight">Gabriel Fernandes</p>
            </div>
            <button
              className="top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <IoCloseOutline size="1.5rem" />
            </button>
          </div>
          <nav className="flex flex-col p-6 space-y-4">
            <Link  to="/" className="flex items-center gap-2 p-2 hover:bg-primary-light rounded-md" onClick={() => setIsOpen(false)}>
              <GoHomeFill size="1.5rem" />Home
            </Link>
            <Link to="/services" className="flex items-center gap-2 p-2 hover:bg-primary-light rounded-md">
              <TbCoinFilled size="1.5rem" /> Services
            </Link>
          </nav>
        </div>
      </div>
      <div className="px-4 pt-9 pb-6 flex justify-between items-center w-full bg-primary">
        <button onClick={() => setIsOpen(true)}>
          <FiMenu size="1.5rem" />
        </button>
        <PiBellSimple size="1.25rem" />
      </div>
    </>

  )
}

export default Navbar;