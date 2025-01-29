import { IoArrowBack } from "react-icons/io5";

function Navbar() {

    return (
      <div className="px-4 pt-9 pb-6 flex justify-center items-center fixed top-0 w-full">
        <IoArrowBack size="1.5rem" className="absolute left-4"/>
        <h4>Services</h4>
      </div>
    )
  }
  
  export default Navbar;