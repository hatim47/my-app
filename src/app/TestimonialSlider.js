"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      logo: "/Group1000001783.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      userImg: "/Ellipse12.png",
      name: "Arlene McCoy",
      company: "McDonald’s",
      verified: true,
    },
    {
      logo: "/Group1000001783.png",
      text: "Ut enim ad minim veniam, quis nostrud exercitation...",
      userImg: "/Ellipse12.png",
      name: "Devon Lane",
      company: "Starbucks",
      verified: true,
    },
    {
      logo: "/Group1000001783.png",
      text: "Duis aute irure dolor in reprehenderit in voluptate...",
      userImg: "/Ellipse12.png",
     name: "Devon Lane",
      company: "Apple",
      verified: true,
    },
    {
      logo: "/Group1000001783.png",
      text: "Excepteur sint occaecat cupidatat non proident...",
      userImg: "/Ellipse12.png",
      name: "Jacob Jones",
      company: "Google",
      verified: true,
    },
      {
      logo: "/Group1000001783.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      userImg: "/Ellipse12.png",
      name: "Arlene McCoy",
      company: "McDonald’s",
      verified: true,
    },
    {
      logo: "/Group1000001783.png",
      text: "Ut enim ad minim veniam, quis nostrud exercitation...",
      userImg: "/Ellipse12.png",
      name: "Devon Lane",
      company: "Starbucks",
      verified: true,
    },
    {
      logo: "/Group1000001783.png",
      text: "Duis aute irure dolor in reprehenderit in voluptate...",
      userImg: "/Ellipse12.png",
     name: "Devon Lane",
      company: "Apple",
      verified: true,
    },
    {
      logo: "/Group1000001783.png",
      text: "Excepteur sint occaecat cupidatat non proident...",
      userImg: "/Ellipse12.png",
       name: "Devon Lane",
      company: "Google",
      verified: true,
    },
  ];

  const [index, setIndex] = useState(0);
const [itemsPerPage, setItemsPerPage] = useState(2);

// responsive items per page
useEffect(() => {
  const handleResize = () => {
    setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// autoplay
useEffect(() => {
  const id = setInterval(() => {
    setIndex((prev) => (prev + itemsPerPage) % testimonials.length);
  }, 5000);
  return () => clearInterval(id);
}, [testimonials.length, itemsPerPage]);

// visible cards
const visibleCards = Array.from({ length: itemsPerPage }, (_, i) =>
  testimonials[(index + i) % testimonials.length]
);

// pagination
const totalPages = Math.ceil(testimonials.length / itemsPerPage);
const currentPage = Math.floor(index / itemsPerPage);

  // animation variants
  const containerVariants = {
  initial: { x: 150, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.15, type: "spring", stiffness: 80 },
  },
  exit: {
    x: -150,
    opacity: 0,
    scale: 0.95,   // 👈 shrink when leaving
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const cardVariants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 200 },
  },
  exit: {
    y: -20,
    opacity: 0,
    scale: 0.9,   // 👈 shrink each card individually
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex gap-6"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {visibleCards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="w-full max-w-7xl p-6 bgglass flex flex-col gap-6 rounded-2xl"
            >
              <img src={card.logo} className="w-30 mt-10" alt="" />
              <p className="mb-1 w-full text-white">{card.text}</p>
              <div className="bg-white/10 h-px" />
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <img src={card.userImg} alt="" className="w-10 sm:w-15" />
                  <div>
                    <p className="text-sm sm:text-xl text-white">{card.name}</p>
                    <p className="text-xs text-white">{card.company}</p>
                  </div>
                </div>
                {card.verified && (
                  <div className="flex items-center gap-4">
                    <img src="/Group34.png" alt="" />
                    <p className="text-xs text-white">verified</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* pagination dots */}
      <div className="flex items-center justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i * 2)}
            className={`mt-5 rounded-full transition ${
              i === currentPage ? "bg-linear-41 from-[#FFBE21] to-[#C26E09] w-5 h-5" : "bg-white w-3 h-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
