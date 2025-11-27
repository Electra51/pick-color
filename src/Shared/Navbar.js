// import React, { useContext, useEffect, useState } from 'react';
// import { FaUser } from 'react-icons/fa';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import logo from '../Assets/logo/4.png'
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//     const navigate = useNavigate()
//     const location = useLocation()
//     const from = location.state?.from?.pathname || '/'

//     const { user, logOut } = useContext(AuthContext)
//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(err => console.log(err))
//         navigate(from, { replace: true })
//     }

//     const [dark, setDark] = useState(false);

//     const handleDark = () => {
//         setDark(!dark);
//         localStorage.setItem('dark-mode', !dark)
//     };
//     useEffect(() => {
//         const localDark = JSON.parse(localStorage.getItem('dark-mode'))
//         console.log(localDark);
//         setDark(localDark);
//     }, [])
//     useEffect(() => {
//         if (dark) {
//             document.querySelector('html').setAttribute('data-theme', 'dark')
//         }
//         else {
//             document.querySelector('html').setAttribute('data-theme', 'pickColorTheme')
//         }
//     }, [dark])

//     const menuItem = <>
//         <li><Link to='/home' className=''>HOME </Link></li>
//         <li><Link to='/Connect' className=''>CONTACT</Link></li>
//         <li><Link to='/convert' className=''>RGB TO HEX</Link></li>

//         {
//             user?.uid ?
//                 <>

//                     <button className='btn btn-outline mr-2'>  <Link className='ml-2 pr-3' to="/profile">
//                         {user?.photoURL ?
//                             <img title={user.displayName} style={{ height: '35px' }} alt=''
//                                 roundedCircle
//                                 src={user?.photoURL}>
//                             </img>
//                             : <FaUser></FaUser>
//                         }
//                     </Link>{user?.displayName}
//                     </button>
//                     <Link><button onClick={handleLogOut} className='btn btn-[#0000FF]'>LogOut</button></Link>
//                 </>
//                 :
//                 <div className="flex-none">
//                     <Link to='/login'> <button className='btn btn-[#0000FF]'>Login</button></Link>
//                 </div>
//         }

//     </>

//     return (

//         <div className="navbar py-3 mb-3 flex justify-between">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                         {menuItem}
//                     </ul>
//                 </div>
//                 <Link to='/' className=" text-xl flex items-center">
//                     <img src={logo} alt="" height={30} width={40} />
//                     <i className='ml-1 text-lg leading-5 font-bold'>PIC COLOR</i></Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal p-0">
//                     {menuItem}
//                 </ul>
//             </div>

//             <label className="swap swap-rotate">

//                 <input type="checkbox" onClick={handleDark} />

//                 <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

//                 <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

//             </label>

//         </div>

//     );
// };

// export default Navbar;

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
