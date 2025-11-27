import React, { useState } from "react";
import {
  Send,
  Mail,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import logo from "../Assets/logo/4.png";
import toast from "react-hot-toast";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitMessage = () => {
    if (!formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      console.log(formData);
      setFormData({ email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmitMessage();
    }
  };

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="img" height={30} width={40} />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  PICK COLOR
                </h3>
                <p className="text-slate-400 text-sm">Your Color Companion</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-md">
              Create stunning color palettes and discover the perfect colors for
              your next design project. Easy, fast, and intuitive.
            </p>

            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Instagram, href: "#", color: "hover:bg-pink-500" },
                  { Icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                  { Icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                  { Icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
                ].map(({ Icon, href, color }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className={`p-3 bg-slate-700 rounded-lg transition-all duration-300 ${color} hover:scale-110 hover:shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-600">
              <p className="text-slate-400 text-sm">
                © 2025 update PICK COLOR. All rights reserved.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p className="text-slate-400">
                We'd love to hear from you. Send us a message!
              </p>
            </div>

            <div className="space-y-5">
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Tell us what's on your mind..."
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"></textarea>
                </div>
              </div>

              <button
                onClick={handleSubmitMessage}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
