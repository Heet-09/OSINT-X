import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fields, setfields] = useState({
    email: "",
    username: "",
    contact: "",
    password: "",
    confirmPassword: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.password == fields.confirmPassword) {
      console.log(fields);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="background">
            {/* <img
              className="image"
              src="https://trustme3ro.github.io/Codepen-Assets/background.svg"
            /> */}
          </div>
          <div className="container">
            <div className="login-text neonText">SIGN UP</div>
            <div className="button" style={{ marginTop: "40px" }}>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                value={fields.email}
                onChange={handleInput}
              />
            </div>
            <div className="button">
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                value={fields.username}
                onChange={handleInput}
              />
            </div>
            <div className="button" style={{ position: "relative" }}>
              <input
                className="input"
                type="text"
                name="contact"
                placeholder="Your Contact Number"
                autoComplete="off"
                value={fields.contact}
                onChange={handleInput}
              />
            </div>
            <div className="button" style={{ position: "relative" }}>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={fields.password}
                onChange={handleInput}
              />
            </div>
            <div
              className="button"
              style={{
                borderColor: `${
                  fields.password == fields.confirmPassword
                    ? "#40e9f1"
                    : "rgb(255, 72, 72)"
                }`
              }}
            >
              <input
                className="input"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="off"
                value={fields.confirmPassword}
                onChange={handleInput}
              />
            </div>
            <div
              className="smol-txt"
              style={{
                display: `${
                  fields.password == fields.confirmPassword ? "none" : "inline"
                }`
              }}
            >
              Passwords dont match
            </div>
            <button
              className="button login fill"
              type="submit"
              style={{
                borderRadius: "0",
                width: "10vw",
                border: "none",
                position: "relative"
              }}
            >
              <div
                className="button login fill"
                style={{
                  position: "absolute",
                  height: "48px",
                  minWidth: "248px",
                  width: "5vw",
                  margin: "2px",
                  borderRadius: "0",
                  border: "none",
                  backgroundColor: "#0e4f5e"
                }}
              >
                <img
                  style={{ position: "absolute", zIndex: 0 }}
                  src="https://trustme3ro.github.io/Codepen-Assets/Line.svg"
                />
                <div style={{ zIndex: 1 }}>SIGN UP</div>
              </div>
            </button>
            <div className="signup">
              Already have an account?
              <div style={{ marginLeft: "10px", color: "#40E9F1" }}>Login.</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
