import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
// import AboutUs from "./components/AboutUs";
// import AllFeatures from "./components/AllFeatures";
// import ParticularFeature from "./components/ParticularFeature";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";

import Home from './home';

import Login from './login';
import Signup from './Signup';
// import AboutUs from "./AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/all-features" element={<AllFeatures />} />
        <Route path="/feature/:id" element={<ParticularFeature />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
