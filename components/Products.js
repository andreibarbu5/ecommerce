import Image from "next/image";
import React from "react";
import bud from "../assets/earbud.png";
import watch from "../assets/watch.png";
import ps5 from "../assets/ps5.png";
import laptop from "../assets/laptop.png";
import vr from "../assets/vr.png";
import alexa from "../assets/alexa.png";
import Product from "./Product";
import { useRecoilState } from "recoil";
import earbudState from "../atoms/EarbudState";
import sidebarState from "../atoms/SidebarState";
const Products = () => {
  console.log("hi");

  const [{ itemsNumber, itemName }, setEarbudState] =
    useRecoilState(earbudState);

  const [open, setOpen] = useRecoilState(sidebarState);

  return (
    <div className="">
      <div className="pt-8 sm:flex">
        <div className="gap-4  grid grid-cols-2  sm:w-[50vw] sm:mr-4 ">
          <div
            className="bg-black rounded-[1rem] relative overflow-hidden text-white h-[10rem] flex items-end p-2 group md:h-[13rem] lg:h-[17rem] cursor-pointer"
            onClick={() => {
              setEarbudState({ itemsNumber: itemsNumber + 1, itemName });
              if (open ? "" : setOpen(() => !open));
            }}
          >
            <Product text1="Enjoy" text2="With" text3="Earphone" />
            <Image
              src={bud}
              className="absolute  -right-5 group-hover:scale-[150%] top-1   scale-[1.2] duration-500 ease-out "
            />
          </div>

          <div className="bg-yellow-500 rounded-[1rem] relative text-white h-[10rem] flex items-end p-2  overflow-hidden group md:h-[13rem] lg:h-[17rem] cursor-pointer">
            <Product text1="Now" text2="Wear" text3="Watch" />
            <Image
              src={watch}
              className="absolute group-hover:scale-[150%] top-1 -right-7 duration-500 ease-out "
            />
          </div>

          <div className="relative bg-neutral-200 col-span-2 rounded-[1rem] text-white h-[10rem] flex items-end p-2  overflow-hidden group md:h-[13rem] lg:h-[17rem] cursor-pointer">
            <Product text1="Best" text2="Gaming" text3="CONSOLE" />
            <Image
              src={ps5}
              className="absolute group-hover:scale-[120%] top-3 -right-14 duration-500 ease-out xs:-mt-[0.5rem] xs:w-[70%]"
            />
          </div>
        </div>

        <div className="  grid grid-cols-2 mt-4 sm:mt-0 sm:w-[50vw] gap-4 mb-4">
          <div className="relative bg-red-500 col-span-2 rounded-[1rem] text-white h-[10rem] md:h-[13rem] lg:h-[17rem] flex items-end p-2  overflow-hidden  group cursor-pointer">
            <Product text1="Trend" text2="Devices" text3="LAPTOP" />
            <Image
              src={laptop}
              className="absolute group-hover:scale-[120%] -top-1.5 -right-14 duration-500 ease-out  xs:-mt-[0.6rem] xs:w-[65%] "
            />
          </div>

          <div className="bg-green-200 rounded-[1rem] relative overflow-hidden text-white h-[10rem] flex items-end p-2 group md:h-[13rem] lg:h-[17rem] cursor-pointer">
            <Product text1="Enjoy" text2="With" text3="Earphone" />
            <Image
              src={vr}
              className="absolute  -right-5 group-hover:scale-[200%] -top-1   scale-[1.2] duration-500 ease-out -rotate-90 "
            />
          </div>

          <div className="bg-blue-200 rounded-[1rem] relative overflow-hidden text-white h-[10rem] flex items-end p-2 group md:h-[13rem] lg:h-[17rem]  cursor-pointer">
            <Product text1="Enjoy" text2="With" text3="Earphone" />
            <Image
              src={alexa}
              className="absolute  -right-6 group-hover:scale-[200%] -top-2   scale-[1.2] duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
