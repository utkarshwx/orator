import React from "react";

const premium = () => {
  return (
    <div>
      <section class="text-gray-400 bg-cs-blue body-font">
        <div class="container px-5 py-14 mx-auto items-center text-center">
          <div class=" flex flex-col sm:flex-row sm:items-center md:items-center sm:font-center mx-auto">
            <h1 class="flex-grow sm:3xl text-2xl font-medium title-font text-white">
            Get Premium and unlock the limits of Orator!
            </h1>            
          </div>
          <a href="/en/pricing">
          <button class="flex-shrink-0 font-semibold text-blue-500 bg-white border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded text-lg mt-5 sm:mt-5">
            Get Premium!
          </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default premium;