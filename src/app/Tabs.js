import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 🔥 Import
import Card from "./Card";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabData = {
    tab1: [
      { title: "Free Fire", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/7.png" },
      { title: "Counter Strike", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/8.png" },
      { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/21.png" },
    ],
    tab2: [
      { title: "Forza Horizon 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/9.png" },
      { title: "Asphalt 9 Legends", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/10.png" },
      { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/19.png" },
    ],
    tab3: [
      { title: "Count Masters", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/12.png" },
      { title: "Minecraft", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .", img: "/tab/15.png" },
    ],
  };

  const allCards = [...tabData.tab1, ...tabData.tab2, ...tabData.tab3];

  // 🔥 Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -40, scale: 0.9 },
  };

  return (
   <div className="w-full max-w-7xl mx-auto mt-10 ">
  {/* Tabs */}
  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
    {["all", "tab1", "tab2", "tab3"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`relative flex w-full md:w-38 lg:w-45 py-3 justify-center font-medium transition-all duration-300 mx-2 sm:mx-0 ${
          activeTab === tab
            ? "bg-gradient-to-r from-[#FFBE21] to-[#C26E09] -skew-x-16"
            : "border border-[#C26E09] -skew-x-16 hover:bg-[#FFF3E0]/10 hover:shadow-[3px_3px_0px_#FFBE21] shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px]"
        }`}
      >
        <span
          className={`skew-x-16 uppercase text-center block font-bold ${
            activeTab === tab ? "text-white" : "text-gradiant"
          }`}
        >
          {tab === "all"
            ? "View All"
            : tab === "tab1"
            ? "Battle Games"
            : tab === "tab2"
            ? "Sport Games"
            : "Kids Games"}
        </span>
      </button>
    ))}
  </div>


      {/* Content */}
      <div className="py-15 rounded-b-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {(activeTab === "all" ? allCards : tabData[activeTab]).map(
              (card, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4, delay: i * 0.1 }} // 🔥 Staggered animation
                >
                  <Card {...card} />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
