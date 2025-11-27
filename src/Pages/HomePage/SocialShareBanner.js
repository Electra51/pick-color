import React from "react";
import {
  Share2,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const SocialShareBanner = () => {
  const socialLinks = [
    {
      Icon: Instagram,
      url: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      Icon: Facebook,
      url: "https://web.facebook.com/",
      label: "Facebook",
    },
    {
      Icon: Twitter,
      url: "https://twitter.com/",
      label: "Twitter",
    },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/safayet-nur-electra-a17a901b0/",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="my-32 mx-auto max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3537586f] via-[#293445a8] to-[#313F53] shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>

        <div className="relative px-8 py-12 md:px-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-purple-300 mb-3">
                <Share2 className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Spread the Word
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                Share Our Color Picker
                <Heart className="w-7 h-7 text-red-400 animate-pulse" />
              </h2>

              <p className="text-slate-300 text-base md:text-lg max-w-2xl">
                Help your friends and colleagues discover the perfect colors for
                their projects. Share the love!
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                {socialLinks.map(({ Icon, url, label }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group relative p-4 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-700/50 hover:border-slate-600">
                    <Icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />

                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
};

export default SocialShareBanner;
