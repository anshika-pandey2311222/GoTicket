import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatbotLauncher from "./ChatbotLauncher"; 
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Shared header */}
      <Header />

      {/* Main page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Shared footer */}
      <Footer />

      {/* ✅ Chatbot Launcher (always visible on every page) */}
      <ChatbotLauncher />
    </div>
  );
};

export default Layout;
