import React from "react";
import { Palette, Eye, Sparkles, Lightbulb } from "lucide-react";
import img from "../../Assets/images/new.png";
const ColorTheorySection = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual Perception",
      description: "Understanding how humans perceive and process colors",
    },
    {
      icon: Palette,
      title: "Color Mixing",
      description: "Learn how colors interact, mix, and complement each other",
    },
    {
      icon: Sparkles,
      title: "Emotional Impact",
      description: "Colors evoke emotions and influence user behavior",
    },
    {
      icon: Lightbulb,
      title: "Strategic Design",
      description: "Create aesthetically pleasing and impactful visuals",
    },
  ];

  return (
    <div className="my-32 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <img src={img} alt="" className="border rounded-md" />

        <div className="space-y-6" data-aos="fade-left">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Palette className="w-4 h-4" />
              Design Fundamentals
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Color Theory
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>

          <p className="text-gray-600 leading-relaxed text-base">
            Color theory is both the science and art of using color. It explains
            how humans perceive color, and the visual effects of how colors mix,
            match or contrast with each other. Color theory also involves the
            messages colors communicate and the methods used to replicate color.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-4 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-purple-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <feature.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <p className="text-gray-700 font-medium">
              Understanding how colors work together is critical to help you
              stand out from the crowd — for the right reasons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorTheorySection;
