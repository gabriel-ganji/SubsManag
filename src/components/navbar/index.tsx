import { FiMenu } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";

function Navbar() {

    return (
      <div className="px-4 py-8 flex justify-between space-around">
        <FiMenu color="#d3d3d3" size="1.5rem" />
        <CiBellOn color="#d3d3d3" size="1.5rem" 
            style={{
                strokeWidth: 1,
              }}
        />
      </div>
    )
  }
  
  export default Navbar;