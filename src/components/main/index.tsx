import Navbar from "./navbar";
import Footer from "./footer";
import Hist from "./historic";
import Spending from "./spending";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="md:pt-12">
        <Spending />
        <Hist />
        <Footer />
      </div>
    </>
  )
}

export default Main;