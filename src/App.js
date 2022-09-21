import React from "react";
import { Route, Routes } from "react-router-dom";
import AddLocation from "./components/AddLocation";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center ">
      <div className="md:w-[500px] h-full w-full border ">
        <div className="h-[10%] w-full border">
          <Header />
        </div>
        <div className="h-[90%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addLocation" element={<AddLocation />} />
            <Route path="/admin" element={<AddLocation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
