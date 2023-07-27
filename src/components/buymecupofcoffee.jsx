import React from "react";
import { BiCoffeeTogo } from "react-icons/bi";

const buymecupofcoffee = () => {
  return (
    <div>
      <div
        className="bg-yellow-500 text-white font-medium rounded-md px-4 py-1 flex
        items-center justify-center hover:bg-yellow-600 transition duration-300
        ease-in-out shadow-lg">
        <span className="text-base mr-2"><BiCoffeeTogo/></span>
        Sponsor
      </div>
    </div>
  );
};

export default buymecupofcoffee;
