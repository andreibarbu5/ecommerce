import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import earbudState from "../atoms/EarbudState";

const Sidebar = () => {
  const [{ itemsNumber, itemName }] = useRecoilState(earbudState);

  return (
    <div>
      <div className=" top-0 right-0 fixed h-screen bg-gray-800 w-[10rem] z-40 text-white">
        <div className="">
          <h1 className="">Product: {itemName}</h1>
          <h1 className="">You added {itemsNumber} items to the cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
