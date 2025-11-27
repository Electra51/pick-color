// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Banner = () => {

//     const [color, setColor] = useState("");
//     return (

//             <div className="hero min-h-screen rounded-lg overflow-x-hidden" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2014/08/08/14/10/watercolors-413271__340.jpg")` }} >
//                 <div className="hero-content flex-col lg:flex-row-reverse overflow-auto">

//                     <div className='block' data-aos='fade-right'>
//                     <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Type correct color name or color code " className="input input-bordered input-primary w-full lg:w-full max-w-md" />

//                         <textarea style={{backgroundColor:color}} className="textarea textarea-primary w-full lg:w-full max-w-md mt-3" placeholder=""></textarea>

//                     </div>

//                     <div className='w-full lg:w-1/2' data-aos='fade-left'>
//                         <p className='font-bold my-6 text-white'>WELCOME HERE!</p>
//                         <h1 className="text-4xl font-bold text-white">PICK YOUR FAVORITE <br /> COLOR HERE</h1>
//                         <p className="my-6  font-semibold text-white">Color is the visual perceptual property deriving from the spectrum of light interacting with the photoreceptor cells of the eyes. </p>
//                         <Link to='/login'><button className="btn ">Get Started</button></Link>

//                     </div>
//                 </div>
//             </div>

//     );
// };

// export default Banner;

// import React, { useState } from "react";

// const Banner = () => {
//   const [color, setColor] = useState("#6366f1");
//   const [copied, setCopied] = useState(false);

//   const hexToRgb = (hex) => {
//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result
//       ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
//           result[3],
//           16
//         )})`
//       : null;
//   };

//   const copyColor = () => {
//     navigator.clipboard.writeText(color);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const popularColors = [
//     "#6366f1",
//     "#8b5cf6",
//     "#ec4899",
//     "#f43f5e",
//     "#f59e0b",
//     "#10b981",
//     "#06b6d4",
//     "#3b82f6",
//   ];

//   return (

//     <div
//       className="hero min-h-screen rounded-lg overflow-x-hidden"
//       style={{
//         backgroundImage: `url("https://cdn.pixabay.com/photo/2014/08/08/14/10/watercolors-413271__340.jpg")`,
//       }}>

//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           <div className="text-white" data-aos="fade-right">
//             <div className="inline-block mb-4">
//               <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                 🎨 WELCOME HERE!
//               </span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               PICK YOUR FAVORITE
//               <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
//                 COLOR HERE
//               </span>
//             </h1>

//             <p className="text-lg mb-8 text-white text-opacity-90 leading-relaxed">
//               Color is the visual perceptual property deriving from the spectrum
//               of light interacting with the photoreceptor cells of the eyes.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
//                 Get Started
//               </button>
//               <button className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           <div data-aos="fade-left">
//             <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-95">

//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Enter Color Code
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={color}
//                     onChange={(e) => setColor(e.target.value)}
//                     placeholder="#6366f1 or rgb(99, 102, 241)"
//                     className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
//                   />
//                   <button
//                     onClick={copyColor}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors">
//                     {copied ? (
//                       <span className="text-green-500 text-xs font-medium">
//                         ✓
//                       </span>
//                     ) : (
//                       <svg
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
//                         />
//                       </svg>
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Color Preview
//                 </label>
//                 <div
//                   style={{ backgroundColor: color }}
//                   className="w-full h-48 rounded-2xl shadow-inner border-4 border-gray-100 transition-all duration-300 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20"></div>
//                   <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
//                     <p className="text-xs font-medium">Current Color</p>
//                     <p className="font-mono font-bold">{color.toUpperCase()}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-6 grid grid-cols-2 gap-3">
//                 <div className="bg-gray-50 rounded-lg p-3">
//                   <p className="text-xs text-gray-500 font-medium">HEX</p>
//                   <p className="font-mono text-sm font-semibold text-gray-800">
//                     {color.toUpperCase()}
//                   </p>
//                 </div>
//                 <div className="bg-gray-50 rounded-lg p-3">
//                   <p className="text-xs text-gray-500 font-medium">RGB</p>
//                   <p className="font-mono text-sm font-semibold text-gray-800">
//                     {hexToRgb(color) || "Invalid"}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-3">
//                   Popular Colors
//                 </label>
//                 <div className="grid grid-cols-8 gap-2">
//                   {popularColors.map((popularColor, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setColor(popularColor)}
//                       style={{ backgroundColor: popularColor }}
//                       className="w-full aspect-square rounded-lg hover:scale-110 transition-transform shadow-md border-2 border-white hover:border-gray-300"
//                       title={popularColor}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={copyColor}
//                 className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
//                 {copied ? "✓ Copied to Clipboard!" : "Copy Color Code"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-10"></div>
//     </div>
//   );
// };

// export default Banner;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [color, setColor] = useState("#6366f1");
  const [copied, setCopied] = useState(false);

  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )})`
      : null;
  };

  const copyColor = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const popularColors = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#f43f5e",
    "#f59e0b",
    "#10b981",
    "#06b6d4",
    "#3b82f6",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10  mx-auto max-w-7xl px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white" data-aos="fade-right">
            <div className="inline-block mb-4">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                🎨 WELCOME HERE!
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              PICK YOUR FAVORITE
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mt-2">
                COLOR HERE
              </span>
            </h1>

            <p className="text-lg mb-8 text-white text-opacity-90 leading-relaxed max-w-xl">
              Color is the visual perceptual property deriving from the spectrum
              of light interacting with the photoreceptor cells of the eyes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/login">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Get Started
                </button>
              </Link>
              <button className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-30 transition-all border-2 border-white border-opacity-30 hover:border-opacity-50 shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Color Picker Interactive Card */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-95 hover:shadow-3xl transition-shadow">
              {/* Color Input Section */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter Color Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="#6366f1 or rgb(99, 102, 241)"
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all"
                  />
                  <button
                    onClick={copyColor}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors p-1 hover:bg-purple-50 rounded-lg">
                    {copied ? (
                      <span className="text-green-500 text-sm font-medium">
                        ✓
                      </span>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Color Preview */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Color Preview
                </label>
                <div
                  style={{ backgroundColor: color }}
                  className="w-full h-48 rounded-2xl shadow-inner border-4 border-gray-100 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20"></div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 backdrop-blur-sm text-white px-4 py-2 rounded-lg group-hover:bg-opacity-70 transition-all">
                    <p className="text-xs font-medium opacity-80">
                      Current Color
                    </p>
                    <p className="font-mono font-bold text-sm">
                      {color.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Color Info */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                <div
                  onClick={() => copyColor()}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all border border-gray-200 hover:border-purple-300">
                  <p className="text-xs text-gray-500 font-medium mb-1">HEX</p>
                  <p className="font-mono text-sm font-semibold text-gray-800">
                    {color.toUpperCase()}
                  </p>
                </div>
                <div
                  onClick={() => {
                    const rgb = hexToRgb(color);
                    if (rgb) {
                      navigator.clipboard.writeText(rgb);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }
                  }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all border border-gray-200 hover:border-purple-300">
                  <p className="text-xs text-gray-500 font-medium mb-1">RGB</p>
                  <p className="font-mono text-sm font-semibold text-gray-800">
                    {hexToRgb(color) || "Invalid"}
                  </p>
                </div>
              </div>

              {/* Popular Colors */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Popular Colors
                </label>
                <div className="grid grid-cols-8 gap-2">
                  {popularColors.map((popularColor, index) => (
                    <button
                      key={index}
                      onClick={() => setColor(popularColor)}
                      style={{ backgroundColor: popularColor }}
                      className="w-full aspect-square rounded-lg hover:scale-110 transition-transform shadow-md border-2 border-white hover:border-gray-300 hover:shadow-lg"
                      title={popularColor}
                      aria-label={`Select color ${popularColor}`}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Action */}
              <button
                onClick={copyColor}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-95">
                {copied ? "✓ Copied to Clipboard!" : "Copy Color Code"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-10 pointer-events-none"></div>
    </div>
  );
};

export default Banner;
