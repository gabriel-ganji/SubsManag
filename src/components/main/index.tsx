import Navbar from "../navbar";
import Footer from "./footer";
import Hist from "./history";
import Spending from "./spending";

function Main() {

    return (
      <>
        <Navbar />
        <Spending />
        <Hist />
        <Footer />
      </>
    )
  }
  
  export default Main;