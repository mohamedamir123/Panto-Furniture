"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { PiHandbagBold } from "react-icons/pi";

const links = ["shop", "about us", "contact"];
const count = 0;
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 box-border transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4 text-white">
          <Link
            href={"/"}
            className={`text-2xl font-bold ${scrolled ? "text-black" : "text-white"} `}
          >
            Panto
          </Link>
        <nav className="hidden sm:flex items-center gap-10 lg:gap-20">
          <div>
            <select
              name="Furniture"
              id="furniture"
              className={`capitalize hover:cursor-pointer focus:outline-none bg-transparent ${scrolled ? "text-black" : "text-white"} `}
            >
              <option className="text-black" value="furniture">
                furniture
              </option>
              <option className="text-black" value="sofa">
                sofa
              </option>
            </select>
          </div>
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link}`}
              className={`hover:opacity-70 capitalize ${scrolled ? "text-black" : "text-white"} `}
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <Badge
            className={`hover:opacity-70 ${scrolled ? "text-black" : "text-white"} cursor-pointer `}
            color="secondary"
            badgeContent={`${count === 0 ? "0" : ""}`}
          >
            <PiHandbagBold className="text-2xl" />
          </Badge>
        </div>
      </div>
    </header>
  );
}

export default Header;
