import ImageSlider from "./ImageSlider";
import Tabs from "./Tabs";
import Cards from "./Cart";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Sliders";
import TestimonialCard from "./TestimonialSlider";
export default function Hero() {

  
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
        <Slider/>



  <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 z-2">    
<div className="absolute w-50 h-50 sm:w-100 sm:h-100 bg-[#FFBE21] rounded-full blur-[200px] -right-15 "/>
       <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col pt-60">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-3xl lg:text-5xl font-bold font-sans text-center mb-4 tracking-wider uppercase max-w-xl">choose your <span className="text-[#FFBE21]">favorite</span> game</h1>
          <p className="text-center text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,< br className="hidden md:block "/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>


      <div className="flex flex-col items-center w-full pb-10 pt-20 md:pt-10">
   <ImageSlider />
      
      <div className="flex gap-x-6 mt-6">
        <button className="px-5 py-2    lg:px-8 lg:py-4 text-base bg-linear-41 from-[#FFBE21] to-[#C26E09] -skew-x-16 font-semibold ">
         <span className="skew-x-16 block text-xs lg:text-base text-white ">
  DOWNLOAD
  </span>
        </button>
         <button className="px-5 py-2 lg:px-8 lg:py-4 text-base border-1 border-[#C26E09] text-gradiant -skew-x-16 font-semibold transition-all duration-300 hover:bg-[#FFF3E0]/10 hover:shadow-[3px_3px_0px_#FFBE21] shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px]">
        <span className="skew-x-16 block text-xs lg:text-base text-gradiant ">
    LEARN MORE
  </span>
        </button>
         </div>
    </div>
    
    </section>
  <section className="relative w-full min-h-screen flex items-center justify-center px-5 xl:px-0">
  {/* Yellow blurred background */}
  <div className="absolute w-[500px] h-[500px] bg-[#FFBE21] rounded-full blur-[250px] -left-60 top-50 sm:top-20" />

  {/* Content container */}
  <div className="relative z-20 w-full max-w-7xl flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-12 bg-black/40 backdrop-blur-md rounded-xl shadow-xl py-20 px-6 md:px-12 mt-24 md:mt-40">
    
    {/* Text Section */}
    <div className="flex flex-col md:w-1/2 text-white text-center md:text-left items-center  md:items-start ">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 tracking-wider uppercase leading-tight">
        <span className="text-[#FFBE21]">Discover</span> our world
      </h1>
      <p className="text-sm  md:text-base max-w-md mx-auto md:mx-0 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uased do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
        <button className="px-5 py-2 lg:px-8 lg:py-4 text-base border-1 border-[#C26E09] text-gradiant -skew-x-16 font-semibold transition-all duration-300 hover:bg-[#FFF3E0]/10 hover:shadow-[3px_3px_0px_#FFBE21] shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px]">
        <span className="skew-x-16 block text-xs lg:text-base text-gradiant ">
          LEARN MORE
        </span>
      </button>
      
    </div>
<div className="relative md:w-1/2 flex justify-center md:justify-start z-30">
   <img src="/image50.png" alt="slide" className="w-100 absolute -bottom-57 max-[912px]:-bottom-52 max-[854px]:-bottom-55 lg:-bottom-60 md:-left-10" />
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
<section className="relative w-full flex flex-col items-center justify-center z-2 py-20 md:py-40 px-5">
      <div className="flex flex-col sm:w-1/2 text-white items-center text-center">
            <h1 className="text-3xl lg:text-5xl font-bold font-sans mb-4 uppercase ">Testimonials</h1>
            <p className="max-w-md mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
         
      <div className="w-full max-w-7xl flex gap-10 "> 
           <TestimonialCard/>
        </div> 
  
    <div className="absolute  md:w-50 md:h-100 lg:w-50 lg:h-100 bg-[#FFBE21] rounded-l-full blur-[200px] right-50% md:bottom-60 lg:bottom-95 "/>
        <div className="bg-[url('/Maskgroup23).png')] bg-cover rounded-2xl w-full max-w-7xl relative flex flex-col items-center justify-center my-10 lg:mt-30 lg:mb-50 xl:my-40 py-16 md:py-26 lg:py-46">
     <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold font-sans mb-6 text-white uppercase">Salford Newsletter</h1>
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

