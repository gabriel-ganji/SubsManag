import Navbar from "./navbar";
import Footer from "./footer";
import Hist from "./history";
import Spending from "./spending";

const Main = () => {

  return (
    <>
      <Navbar />
      <div className="sm:p-12">
        <Spending />
        <Hist />
        <Footer />
      </div>
    </>
  )
}

export default Main;