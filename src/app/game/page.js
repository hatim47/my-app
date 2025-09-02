"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, wrap,useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SLIDES } from "../Images";
import Cards from "../Cart2";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TestimonialCard from "../TestimonialSlider";
export default function Game() {
      const [[page, direction], setPage] = useState([0, 0]);
      const slideIndex = wrap(0, SLIDES.length, page);
    
      const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
      };
       const { scrollYProgress } = useScroll();
      const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  // Auto slide every 9s
  useEffect(() => {
    const interval = setInterval(() => paginate(1), 40000);
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
      { title: "Free Fire", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/7.png" },
       { title: "Free Fire", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/7.png" },
        { title: "Free Fire", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/7.png" },
         { title: "Free Fire", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/7.png" },
          { title: "Free Fire", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/7.png" },
           { title: "Free Fire", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", img: "/tab/7.png" },

  ];
       const tabDatas = [    
      { title: "forza horizon 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/9.png" },
    { title: "forza horizon 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/9.png" },
     { title: "forza horizon 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/9.png" },
      { title: "forza horizon 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/9.png" },
       { title: "forza horizon 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/9.png" },
        { title: "forza horizon 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/9.png" },

  ];
       const tabDataa = [    
      { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
     { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
       { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
         { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
           { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
             { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
         
  ];


 return (
    <>
        <Navbar/>                                                            
        <section className="relative w-full h-[80vh] bg-[url('/image-59.png')] bg-cover bg-center  overflow-hidden flex items-center justify-center z-0">
              <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-0">
            <img
                    src="/image-60.png"
                    alt={`Foreground ${slideIndex}`}
                    className=" "
                  />
              
        
              {/* Static Text/Button */}
              <div className="inset-0 flex flex-col md:justify-between mb-20 md:mb-0 text-white z-20">
                    <div className="w-full max-w-7xl flex items-start flex-col px-5 md:px-0 ">
                      <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase text-start">Epic Games  <br /> Made For <span className="text-[#FFBE21]"> True Gamers </span> <br /> </h1>
                      <p className=" text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
                      <div className="flex gap-x-6 mt-6">
                        <button className="px-5 py-2 md:px-8 md:py-4 bg-linear-41 from-[#FFBE21] to-[#C26E09] -skew-x-16 font-semibold ">
                          <span className="skew-x-16 block text-xs md:text-base text-white">
                            DOWNLOAD
                          </span>
        
                        </button>
                      
                      </div>
                    </div>
              </div>
              </div>
            
            </section>
 <section className="relative w-full flex flex-col items-center justify-center z-2 mt-30 px-5">
    <div className="flex flex-col w-1/2 text-white items-center text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase">Battle Extreme  <br />  <span className="text-[#FFBE21]">Games</span></h1>
        </div>
     <div className="absolute w-100 h-100 bg-[#FFBE21] rounded-l-full blur-[200px] right-0  top-20"/>
             <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
         {tabData.map((game, i) => (
          <Cards key={i} {...game} />
        ))}
         </div>
  </section>
<section className="relative w-full flex flex-col items-center justify-center z-2 mt-30 px-5">
    <div className="flex flex-col w-1/2 text-white items-center text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase ">Battle Extreme  <br />  <span className="text-[#FFBE21]">Games</span></h1>
        </div>
     <div className="absolute w-50 h-100 bg-[#FFBE21] rounded-l-full blur-[200px] left-0 "/>
             <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
         {tabDatas.map((game, i) => (
          <Cards key={i} {...game} />
        ))}
         </div>
  </section>
  <section className="relative w-full flex flex-col items-center justify-center z-2 mt-30 px-5">
    <div className="flex flex-col w-1/2 text-white items-center text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase ">Battle Extreme  <br />  <span className="text-[#FFBE21]">Games</span></h1>
        </div>
     <div className="absolute w-50 h-100 bg-[#FFBE21] rounded-l-full blur-[200px] right-0 "/>
             <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
         {tabDataa.map((game, i) => (
          <Cards key={i} {...game} />
        ))}
         </div>
  </section>

   <section className="relative w-full flex flex-col items-center justify-center z-2 mt-30 px-5">
      <div className="flex flex-col sm:w-1/2 text-white  items-center text-center">
            <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase ">Testimonials</h1>
            <p className="max-w-md mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
         
      <div className="w-full max-w-7xl flex gap-10 "> 
           <TestimonialCard/>
        </div> 
  
    <div className="absolute w-70 h-70 bg-[#FFBE21] rounded-l-full blur-[200px] right-50% "/>
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
