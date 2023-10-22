import React, { useState } from "react";
import "../../styles.css";

const Navbarcomp=()=>{
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  return (
    <div class="topnav" id="myTopnav">
  <a href="/" className="navitem">HOME</a>
  <a href="/courses" className="navitem">COURSES</a>
  <a href="/administration" className="navitem">ADMINISTRATION</a>
  <a href="#about" className="navitem">CONTACT</a>
  <a id="searchbar"><input type="text" className="search-bar"/></a>
  <a href="#about" className="navitem">SIGN IN</a>
  <a href="javascript:void(0);" class="icon" onClick={myFunction} >
    <i class="fa fa-bars"></i>
  </a>
</div>
  );
}

export default Navbarcomp;
