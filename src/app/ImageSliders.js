import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Slide3DCarousel() {
  const images = [
    "/Mask group (27).png",
    "/Mask group (28).png",
    "/Mask group (29).png",
    "/Mask group (27).png"
   
  ];
const texts = [
  "G-Mouse",
  "HeadPhone",
  "LED-Coved",
  "G-Mouse"
];
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => paginate(1), 3000);
    return () => clearInterval(id);
  }, []);

  const paginate = (direction) => {
    setIndex((i) => (i + direction + images.length) % images.length);
  };

  // positions: only 3 items (center, left, right)
  const getPosition = (i) => {
    const diff = (i - index + images.length) % images.length;

    if (diff === 0) return { x: 0, scale: 1, rotateY: 0, zIndex: 5 }; // center
    if (diff === 1) return { x: 720, scale: 0.8, rotateY: -25, zIndex: 4 }; // right
    if (diff === images.length - 1)
      return { x: -720, scale: 0.8, rotateY: 25, zIndex: 4 }; // left
    return { x: 0, scale: 0.1, opacity: 0, zIndex: 0 }; // hide all others
  };

  return (
<div className="relative w-full h-[clamp(180px,calc(180px+70*(100vw-320px)/92),250px)] md:h-[560px] flex md:items-center justify-center ">
  {/* sliding images */}
  {images.map((src, i) => (
    <motion.div
      key={i}
      className="absolute px-6"
      animate={getPosition(i)}
      transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
    >
      <img
        src={src}
        alt="slide"
        className="w-full  md:h-[430px] lg:h-[480px] object-cover rounded-xl shadow-xl border-2 border-[#C26E09]"
      />
    </motion.div>
  ))}

  {/* static center image (only show when index is settled) */}
  <motion.img
    key={`backs-${index}`}
    src="/backs.png"
    alt="center overlay"
    className="absolute z-0 md:w-[820px] md:h-[650px] lg:w-[820px] lg:h-[650px]  -top-5 md:-top-12 object-contain "
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
  />

  <motion.img
    key={`backtop-${index}`}
    src="/backtop.png"
    alt="top overlay"
    className="absolute z-40 w-12 md:w-18 -top-9 md:top-4 lg:-top-2 object-contain"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
  />

  <motion.img
    key={`backbtm-${index}`}
    src="/backbtm.png"
    alt="bottom overlay"
    className="absolute z-9  w-40 sm:w-64 md:w-90 bottom-[24px] md:bottom-[50px] lg:bottom-[18px] object-contain"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
  />
  <motion.span
    key={`text-${index}`}
    className="absolute z-9 bottom-7  md:bottom-[60px]   lg:bottom-7 text-white text-xs md:text-lg font-bold drop-shadow-lg"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
  >
    {texts[index]}
  </motion.span>
</div>

  );
}
