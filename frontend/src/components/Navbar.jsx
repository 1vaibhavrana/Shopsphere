import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="fixed top-0 z-50 backdrop-blur-xl bg-gray-900/95 border-b border-gray-700/50 shadow-2xl left-0 right-0 w-full">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="flex items-center justify-between py-5 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-medium text-white relative max-w-screen-2xl mx-auto">
        {/* Logo with gradient effect */}
        <Link to="/" className="group">
          <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-gray-100 to-purple-200 bg-clip-text text-transparent hover:from-purple-400 hover:via-blue-400 hover:to-purple-300 transition-all duration-300">
            ShopSphere
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) => `
            flex flex-col items-center gap-2 px-3 py-2 rounded-lg transition-all duration-500 group
            ${
              isActive
                ? "text-white transform scale-105"
                : "text-gray-300 hover:text-white hover:bg-gray-800/30"
            }
          `}
          >
            {({ isActive }) => (
              <>
                <p className="font-medium tracking-wide transition-all duration-300">
                  HOME
                </p>
                <hr
                  className={`w-6 border-none h-[2px] rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 w-8"
                      : "bg-transparent group-hover:bg-gray-400 group-hover:w-8"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) => `
            flex flex-col items-center gap-2 px-3 py-2 rounded-lg transition-all duration-500 group
            ${
              isActive
                ? "text-white transform scale-105"
                : "text-gray-300 hover:text-white hover:bg-gray-800/30"
            }
          `}
          >
            {({ isActive }) => (
              <>
                <p className="font-medium tracking-wide transition-all duration-300">
                  COLLECTION
                </p>
                <hr
                  className={`w-6 border-none h-[2px] rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 w-8"
                      : "bg-transparent group-hover:bg-gray-400 group-hover:w-8"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `
            flex flex-col items-center gap-2 px-3 py-2 rounded-lg transition-all duration-500 group
            ${
              isActive
                ? "text-white transform scale-105"
                : "text-gray-300 hover:text-white hover:bg-gray-800/30"
            }
          `}
          >
            {({ isActive }) => (
              <>
                <p className="font-medium tracking-wide transition-all duration-300">
                  ABOUT
                </p>
                <hr
                  className={`w-6 border-none h-[2px] rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 w-8"
                      : "bg-transparent group-hover:bg-gray-400 group-hover:w-8"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `
            flex flex-col items-center gap-2 px-3 py-2 rounded-lg transition-all duration-500 group
            ${
              isActive
                ? "text-white transform scale-105"
                : "text-gray-300 hover:text-white hover:bg-gray-800/30"
            }
          `}
          >
            {({ isActive }) => (
              <>
                <p className="font-medium tracking-wide transition-all duration-300">
                  CONTACT
                </p>
                <hr
                  className={`w-6 border-none h-[2px] rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 w-8"
                      : "bg-transparent group-hover:bg-gray-400 group-hover:w-8"
                  }`}
                />
              </>
            )}
          </NavLink>
        </ul>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
          >
            <img
              src={assets.search_icon}
              className="w-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
              alt="Search"
            />
          </button>

          {/* Profile Dropdown */}
          <div className="group relative">
            <button
              onClick={() => (token ? null : navigate("/login"))}
              className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
            >
              <img
                className="w-5 brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                src={assets.profile_icon}
                alt="Profile"
              />
            </button>

            {/* Enhanced Dropdown Menu */}
            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-1 w-40 py-3 px-2 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50">
                  <button className="text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 text-sm">
                    My Profile
                  </button>
                  <button
                    onClick={() => navigate("/orders")}
                    className="text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 text-sm"
                  >
                    Orders
                  </button>
                  <hr className="border-gray-700/50 my-1" />
                  <button
                    onClick={logout}
                    className="text-left px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-xl transition-all duration-200 text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Cart Icon with Enhanced Badge */}
          <Link to="/cart" className="relative group">
            <div className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
              <img
                src={assets.cart_icon}
                className="w-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                alt="Cart"
              />
              {getCartCount() > 0 && (
                <div className="absolute -right-1 -top-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                  {getCartCount()}
                </div>
              )}
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setVisible(true)}
            className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300 sm:hidden group"
          >
            <img
              src={assets.menu_icon}
              className="w-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
              alt="Menu"
            />
          </button>
        </div>

        {/* Enhanced Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 bottom-0 bg-black/95 backdrop-blur-xl border-l border-gray-800/50 transition-all duration-300 ${
            visible ? "w-full" : "w-0"
          } overflow-hidden z-50`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ShopSphere
              </span>
              <button
                onClick={() => setVisible(false)}
                className="p-2 hover:bg-gray-800/50 rounded-xl transition-all duration-200"
              >
                <img
                  className="h-5 rotate-180 brightness-0 invert"
                  src={assets.dropdown_icon}
                  alt="Close"
                />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 py-6">
              <NavLink
                onClick={() => setVisible(false)}
                className={({ isActive }) => `
                  flex items-center px-6 py-4 text-lg transition-all duration-500 border-b border-gray-800/30
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-l-4 border-l-purple-500 transform translate-x-2"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/30 hover:translate-x-1"
                  }
                `}
                to="/"
              >
                HOME
              </NavLink>

              <NavLink
                onClick={() => setVisible(false)}
                className={({ isActive }) => `
                  flex items-center px-6 py-4 text-lg transition-all duration-500 border-b border-gray-800/30
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-l-4 border-l-purple-500 transform translate-x-2"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/30 hover:translate-x-1"
                  }
                `}
                to="/collection"
              >
                COLLECTION
              </NavLink>

              <NavLink
                onClick={() => setVisible(false)}
                className={({ isActive }) => `
                  flex items-center px-6 py-4 text-lg transition-all duration-500 border-b border-gray-800/30
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-l-4 border-l-purple-500 transform translate-x-2"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/30 hover:translate-x-1"
                  }
                `}
                to="/about"
              >
                ABOUT
              </NavLink>

              <NavLink
                onClick={() => setVisible(false)}
                className={({ isActive }) => `
                  flex items-center px-6 py-4 text-lg transition-all duration-500 border-b border-gray-800/30
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-l-4 border-l-purple-500 transform translate-x-2"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/30 hover:translate-x-1"
                  }
                `}
                to="/contact"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
