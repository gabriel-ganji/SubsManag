import { FiMenu } from "react-icons/fi";
import { PiBellSimple } from "react-icons/pi";

function Navbar() {

    return (
      <div className="px-4 pt-9 pb-6 flex justify-between items-center">
        <FiMenu size="1.5rem" />
        <PiBellSimple size="1.25rem" />
      </div>
    )
  }
  
  export default Navbar;