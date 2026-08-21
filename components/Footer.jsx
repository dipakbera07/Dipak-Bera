import { assets } from "@/assets/assets";
import { Ovo, Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="w-full px-[12%] py-10 scroll-mt-20">

      {/* Logo */}
      <Image
        src={isDarkMode ? assets.logo_dark : assets.logo}
        alt="Dipak Bera"
        className="w-32 mx-auto"
      />

      {/* Email */}
      <a
        href="mailto:dbera20050@gmail.com"
        className="flex justify-center items-center gap-2 mt-3 group"
      >
        <Image
          src={assets.mail_icon}
          alt=""
          className="w-5"
        />

        <p
          className={`${ovo.className} text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition`}
        >
          dbera20050@gmail.com
        </p>
      </a>

      {/* Phone */}
      <a
        href="tel:+917478417515"
        className="flex justify-center items-center gap-2 mt-2 group"
      >
        <Image
          src={assets.call}
          alt=""
          className="w-5 invert-0 dark:invert"
        />

        <p
          className={`${ovo.className} text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition`}
        >
          +91 7478417515
        </p>
      </a>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 my-6" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-sm text-gray-600 dark:text-gray-300">

        {/* Copyright */}
        <p className={ovo.className}>
          © 2026 Dipak Bera. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${ovo.className} hover:text-black dark:hover:text-white transition`}
            href="https://www.linkedin.com/in/dipakbera07/"
          >
            LinkedIn
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${ovo.className} hover:text-black dark:hover:text-white transition`}
            href="https://github.com/dipakbera07"
          >
            GitHub
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${ovo.className} hover:text-black dark:hover:text-white transition`}
            href="https://x.com/dbera20050"
          >
            X
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${ovo.className} hover:text-black dark:hover:text-white transition`}
            href="https://leetcode.com/u/dipakbera07/"
          >
            LeetCode
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${ovo.className} hover:text-black dark:hover:text-white transition`}
            href="https://www.facebook.com/profile.php?id=100060871277138"
          >
            Facebook
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${ovo.className} hover:text-black dark:hover:text-white transition`}
            href="https://www.instagram.com/dipak_bera_dipak/"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;