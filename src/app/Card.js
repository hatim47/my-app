 import { motion } from "framer-motion";
 export default function Card({ title, desc, img }) {
  return (
       <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
       className="p-6 bgglass rounded-xl shadow shadow-[#C26E09]/10 hover:shadow-lg transition w-full">
      <img
        src={img}
        alt={title}
        className="w-full  object-cover rounded-md mb-3"
      />
      <div className="flex flex-col   ">
      <h3 className="text-base md:text-xl text-white font-semibold mb-1 uppercase">{title}</h3>
      <p className="text-white text-sm">{desc}</p>
 <div className="w-full flex  justify-center mt-10">
       <button className="px-8   lg:px-10 xl:px-22 py-3 text-base bg-linear-41 from-[#FFBE21] to-[#C26E09] -skew-x-16 ">
        <span className="skew-x-16 block text-sm text-white font-semibold">
  DOWNLOAD NOW
  </span>
        </button>
         </div>
          </div>
       </motion.div>
  );
}
