import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://blogapi-ulcq.onrender.com/users", {
        username,
        password,
      });
      alert("User Registered");
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Register User</h1>
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
        <button>Register</button>
      </form>
      <p>
        Already having an account <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default Register;
