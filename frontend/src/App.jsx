import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";

const App = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] relative overflow-x-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Toast Container with consistent dark theme */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="bg-gray-800 border border-gray-700"
        bodyClassName="text-gray-100"
        progressClassName="bg-gradient-to-r from-purple-500 to-blue-500"
      />

      {/* Navigation with backdrop blur */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
        <SearchBar />
      </div>

      {/* Main content area with top padding for fixed navbar */}
      <main
        className={`relative z-10 py-8 pt-32 transition-all duration-500 ${
          transitionStage === "fadeOut"
            ? "opacity-0 transform translate-y-4"
            : "opacity-100 transform translate-y-0"
        }`}
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayLocation(location);
            setTransitionStage("fadeIn");
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </main>

      {/* Footer with glass effect */}
      <div className="mt-16 backdrop-blur-lg bg-gray-900/50 border-t border-gray-800/50 -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
