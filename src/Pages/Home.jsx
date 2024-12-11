import Newarrival from "../component/Newarrival";
import Topselling from "../component/Topselling";
import Dressstyle from "../component/Dressstyle";
import Customer from"../component/Customer";
import Footer from "../component/Footer";
import Banner from "../component/Banner.jsx";
import "../styles/Banner.css"


function Home() {
 
  return (
    <>

      <Banner />
      <Newarrival />
      {/* <div className="button1">
        <button>View All</button>
      </div> */}
      <div>
        <h1 className="heading">TOP SELLING</h1>
      </div>
      <div className="images2">
        <Topselling />
        
      </div>
      {/* <div className="button1">
        <button>View All</button>
      </div> */}
      <div className="images3">
        <Dressstyle />
      </div>
      <div className="images5">
      <Customer/>
       </div>
      <div className="images4">
        <Footer />
 </div>   
    </>
  );
}

export default Home;
