import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Products from "../components/Products";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
    </Routes>
  );
}
