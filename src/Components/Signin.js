import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Signin() {
  const Navigate = useNavigate();
  document.body.style.backgroundColor = "black";
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  const handleChange2 = (e) => {
    setData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  };
  const submission = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post("http://localhost:5000/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      Navigate("/");
    } catch (error) {
      console.log("error id", error);
    }
  };
  return (
    <>
      <div className="container login ">
        <h1
          className="text-light"
          style={{ display: "block", textAlign: "center" }}
        >
          Signin
        </h1>
        <form
          onSubmit={submission}
          className="container"
          style={{ display: "inline" }}
        >
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className="form-label text-light"
              style={{ display: "block", textAlign: "center" }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label text-light"
              style={{ display: "block", textAlign: "center" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange2}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary text-light"
            style={{ margin: "12px 12px " }}
          >
            Submit
          </button>
          <Link to="/login" className="btn bg-danger">
            Login
          </Link>
        </form>
      </div>
    </>
  );
}
