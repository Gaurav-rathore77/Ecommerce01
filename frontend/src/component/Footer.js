import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-700 shadow-inner mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Gaurav Store. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-600 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-orange-600 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
