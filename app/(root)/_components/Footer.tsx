"use client";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full border-t mt-16">
      <div className="wrapper flex flex-col items-center justify-between gap-2 md:gap-4 lg:gap-6 py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex gap-6 text-gray-500">
          <FaFacebook className="hover:text-black" size={18} />
          <FaXTwitter className="hover:text-black" size={18} />
          <FaInstagram className="hover:text-black" size={18} />
          <FaYoutube className="hover:text-black" size={18} />
        </div>
        <p className="text-sm text-gray-500 font-light">© 2024 Lo' Pi</p>
      </div>
    </footer>
  );
};
