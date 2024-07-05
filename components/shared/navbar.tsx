"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import UserButton from "@/components/shared/user-button";
import SignInButton from "./sign-in-button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname();
  const { data, status } = useSession();

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-white shadow-md" : "bg-zinc-50"
      } mb-16 top-0 w-full transition-all duration-300 ease-linear`}
    >
      <div className="wrapper flex w-full justify-between">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <ul className="flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.route}
                className={`font-medium text-sm tracking-wider whitespace-nowrap px-4 py-2 transition-all duration-300 ease-linear hover:text-black ${
                  currentPath === link.route
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {!data && status === "unauthenticated" ? (
            <li>
              <SignInButton />
            </li>
          ) : (
            <UserButton />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
