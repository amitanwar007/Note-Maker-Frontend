import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
function Signin() {
  const [detail, setDetail] = useState({ Email: "", Password: "" });
  const navigate = useNavigate();
  
  function signIn(e) {
    e.preventDefault();
    if (!detail.Email || !detail.Password) {
      alert("All Fields are mandatory");
    } else {
      setTimeout(() => {
        alert("Login Successfull");
        navigate("/addnotes");
      }, 500);
    }
  }
  function onRegister() {
    navigate("/register");
  }
  return (
    <div className={"signin-container"}>
       <h1>Sign In</h1>
      <form>
      <div className="input">
      <label htmlFor="email">Email</label><br />
        <input  placeholder="Email" type={"email"}  onChange={(e) => {setDetail({ ...detail, Email: e.target.value })}}/>
        </div>

        <div className="input">
          <label htmlFor="password">Password</label><br />
        <input placeholder="Password" onChange={(e) => {setDetail({ ...detail, Password: e.target.value })}}  /><br/>
        <input type="checkbox" />Remember me<br />
        </div>
   
          
          <button className="btn" onClick={(e) => {signIn(e)}}>  Login </button>
          <p className="forget-password"> <span style={{color:"grey"}}>Forget </span>Password?</p>
          <button className="register_btn" onClick={(e) => {onRegister() }} >  Goto Register Page </button>
          
      </form>
    </div>
  );
}

export default Signin;
