import "../../styles.css"
import logo from "../../images/logo.webp"

const Header=()=>{
    return(
    <>
     <div className="header">
        <img src={logo} alt="goverment of Jharkhand logo" className="logo"/>
        <b className="heading">SAHYATRI</b>
        <h5 className="subheading">GOVERNMENT&nbsp;&nbsp;OF&nbsp;&nbsp;JHARKHAND&nbsp;&nbsp;INITIATIVE</h5>
     </div>   
    </>
    );
}

export default Header;