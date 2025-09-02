import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="relative w-full flex flex-col items-center bg-[url('/Maskgroup22).png')] bg-no-repeat bg-cover text-gray-300 px-5 md:px-5 lg:px-5 pt-20">
      
      {/* Floating Image */}
      <img
        src="/image49.png"
        alt="Decor"
        className="hidden md:block absolute w-60 md:w-80  md:top-[12%] lg:-top-[39%] xl:top-[-21%]  right-0"
      />

      {/* Top Section */}
      <div className="w-full xl:max-w-7xl flex flex-col lg:flex-row  gap-10  xl:gap-20">
        
        {/* Logo + Description */}
        <div className="lg:flex lg:flex-col ">
          <img src="/logo.png" alt="Logo" className="w-40 mb-4" />
          <p className="text-base max-w-md xl:max-w-sm lg:max-w-2xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-2 xl:gap-10 xl:flex-1">
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#FFBE21]">Games</a></li>
              <li><a href="#" className="hover:text-[#FFBE21]">Features</a></li>
              <li><a href="#" className="hover:text-[#FFBE21]">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase">Help</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#FFBE21]">Support</a></li>
              <li><a href="#" className="hover:text-[#FFBE21]">About</a></li>
              <li><a href="#" className="hover:text-[#FFBE21]">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#FFBE21]">YouTube Playlist</a></li>
              <li><a href="#" className="hover:text-[#FFBE21]">How To - Blog</a></li>
              <li><a href="#" className="hover:text-[#FFBE21]">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partner / Sponsor Logos */}
      <div className="w-full max-w-7xl mt-12 flex flex-wrap justify-center md:justify-start gap-6">
        <img src="/image50(1).png" className="w-20" />
        <img src="/Maskgroup(28).png" className="w-20" />
        <img src="/Vector.png" className="w-20" />
        <img src="/Vector(2).png" className="w-20" />
        <img src="/Group4.png" className="w-20" />
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-7xl py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white border-t border-white/10 mt-10">
        
        {/* Socials */}
        <div className="flex gap-4">
          {["fa:twitter", "fa:facebook", "fa:instagram", "fa:github"].map(
            (icon, i) => (
              <div
                key={i}
                className="border border-white rounded-full p-2 hover:bg-gradient-to-r hover:from-[#FFBE21] hover:to-[#C26E09] hover:border-transparent transition"
              >
                <Icon icon={icon} width="14" height="14" />
              </div>
            )
          )}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
