// src/page/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx"; // <- đường dẫn đúng
// import Footer from "../components/Footer/Footer.jsx"; // nếu bạn đã có

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-[#020D07] text-white">
        <Outlet />
      </main>
    </>
  );
}
