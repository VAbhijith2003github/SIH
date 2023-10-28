import "../../styles.css";
import Header from "../reusablecomponents/header";
// import Navbar from "../reusablecomponents/navbar";
// import Banner from "../reusablecomponents/banner";
// import Vision from "../reusablecomponents/vision";
// import Features from "../reusablecomponents/features";
// import Resources from "../reusablecomponents/resource";
// import AboutUs from "../reusablecomponents/header";
import Footer from "../reusablecomponents/footer";
import landingimg from "../../images/landingimg.jpg";
import Navbarcomp from "../reusablecomponents/navbar";

const HomePage = () => {
  return (
    <>
      <section className="landing" id="landing">
        <Header />
        <Navbarcomp />
        <img src={landingimg} alt="" className="landingimg" id="landingimg" />
        <div className="banner">
        <p style={{fontSize:"3.5rem",color:"white"}} className="bannertext">"ACCESIBILITY TO EDUCATION IS A BASIC HUMAN RIGHT"</p>
        </div>
      </section>
      {/* <Navbar/>
        <div>
        <Banner/>
        </div>
        <Vision/>
        <Features/>
        <Resources/>
        <AboutUs/> */}
        <Footer/> 
    </>
  );
};

export default HomePage;
