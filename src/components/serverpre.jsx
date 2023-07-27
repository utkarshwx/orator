import React from "react";

const serverpre = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center text-center justify-center">
          <div className="text-white text-center  mb-10">
            <h1 className="text-5xl">Buy Premium Plans</h1>
          </div>

          <div class=" bg-cs-dblue rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-white text-3xl font-medium  title-font mb-5">
              Lifetime Plan
            </h2>
            
            <button class="text-white bg-cs-blue border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs mt-3 text-gray-500">
            Cancelled means that future reoccurring payments have been cancelled For subscription
You will still have premium for your current payment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default serverpre;
