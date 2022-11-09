import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Image from "./Pages/Image/Image";
import ImageItem from "./Pages/ImageItem/ImageItem";
import Login from "./Pages/Login/Login";

import Signup from "./Pages/Login/Signup";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Routes>
        
        <Route path="/image" element={<Image></Image>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/item" element={<ImageItem></ImageItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
