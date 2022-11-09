import beats from "../assets/beats.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="    h-[20rem] rounded-[0.6rem] px-4  py-4 mx-auto flex   relative pt-6   md:h-[25rem] ">
        <div className="absolute w-[11rem] top-4 right-0 xs:right-[1.5rem] sm:right-[4.5rem] lg:right-[7rem] xl:right-[17rem] 2xl:right-[5rem]  xs:top-[1.5rem]  sm:top-[2.5rem] lg:top-[6rem] 2xl:top-[1.5rem] xs:w-[13rem] md:w-[15rem] lg:w-[13rem] 2xl:w-[16rem]  sm:rotate-[13deg] -scale-x-100 transform  lg:z-10   ">
          <Image src={beats} />
        </div>
        <div className="absolute bg-gray-400/50 -mx-4 -my-4  rounded-[0.6rem] w-full  h-full  "></div>

        <div className="flex flex-col justify-end xs:justify-center h-full  px-1  md:px-4  lg:mx-auto xl:w-[78vw]">
          <p className="text-[0.95rem] xs:text-[1.6rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.7rem]   font-semibold -mb-1 z-20   sm:-mb-4">
            Beats Solo
          </p>
          <p className="text-[1.8rem] font-extrabold -mb-2 xs:text-[3rem]  sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]  z-20 sm:-mb-8  ">
            Wireless
          </p>
          <p className="text-[2.4rem] xs:text-[4rem] sm:text-[5.2rem] md:text-[6rem] lg:text-[7.5rem]  xl:text-[8.5rem] font-black text-white z-20 xs:z-0 sm:-mb-4 ">
            HEADPHONES
          </p>
          <div className="p-2 bg-blue-600 rounded-full text-white text-center    w-[8rem] sm:w-[10rem]  md:w-[13rem] whitespace-nowrap text-[10px] px-4     z-20   sm:text-center  ">
            <button className="h-[1.3rem] md:h-[1.7rem] xl:h-[2rem] text-[10px] md:text-[13px]  ">
              Shop By Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
