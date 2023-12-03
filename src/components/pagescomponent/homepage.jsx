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
import About from "../reusablecomponents/about";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbarcomp />
      <section className="landing" id="landing">
        {/* <div className="banner">
        <p style={{fontSize:"3.5rem",color:"white"}} className="bannertext">"ACCESIBILITY TO EDUCATION IS A BASIC HUMAN RIGHT"</p>
        </div> */}
      </section>
      <About />
      <Footer />
      {/*<Vision/>
        <Features/>
        <Resources/>
        <AboutUs/> */}
    </>
  );
};

export default HomePage;
