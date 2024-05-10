import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useCookies} from 'react-cookie'

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cookie,setcookie]  = useCookies(['access_token'])
  

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const loginResult =  await axios.post("https://blogapi-ulcq.onrender.com/login", {
        username,
        password,
      });
      // console.log(loginResult);
      alert("login successfull");
      nav("/");
      setcookie("access_token",loginResult.data.token)
      window.localStorage.setItem("userID",loginResult.data.userID)
      window.localStorage.setItem("token",loginResult.data.token)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName : </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Enter Username..."
          required
        />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter Password..."
          required
        />
        <br /> <br />
        <button>Login</button>
      </form>
      <p>
        Don't have an account <Link to="/register">Register</Link>
      </p>
    </>
  );
};

export default Login;
