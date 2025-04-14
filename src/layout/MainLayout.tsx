import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default MainLayout;
