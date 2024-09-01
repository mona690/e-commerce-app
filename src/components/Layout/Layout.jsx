import React from "react";
import style from "./Layout.module.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-16 md:py-10 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
