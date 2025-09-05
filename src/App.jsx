import React from "react";
import axios from "axios";
import { useFormState } from "react-dom";
import { useState } from "react";
import Show from "./components/Show";
import Home from "./components/Home";
import Services from "./components/Services";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {  
  return (
    <div className="p-[5%]">
      <nav className="flex justify-center gap-10">
        <Link to='/'>Home</Link>
        <Link to='/show'>Show</Link>
        <Link to='/services'>Services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
