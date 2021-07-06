import React from "react";
import Header from "../Home/Sections/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Sections/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
