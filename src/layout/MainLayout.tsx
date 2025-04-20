import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow">
        <Navbar />
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default MainLayout;
