import React, { useContext, useEffect, useState } from "react";
import logo from "../Assets/logo/4.png";
import { FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
    navigate(from, { replace: true });
  };

  const [dark, setDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDark = () => {
    setDark(!dark);
    localStorage.setItem("dark-mode", !dark);
  };

  useEffect(() => {
    const localDark = JSON.parse(localStorage.getItem("dark-mode"));
    setDark(localDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document
        .querySelector("html")
        .setAttribute("data-theme", "pickColorTheme");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItem = (
    <>
      <li>
        <a
          href="/home"
          className="px-4 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all font-medium">
          HOME
        </a>
      </li>
      <li>
        <a
          href="/Connect"
          className="px-4 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all font-medium">
          CONTACT
        </a>
      </li>
      <li>
        <a
          href="/convert"
          className="px-4 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all font-medium">
          RGB TO HEX
        </a>
      </li>
    </>
  );

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-lg bg-opacity-95"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="img" height={30} width={40} />
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    PICK COLOR
                  </h3>
                  <p className="text-slate-400 text-sm">Your Color Companion</p>
                </div>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">{menuItem}</ul>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleDark}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle theme">
              {dark ? (
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            <div className="hidden lg:flex items-center space-x-3">
              {user?.uid ? (
                <div className="flex items-center space-x-3">
                  <a
                    href="/profile"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <FaUser className="text-purple-600" />
                      </div>
                    )}
                    <span className="font-medium text-gray-700">
                      {user?.displayName}
                    </span>
                  </a>
                  <button
                    onClick={handleLogOut}
                    className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105">
                    Logout
                  </button>
                </div>
              ) : (
                <a href="/login">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105">
                    LOGIN
                  </button>
                </a>
              )}
            </div>

            <div className="lg:hidden">
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() =>
                  document
                    .getElementById("mobile-menu")
                    .classList.toggle("hidden")
                }>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="hidden lg:hidden bg-white border-t shadow-lg">
        <div className="px-4 py-4 space-y-2">
          <a
            href="/home"
            className="block px-4 py-3 rounded-lg hover:bg-purple-50 font-medium">
            HOME
          </a>
          <a
            href="/Connect"
            className="block px-4 py-3 rounded-lg hover:bg-purple-50 font-medium">
            CONTACT
          </a>
          <a
            href="/convert"
            className="block px-4 py-3 rounded-lg hover:bg-purple-50 font-medium">
            RGB TO HEX
          </a>

          {user?.uid ? (
            <>
              <a
                href="/profile"
                className="block px-4 py-3 rounded-lg hover:bg-purple-50 font-medium">
                Profile
              </a>
              <button
                onClick={handleLogOut}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium">
                Logout
              </button>
            </>
          ) : (
            <a href="/login" className="block">
              <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium">
                LOGIN
              </button>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
