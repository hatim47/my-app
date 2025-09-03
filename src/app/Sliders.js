"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence, wrap,useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SLIDES } from "./Images";

export default function Sliders () {
  
    const [[page, direction], setPage] = useState([0, 0]);
  const slideIndex = wrap(0, SLIDES.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
 const items = [
    "Squad Up Now!",
    "Gaming Spanning",
    "Collection of Games",
    "Mind-bending",
    "Free to Play",
  ];
 const { scrollYProgress } = useScroll();
const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  // Auto slide every 9s
  useEffect(() => {
    const interval = setInterval(() => paginate(1), 4000);
    return () => clearInterval(interval);
  }, [page]);
  const bgVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: 0 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%" }),
  };
  const fgVariants = {
    enter: (dir) => ({ x: dir > 0 ? "-300%" : "400%", opacity: 1 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "300%" : "-400%", opacity: 1 }),
  };
  const transitionConfig = {
    duration: 1.0,
    delay: 2.5,
    ease: [1, 0, 0.01, 1],
  };
    return (
        <>
 <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center z-0">
      {/* Background */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`bg-${page}`}
          className="absolute top-0 left-0 w-full h-full"
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transitionConfig}
        >
          <Image
            src={SLIDES[slideIndex].bg}
            alt={`Background ${slideIndex}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/10" /> */}
    <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col-reverse items-center md:flex-row  px-5 xl:px-0">
      {/* Foreground */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`fg-${page}`}   
          className="absolute w-8/12  h-[50vh]   md:w-8/12 lg:w-full md:h-[70vh]  lg:h-[80vh]  translate-y-50 sm:translate-y-10  md:translate-x-80 xl:translate-x-100"
          custom={direction}
          variants={fgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transitionConfig}
        >
          <Image
            src={SLIDES[slideIndex].fg}
            alt={`Foreground ${slideIndex}`}
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* Static Text/Button */}
      <div className="inset-0 flex flex-col md:justify-between sm:mt-0 mb-40 md:mb-0 text-white z-20">
            <div className="w-full max-w-7xl flex items-start flex-col ">
              <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase text-start">Let your <br /> mind <span className="text-[#FFBE21]"> explore </span> <br /> new world</h1>
              <p className=" text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className="hidden md:block" /> sed do eiusmod tempor incididunt ut labore et dolore <br className="hidden md:block"  /> magna aliqua.</p>
              <div className="flex gap-x-6 mt-6 ps-3">
                <button className="px-5 py-2 lg:px-8 lg:py-4 bg-linear-41 from-[#FFBE21] to-[#C26E09] -skew-x-16 font-semibold ">
                  <span className="skew-x-16 block text-xs lg:text-base text-white">
                    DOWNLOAD
                  </span>

                </button>
                <button className="px-5 py-2 lg:px-8 lg:py-4  border-1 border-[#C26E09] text-gradiant -skew-x-16 font-semibold transition-all duration-300 hover:bg-[#FFF3E0]/10 hover:shadow-[3px_3px_0px_#FFBE21] shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px]">
                  <span className="skew-x-16 block text-xs lg:text-base text-gradiant ">
                    LEARN MORE
                  </span>
                </button>
              </div>
            </div>
      </div>
      </div>
    
    </section>
    <div className="relative z-80 ">
   <div className="absolute -rotate-1 w-[99.9%]  py-6 -mt-8 animate-marquee z-3 overflow-hidden px-1">
      <motion.ul
        className="flex whitespace-nowrap gap-8 will-change-transform animate-marquee w-fit"
        style={{ x }} // movement linked to scroll
      >
        {[...items, ...items].map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-4 font-semibold text-base md:text-2xl uppercase tracking-widest text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 37" fill="none">
              <path d="M18.1461 0.912182L23.4594 13.8745L36.7581 18.2786L23.7958 23.5919L19.3917 36.8906L14.0784 23.9283L0.779652 19.5242L13.7419 14.2109L18.1461 0.912182Z" fill="#FFBE21"/>
            </svg>
            {item}
          </li>
        ))}
      </motion.ul>
    </div>
</div>
</>
);
}