import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div class="foot-pannel col">
            <a href="#landing" id="backtotop">
              BACK TO TOP
            </a>
          </div>
        </div>

        <div class="foot-pannel2 row justify-content-center">
          <ul className="col-sm-3 text-center">
            <p>Get to know Us</p>
            <a> home </a>
            <a> about us</a>
            <a> disclaimer</a>
            <a> sitemap</a>
          </ul>
          <ul className="col-sm-3 text-center">
            <p>Contact us as </p>
            <a> Student</a>
            <a> Course instructor</a>
            <a> Company</a>
          </ul>

          <ul className="col-sm-3 text-center">
            <p>Let Us Help You</p>
            <a> Help</a>
            <a> press release </a>
            <a> Resources </a>
            <a> Accessibility Features </a>
            <a> Feedback and Suggestions</a>
            <a> Assistance and support</a>
          </ul>
        </div>
      </div>
      <div className="row">
        <div class="foot-pannel3 col">
          <div class="logoname">
            {" "}
            <h1 style={{position:"relative",right:"30px"}}>SAHYATRI</h1>
          </div>
        </div>
      </div>

      <div class="foot-pannel4">
        <div class="pages">
          <a>Conditions of use</a>
          <a>Privacy Notice</a>
        </div>
        <div class="copyright">
          Copyright © 2023 | Developed By SENTINELS ( IIT-BHU )| Hosted By Gov.
          Jharkhand
        </div>
      </div>
    </footer>
  );
}

export default Footer;
