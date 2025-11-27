/* eslint-disable default-case */
import React, { useState } from "react";
import PopularColor from "./PopularColor.js";

const SecondSection = () => {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [copiedField, setCopiedField] = useState("");

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const hexToHsl = (hex) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;

    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgb = hexToRgb(currentColor);
  const hsl = hexToHsl(currentColor);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  return (
    <div className="mt-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Color Picker</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Use the color picker by clicking and dragging your cursor inside the
          picker area to highlight a color on the right. Input Hex, RGB, HSL or
          CMYK values to search for a particular color in the fields below the
          color swatch; click the swatch to add it to palette.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          data-aos="fade-right">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Pick Your Color</h3>
            <p className="text-sm text-gray-500">
              Select from popular colors or create your own
            </p>
          </div>

          <PopularColor
            currentColor={currentColor}
            onColorChange={handleColorChange}
          />

          <div className="mt-8">
            <div
              className="w-full h-32 rounded-xl shadow-inner border-4 border-white"
              style={{
                backgroundColor: currentColor,
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>

        <div
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          data-aos="fade-left">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Color Values</h3>
            <p className="text-sm text-gray-500">
              Click any value to copy to clipboard
            </p>
          </div>

          <div className="space-y-4">
            <div
              onClick={() => copyToClipboard(currentColor, "hex")}
              className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 font-medium">HEX</p>
                  <p className="text-lg font-mono font-semibold">
                    {currentColor.toUpperCase()}
                  </p>
                </div>
                {copiedField === "hex" ? (
                  <span className="text-green-500 text-sm font-medium">
                    ✓ Copied!
                  </span>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-400"
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
              </div>
            </div>

            {rgb && (
              <div
                onClick={() =>
                  copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, "rgb")
                }
                className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">RGB</p>
                    <p className="text-lg font-mono font-semibold">
                      rgb({rgb.r}, {rgb.g}, {rgb.b})
                    </p>
                  </div>
                  {copiedField === "rgb" ? (
                    <span className="text-green-500 text-sm font-medium">
                      ✓ Copied!
                    </span>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-400"
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
                </div>
              </div>
            )}

            {hsl && (
              <div
                onClick={() =>
                  copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, "hsl")
                }
                className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">HSL</p>
                    <p className="text-lg font-mono font-semibold">
                      hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
                    </p>
                  </div>
                  {copiedField === "hsl" ? (
                    <span className="text-green-500 text-sm font-medium">
                      ✓ Copied!
                    </span>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-400"
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
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() =>
                copyToClipboard(
                  `HEX: ${currentColor}\nRGB: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})\nHSL: hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
                  "all"
                )
              }
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all">
              {copiedField === "all"
                ? "✓ All Values Copied!"
                : "Copy All Values"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
