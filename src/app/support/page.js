"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, wrap,useScroll, useTransform } from "framer-motion";
import ImageSlider from "../ImageSliders";
import { SLIDES } from "../Images";
import Cards from "../Cart2";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TestimonialCard from "../TestimonialSlider";
export default function Support() {
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
 
       const tabDataa = [    
      { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
     { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
       { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
         { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
           { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
             { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/11.png" },
         
  ];
 const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // don’t go below 1

  const pricePerItem = 300;
  const totalPrice = pricePerItem * quantity;

 return (
    <>
        <Navbar/>                                                            
        <section className="relative w-full h-[80vh] md:h-[60vh] lg:h-[80vh] bg-[url('/Maskgroup-(28).png')] bg-cover bg-center mask-alpha mask-b-from-[#171717] mask-b-from-90% md:mask-b-from-70% mask-b-to-transparent  flex md:items-center justify-center z-0">
              <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 xl:px-0">
              {/* Static Text/Button */}
              <div className="inset-0 flex flex-col md:justify-between md:mt-20 mt-30 text-white z-20">
                    <div className="w-full max-w-7xl flex items-start flex-col px-5 md:px-0 ">
                      <h1 className="text-3xl/8 lg:text-5xl/13 font-bold font-sans mb-4 uppercase text-start ">Lock In Your Power<br /> Ups<span className="text-[#FFBE21]">Checkout Like<br /> a Pro</span>!</h1>
 <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
                    </div>
              </div>
                <img
                    src="/Group 1000001782.png"
                    alt={`Foreground ${slideIndex}`}
                    className="w-113 lg:w-150 mask-b-from-90% mask-b-to-100%"
                  />
              </div>           
            </section>


   <section className="relative w-full  flex  justify-center z-2 py-20 md:py-40 px-5">
     <div className="absolute w-50 h-100 bg-[#FFBE21] rounded-l-full blur-[200px] right-0 "/>

<div class="w-full text-white max-w-7xl flex  flex-col ">
<div class="flex  justify-between items-center  mb-10">
  <h1 class="text-4xl font-extrabold ">
    SHOPPING <span class="text-yellow-500">CART</span>
  </h1>


  <p class="text-sm text-white ">
    100% Guarantee: Free US Ground Shipping and 30 Days Free Return.
  </p>
</div>
  
  <div class="space-y-6">

   <div class="flex justify-between items-center gap-4 bgglass border border-gray-700 rounded-xl p-4 shadow-md">
  
     
      <div class="flex gap-6">
        <img src="/tab/20.png" alt="Product" class="w-28 h-28 rounded-md object-cover"/>
      <div class="flex flex-col">
        <span class="px-3 py-1 border border-[#FFBE21] bg-[#FFBE21]/13 text-xs rounded-full">Gaming Mouse</span>
       <div>
        <h2 class="mt-2 font-bold text-lg m-0">MAD CATZ R.A.T.1</h2>
        <p class="text-xs text-white">Standard Edition</p>
       </div>
       

     
        <div class="flex items-center gap-2 mt-2">
          <span class="text-sm text-white">Color:</span>
          <button class="w-4 h-4 rounded-full bg-blue-600"></button>
          <button class="px-2 py-1 border border-[#FFBE21] bg-[#FFBE21]/13  text-xs rounded-md hover:bg-[#FFBE21] hover:text-black">Edit</button>
        </div>
      </div>
      </div>

    <div className="flex items-center gap-20">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span>Quantity</span>

          {/* Decrease button */}
          <button
            onClick={decrement}
            className="w-8 h-6 rounded-full border border-white flex items-center justify-center text-[#FFBE21] text-sm"
          >
            --
          </button>

          {/* Quantity display */}
          <span className="py-0 px-2 bg-[#FFBE21]/13 text-[#FFBE21] rounded-full text-sm">
            {quantity}
          </span>

          {/* Increase button */}
          <button
            onClick={increment}
            className="w-8 h-6 rounded-full bg-gradient-to-r from-[#FFBE21] to-[#C26E09] flex items-center justify-center text-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* Price updates dynamically */}
      <span className="font-bold">${totalPrice}</span>

      {/* Remove button */}
      <button className="px-4 py-2 border border-[#FFBE21] bg-[#FFBE21]/13 rounded-lg hover:bg-[#FFBE21] hover:text-black">
        Remove
      </button>
    </div>
    </div>
     <div class="flex justify-between items-center gap-4 bgglass border border-gray-700 rounded-xl p-4 shadow-md">
  
     
      <div class="flex gap-6">
        <img src="/tab/20.png" alt="Product" class="w-28 h-28 rounded-md object-cover"/>
      <div class="flex flex-col">
        <span class="px-3 py-1 border border-[#FFBE21] bg-[#FFBE21]/13 text-xs rounded-full">Headphone</span>
       <div>
        <h2 class="mt-2 font-bold text-lg m-0">Steelseries Siberia 200 Green</h2>
        <p class="text-xs text-white">Standard Edition</p>
       </div>
       

     
        <div class="flex items-center gap-2 mt-2">
          <span class="text-sm text-white">Color:</span>
          <button class="w-4 h-4 rounded-full bg-green-600"></button>
          <button class="px-2 py-1 border border-[#FFBE21] bg-[#FFBE21]/13  text-xs rounded-md hover:bg-[#FFBE21] hover:text-black">Edit</button>
        </div>
      </div>
      </div>

    <div className="flex items-center gap-20">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span>Quantity</span>

          {/* Decrease button */}
          <button
            onClick={decrement}
            className="w-8 h-6 rounded-full border border-white flex items-center justify-center text-[#FFBE21] text-sm"
          >
            --
          </button>

          {/* Quantity display */}
          <span className="py-0 px-2 bg-[#FFBE21]/13 text-[#FFBE21] rounded-full text-sm">
            {quantity}
          </span>

          {/* Increase button */}
          <button
            onClick={increment}
            className="w-8 h-6 rounded-full bg-gradient-to-r from-[#FFBE21] to-[#C26E09] flex items-center justify-center text-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* Price updates dynamically */}
      <span className="font-bold">${totalPrice}</span>

      {/* Remove button */}
      <button className="px-4 py-2 border border-[#FFBE21] bg-[#FFBE21]/13 rounded-lg hover:bg-[#FFBE21] hover:text-black">
        Remove
      </button>
    </div>
    </div>
  </div>

 
  <div class="mt-10">
    <p class="mb-2">Have a Promo Code?</p>
    <div class="flex gap-3">
      <input type="text" placeholder="Promo code" class="px-4 py-2 rounded-full text-black focus:outline-none flex-1"/>
      <button class="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">Apply</button>
    </div>
  </div>


  <div class="mt-8 text-right space-y-2">
    <p>2 Item(s) Subtotal <span class="ml-4">$500</span></p>
    <p>Shipping and Handling <span class="ml-4">N/A</span></p>
    <p class="font-bold">Order Total <span class="ml-4">$500</span></p>
  </div>


  <div class="mt-6 flex justify-end">
    <button class="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-md shadow-md">
      SECURE CHECKOUT
    </button>
  </div>
</div>

 </section>

   <section className="relative w-full  flex flex-col items-center justify-center z-2 py-20 md:py-40 px-5">
       <div className="absolute w-70 h-100 bg-[#FFBE21] rounded-l-full blur-[200px] left-0"/>
        <div className="bgglass bg-cover rounded-2xl w-full max-w-7xl relative flex flex-col items-center justify-center my-10 py-16 lg:py-16 xl:py-26">
 <div className="max-w-7xl grid grid-cols-1 gap-y-20 sm:grid-cols-2 sm:gap-y-40  lg:grid-cols-4 gap-6 lg:px-15 xl:px-20">
  <div className="flex flex-col items-center  gap-4 p-4">
<div className="w-fit p-5 bg-black shadow-[#FFBE21]/22 shadow shadow-[0px_0px_20px_10px] rounded-full flex justify-center mx-auto">
  <img src="../Maskgroup-(24).png" alt="" />
</div>
<h4 className="text-base md:text-2xl font-bold uppercase text-white mt-3 text-center" >Free Shipping</h4>
<p className="text-sm md:text-base text-center max-w-2xs text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
  </div>



    <div className="flex flex-col items-center  gap-4 p-4">
<div className="w-fit p-5 bg-black shadow-[#FFBE21]/22 shadow shadow-[0px_0px_20px_10px] rounded-full flex justify-center mx-auto">
  <img src="../Maskgroup-(25).png" alt="" />
</div>
<h4 className="text-base md:text-2xl font-bold uppercase text-white mt-3 text-center" >Return Policy</h4>
<p className="text-sm md:text-base text-center max-w-2xs text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
  </div>



    <div className="flex flex-col items-center  gap-4 p-4">
<div className="w-fit p-5 bg-black shadow-[#FFBE21]/22 shadow shadow-[0px_0px_20px_10px] rounded-full flex justify-center mx-auto">
  <img src="../Maskgroup-(26).png" alt="" />
</div>
<h4 className="text-base md:text-2xl font-bold uppercase text-white mt-3 text-center" >Save Money</h4>
<p className="text-sm md:text-base text-center max-w-2xs text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
  </div>


    <div className="flex flex-col items-center  gap-4 p-4">
<div className="w-fit p-5 bg-black shadow-[#FFBE21]/22 shadow shadow-[0px_0px_20px_10px] rounded-full flex justify-center mx-auto">
  <img src="../Maskgroup-(27).png" alt="" />
</div>
<h4 className="text-base md:text-2xl font-bold uppercase text-white mt-3 text-center" >Support 24/7</h4>
<p className="text-sm md:text-base text-center max-w-2xs text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
  </div>

 </div>

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

   <section className="relative w-full flex flex-col items-center justify-center z-2 py-20 md:py-40 px-5">
      <div className="flex flex-col sm:w-1/2 text-white  items-center text-center">
            <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase ">Testimonials</h1>
            <p className="max-w-md mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
         
      <div className="w-full max-w-7xl flex gap-10 "> 
           <TestimonialCard/>
        </div> 
  
    <div className="absolute  md:w-50 md:h-100 lg:w-50 lg:h-100 bg-[#FFBE21] rounded-l-full blur-[200px] right-50% md:bottom-60 lg:bottom-95 "/>
        <div className="bg-[url('/Maskgroup23).png')] bg-cover rounded-2xl w-full max-w-7xl relative flex flex-col items-center justify-center my-10 lg:mt-30 lg:mb-50 xl:my-40 py-16 md:py-26 lg:py-46">
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
