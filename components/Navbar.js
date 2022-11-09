import { useState } from "react";

import apple from "../assets/apple.png";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import sidebarState from "../atoms/SidebarState";

import { useRecoilState } from "recoil";

const Navbar = () => {
  const [open, setOpen] = useRecoilState(sidebarState);
  console.log(open);
  return (
    <div className=" ">
      <div className="flex justify-between whitespace-nowrap px-4 py-3 sm:px-7 sm:py-6 xl:max-w-[80vw]   mx-auto pt-5">
        {/* Left Side */}
        <div className="flex items-center">
          <div className=" w-9 h-9 sm:w-12 sm:h-12 md:w-12 md:h-12 sm:mr-8 md:mr-10 ">
            <Image src={apple} />
          </div>

          <ul className="hidden sm:flex sm:space-x-5 text-gray-500 font-semibold md:text-[18px]">
            <li>Home</li>
            <li className="">Shop </li>
            <div className="hidden md:flex space-x-10 ">
              <li className="">About us</li>
              <li className="">Blog</li>
              <li className="">Contact us</li>
            </div>
          </ul>
        </div>
        {/* Right Side */}
        <div
          className="flex items-center space-x-4 sm:space-x-6 md:space-x-7"
          onClick={() => setOpen(!open)}
        >
          <button className="text-[18px] md:text-[20px]">Login</button>
          <BsSearch className="hidden sm:block md:text-[20px]" />
          <BsFillBagFill className="text-[18px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
