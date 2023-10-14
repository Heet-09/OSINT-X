import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
// import AboutUs from "./components/AboutUs";
// import AllFeatures from "./components/AllFeatures";
// import ParticularFeature from "./components/ParticularFeature";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";

import home from './home';

import login from './login';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/all-features" element={<AllFeatures />} />
        <Route path="/feature/:id" element={<ParticularFeature />} /> */}
        <Route path="/login" element={<login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
