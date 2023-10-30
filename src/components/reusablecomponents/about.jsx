import Temp_logo from "../../images/temp_logo.webp";
import "./about.css";
const About = () => {
    return (

        <div className="bg">
            <div className="temp0">
                <h1>About Us </h1>
            </div>
            <div className="container-fluid temp1">
                <div className="row temp2">
                    <div className="col a col-md-3 col-12">
                        <img src={Temp_logo} alt="temp logo" className="img-fluid rounded-circle logo"/>
                        <h2>Govt of jharkhand</h2>
                        <p>Text goes here </p>
                    </div>

                    <div className="col a col-md-3 col-12">
                        <img src={Temp_logo} alt="temp logo"  className="img-fluid rounded-circle logo" />
                        <h2>Govt of jharkhand</h2>
                        <p>Text goes here </p>
                    </div>

                    <div className="col a col-md-3 col-12">
                        <img src={Temp_logo} alt="temp logo"  className="img-fluid rounded-circle logo" />
                        <h2>Govt of jharkhand</h2>
                        <p>Text goes here </p>
                    </div>
                </div>
            </div>

        </div>

   )
}

export default About;
