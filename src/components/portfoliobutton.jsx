import React from "react";
import { CgWebsite } from "react-icons/cg";

const portfoliobutton = () => {
  return (
    <div>
      <div
        className="bg-blue-500 text-white font-medium rounded-md px-4 py-1 flex
        items-center justify-center hover:bg-blue-600 transition duration-300
        ease-in-out shadow-lg">
        <span class="text-base mr-2"><CgWebsite/></span>
        Portfolio
      </div>
    </div>
  );
};

export default portfoliobutton;
