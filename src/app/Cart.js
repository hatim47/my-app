 import { motion } from "framer-motion";

export default function Cart({ title, num, desc, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="relative p-6 bgglass shadow shadow-[#C26E09]/10 hover:shadow-lg  rounded-xl overflow-hidden   transition-all duration-300"
    >
      {/* Game Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {/* Content */}
      <div className="py-5 md:p-5 flex flex-col">
        <div className="flex justify-between">
        <h3 className="text-base md:text-xl font-bold uppercase text-white group-hover:text-[#FFBE21] transition-colors">
          {title}
        </h3>
 <p className="text-lg font-bold uppercase text-white group-hover:text-[#FFBE21] transition-colors">
          ${num}
        </p>
        </div>
        <p className="text-gray-300 text-sm mt-2 line-clamp-2">{desc}</p>
        {/* Download Button */}
        <div className="mt-6 flex justify-center">
        <button className="px-8   lg:px-10 xl:px-22 py-3 text-base bg-linear-41 from-[#FFBE21] to-[#C26E09] -skew-x-16 ">
        <span className="skew-x-16 block text-sm text-white font-semibold">
  DOWNLOAD NOW
  </span>
        </button>
        </div>
      </div>
      {/* Decorative Glow Border */}
    </motion.div>
  );
}


