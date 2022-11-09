import Image from "next/image";
import React from "react";

const Product = ({ text1, text2, text3 }) => {
  return (
    <div className="relative z-10 pl-1">
      <p className="text-[12px]">{text1}</p>
      <p className=" text-[19px]">{text2}</p>
      <p className="font-black text-white/70 text-[28px]">{text3}</p>
      <div className="p-1 bg-blue-600 rounded-full text-[12px] text-center w-[5rem] whitespace-nowrap mb-1  ">
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
