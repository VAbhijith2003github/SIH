import "../../styles.css";
import React from "react";
import bg from "../../images/visionbg.webp";
import google from "../../images/google.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <img src={bg} alt="loginbackground" className="loginpage" />
      <div className="logindiv">
        <h2 style={{ fontWeight: "1000" }}>LOGIN</h2>
        <hr
          style={{
            color: "white",
            height: "5px",
            width: "70%",
            backgroundColor: "white",
            border: "none",
            borderRadius: "5px",
          }}
        />
        <form
          method="POST"
          action="http://localhost:3001/login"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@org.com"
          />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <br />
          <button type="submit" id="loginbutton">
            LOGIN
          </button>
          <button id="signinwithgoogle">
            <img src={google} alt="google"></img>
            <p style={{ position: "relative", top: "5px" }}>
              Login&nbsp;&nbsp;with&nbsp;&nbsp;Google
            </p>
          </button>
        </form>
        <a href="/register" id="createnewaccount">
          Create new account ?
        </a>
      </div>
    </>
  );
};

export default Login;
