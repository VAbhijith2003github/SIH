import logo1 from "../../images/logo.webp";
import logo2 from "../../images/logosih.webp";
import logo3 from "../../images/logoteam.jpeg";
import "../../styles.css";
const About = () => {
  return (
    <div className="bg">
      <div className="aboutus">
        <h1>About Us </h1>
      </div>
      <div className="container-fluid">
        <div className="row aboutrow">
          <div className="col a col-md-3 col-12">
            <img src={logo1} alt="Government logo" className="logos" />
            <h2>Govt of Jharkhand</h2>
            <p> Administrative authority of Sahyatri</p>
          </div>

          <div className="col a col-md-3 col-12">
            <img
              src={logo2}
              alt="SIH logo"
              className="logos"
              style={{ height: "120px"}  
            }
            />
            <h2>SIH</h2>
            <p>Development Event Host</p>
          </div>

          <div className="col a col-md-3 col-12">
            <img
              src={logo3}
              alt="The Code Crusaders"
              className="logos"
              style={{ borderRadius: "50%", height: "150px" }}
            />
            <h2>The Code Crusaders</h2>
            <p>Development partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
