import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [detail, setDetail] = useState({Email: "", Password: "", cPassword: ""});
  const navigate = useNavigate();
  function signIn() {
    navigate("/");
  }
  function onRegister(e) {
    e.preventDefault();
    if (detail.Password.length < 6) {
      alert("Pasword must contain minimum 6 characters");
    } else if ( !detail.Email || !detail.Password || !detail.cPassword) {
      alert("All Fields are mandatory");
    } else if (detail.cPassword !== detail.Password) {
      alert("Password didnt matched");
    } else {
      setTimeout(() => {
        alert("Registration Successfull, Now You Can Login");
        navigate("/");
      }, 500);
    }
  }
  return (
    <div className={"registeration-container"}>
      <h1>Sign Up</h1>
      <form>
        <div className="input">
        <label htmlFor="email">Email</label><br />
        <input placeholder="Email" type={"email"} onChange={(e) => {setDetail({ ...detail, Email: e.target.value })}}/>
        </div>

        <div className="input">
        <label htmlFor="password">Password</label><br />
        <input placeholder="Password" onChange={(e) => {setDetail({ ...detail, Password: e.target.value })}}/>
        </div>

        <div className="input">
        <label htmlFor="Confirm-Password">Confirm Password</label><br />
        <input placeholder="Confirm Password" onChange={(e) => { setDetail({ ...detail, cPassword: e.target.value })  }}/><br />
        <input type="checkbox" />I agree with term & conditions<br />
        </div>

        <button className="btn" onClick={(e) => {onRegister(e) }}>Register </button>
      </form>
      <button className="signin_btn" onClick={() => {signIn()}} >  Goto Login Page </button>
    </div>
  );
}

export default Register;
