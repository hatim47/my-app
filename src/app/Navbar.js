"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center mx-4 md:mx-auto z-90">
  <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[95%] lg:w-[96.6%] md:max-w-[1330px] bg-black/60 backdrop-blur-md rounded-full shadow-md px-3 md:px-6 py-4 flex items-center justify-between z-99">
     
        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="w-26 lg:w-32 md:w-32" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:gap-2 lg:gap-6">
          {["Home", "Game", "Product", "About Us", "Support", "FAQs"].map((item, i) => (
            <li key={i} className="uppercase text-white text-sm hover:text-[#FFBE21] transition">
              <Link href={`/${item.toLowerCase().replace(" ", "")}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons + Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 md:space-x-reverse">
          <Icon icon="mingcute:search-line" className="text-[#FFBE21] w-4 h-4 md:w-6 md:h-6" />
<Icon icon="solar:cart-linear" className="text-[#FFBE21] w-4 h-4 md:w-6 md:h-6" />
<Icon icon="iconamoon:profile-duotone" className="text-[#FFBE21] w-4 h-4 md:w-6 md:h-6" />
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon icon="mdi:menu" width="26" />
          </button>
        </div>
            {menuOpen && (
        <div className="absolute top-16 w-[90%] mx-auto bg-black/90 backdrop-blur-md rounded-xl p-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {["Home", "Game", "Product", "About Us", "Support", "FAQs"].map((item, i) => (
              <li key={i} className="uppercase text-white text-sm hover:text-[#FFBE21] transition">
                <Link href={`/${item.toLowerCase().replace(" ", "")}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>

      {/* Mobile Dropdown Menu */}
  
    </section>
  );
}
