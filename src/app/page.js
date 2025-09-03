"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, wrap,useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SLIDES } from "./Images";
import ImageSlider from "./ImageSlider";
import Tabs from "./Tabs";
import Cards from "./Cart";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TestimonialCard from "./TestimonialSlider";
export default function Hero() {
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
    const interval = setInterval(() => paginate(1), 8000);
    return () => clearInterval(interval);
  }, [page]);

  const bgVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: 0 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%" }),
  };

  const fgVariants = {
    enter: (dir) => ({ x: dir > 0 ? "300%" : "-400%", opacity: 1 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "300%" : "-400%", opacity: 1 }),
  };

  const transitionConfig = {
    duration: 1.5,
    delay: 2.5,
    ease: [1, 0, 0.01, 1],
  };
  const tabData = [    
      { title: "Play Station 6",num:"150", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/13.png" },
      { title: "Gaming Chair",num:"150", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/14.png" },
      { title: "Gaming Console", num:"150", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/15.png" },
      { title: "Full Gaming System",num:"150", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/16.png" },
      { title: "AMD Ryzan Gaming PC",num:"150", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/17.png" },
      { title: "Gaming Monitor", num:"150", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/18.png" },
  ]; 
  
  return (
    <>
    <Navbar/>
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
    <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-0">
      {/* Foreground */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`fg-${page}`}
          className="absolute  top-2/2 left-1/2 w-full h-[100vh] -translate-x-[70%] md:-translate-x-1/2 -translate-y-[40%] md:-translate-y-1/2"
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
      <div className="inset-0 flex flex-col md:justify-between mb-20 md:mb-0 text-white z-20">
            <div className="w-full max-w-7xl flex items-start flex-col px-5">
              <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase text-start">Let your <br /> mind <span className="text-[#FFBE21]"> explore </span> <br /> new world</h1>
              <p className=" text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className="hidden md:block" /> sed do eiusmod tempor incididunt ut labore et dolore <br className="hidden md:block"  /> magna aliqua.</p>
              <div className="flex gap-x-6 mt-6">
                <button className="px-5 py-2 md:px-8 md:py-4 bg-linear-41 from-[#FFBE21] to-[#C26E09] -skew-x-16 font-semibold ">
                  <span className="skew-x-16 block text-xs md:text-base text-white">
                    DOWNLOAD
                  </span>

                </button>
                <button className="px-5 py-2 md:px-8 md:py-4  border-1 border-[#C26E09] text-gradiant -skew-x-16 font-semibold transition-all duration-300 hover:bg-[#FFF3E0]/10 hover:shadow-[3px_3px_0px_#FFBE21] shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px]">
                  <span className="skew-x-16 block text-xs md:text-base text-gradiant ">
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
        className="flex whitespace-nowrap gap-8 will-change-transform animate-marquee"
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


  <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 z-2">    
<div className="absolute w-100 h-100 bg-[#FFBE21] rounded-full blur-[200px] -right-15 "/>
       <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col pt-60">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-3xl lg:text-5xl font-bold font-sans text-center mb-4 tracking-wider uppercase max-w-xl">choose your <span className="text-[#FFBE21]">favorite</span> game</h1>
          <p className="text-center text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,< br className="hidden md:block "/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>


      <div className="flex flex-col items-center w-full pb-10 pt-20 md:pt-10">
   <ImageSlider />
      
      <div className="flex gap-x-6 mt-6">
        <button className="px-5 py-2 md:px-8 md:py-4 text-base bg-linear-41 from-[#FFBE21] to-[#C26E09] -skew-x-16 font-semibold ">
         <span className="skew-x-16 block text-xs md:text-base text-white ">
  DOWNLOAD
  </span>
        </button>
         <button className="px-5 py-2 md:px-8 md:py-4 text-base border-1 border-[#C26E09] text-gradiant -skew-x-16 font-semibold transition-all duration-300 hover:bg-[#FFF3E0]/10 hover:shadow-[3px_3px_0px_#FFBE21] shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px]">
        <span className="skew-x-16 block text-xs md:text-base text-gradiant ">
    LEARN MORE
  </span>
        </button>
         </div>
    </div>
    
    </section>
  <section className="relative w-full min-h-screen flex items-center justify-center px-5 md:px-0">
  {/* Yellow blurred background */}
  <div className="absolute w-[500px] h-[500px] bg-[#FFBE21] rounded-full blur-[250px] -left-60 top-20" />

  {/* Content container */}
  <div className="relative z-20 w-full max-w-7xl flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-12 bg-black/40 backdrop-blur-md rounded-xl shadow-xl py-12 px-6 md:px-12 mt-24 md:mt-40">
    
    {/* Text Section */}
    <div className="flex flex-col md:w-1/2 text-white text-center md:text-left items-center  md:items-start ">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 tracking-wider uppercase leading-tight">
        <span className="text-[#FFBE21]">Discover</span> our world
      </h1>
      <p className="text-sm  md:text-base max-w-md mx-auto md:mx-0 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uased do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="px-6 sm:px-8 py-3 sm:py-4 w-fit border border-[#C26E09] -skew-x-12 font-semibold hover:bg-gradient-to-r hover:from-[#FFBE21] hover:to-[#C26E09] transition">
        <span className="skew-x-12 block text-sm sm:text-base text-[#FFBE21] md:text-white">
          LEARN MORE
        </span>
      </button>
      
    </div>
<div className="relative md:w-1/2 flex justify-center md:justify-start z-30">
   <img src="/image50.png" alt="slide" className="w-100 absolute md:-bottom-52 md:-left-10" />
    </div>
    {/* Image */}
    
  </div>
</section>
  <section className="relative w-full flex flex-col items-center justify-center z-2 mt-20 px-5">
    <div className="flex flex-col w-1/2 text-white  items-center text-center">
          <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4  uppercase ">welcome to the <br /> top <span className="text-[#FFBE21]">Games</span></h1>
        </div>
        <div className="absolute w-50 h-100 bg-[#FFBE21] rounded-l-full blur-[200px] right-0 "/>
          <Tabs />
       
  </section>
 <section className="relative w-full flex flex-col items-center justify-center z-2 mt-30 px-5">
    <div className="flex flex-col w-1/2 text-white items-center text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase ">welcome to the <br /> top <span className="text-[#FFBE21]">Games</span></h1>
        </div>
     <div className="absolute w-50 h-100 bg-[#FFBE21] rounded-l-full blur-[200px] left-0 "/>
             <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

         {tabData.map((game, i) => (
          <Cards key={i} {...game} />
        ))}
         </div>
          <button className="px-8 py-4 text-base border-1 border-[#C26E09] text-gradiant -skew-x-16 font-semibold transition-all duration-300 hover:bg-[#FFF3E0]/10 hover:shadow-[3px_3px_0px_#FFBE21] shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px]">
        <span className="skew-x-16 block text-base text-gradiant ">
    LEARN MORE
  </span>
        </button>
  </section>
 <section className="relative w-full flex flex-col items-center justify-center z-2 mt-30 px-5">
    <div className="flex flex-col sm:w-1/2 text-white  items-center text-center">
          <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase ">Testimonials</h1>
          <p className="max-w-md mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="absolute w-50 h-100 bg-[#FFBE21] rounded-l-full blur-[200px] right-0 "/>
    <div className="w-full max-w-7xl flex gap-10 "> 
         <TestimonialCard/>
      </div> 


      <div className="bg-[url('/Maskgroup23).png')] bg-cover rounded-2xl w-full max-w-7xl relative flex flex-col items-center justify-center my-30 lg:mt-30 lg:mb-50 xl:my-30 py-16 md:py-26 lg:py-46">
   <h1 className="text-xl  sm:text-3xl lg:text-5xl font-bold font-sans mb-4 text-white uppercase">Salford Newsletter</h1>
 <div className="w-full sm:max-w-xl lg:max-w-3xl relative flex justify-center px-5"> 
  
    <input type="text" name="price" placeholder="Enter Email" className="block w-full bg-white/20 max-w-3xl py-2 sm:py-4 pr-3 relative pl-3 text-xs md:text-base outline-[#FFBE21] outline-1 text-white/53 placeholder:text-white/53 active:outline-none focus:outline-[#FFBE21]  sm:text-sm/6" />
      
             <button className="me-5 px-3 py-2 sm:px-8 sm:py-4 text-base bg-linear-41 from-[#FFBE21] to-[#C26E09]
  [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)] transition-all duration-300 absolute top-0 right-0 z-2 font-semibold shadow-none">
        <span className="block text-xs md:text-base text-white uppercase">
   Subscribe Now
  </span>
        </button>
      </div>   
        </div>   
  </section>
  <Footer/>
      </>
  );
}  

