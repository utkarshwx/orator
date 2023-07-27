import React from "react";
// import Toastl from "./toastl.jsx";

const pricing = () => {
  return (
    <div className="">
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-14">
            <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-cs-blue">
              Pricing
            </h1>
            
            <p className="lg:w-2/3 mx-auto mb-4 mt-3 text-white leading-relaxed text-xl">
              Discover affordability and value in our transparent pricing model
              designed to meet your needs.
            </p>
            <h6 className="mb-5 text-base">
              Satisfaction guaranteed - familiarize yourself with our transparent <a href="/en/refundpolicy"> <u className="text-cs-blue ease-out duration-150 hover:duration-150 hover:text-white">refund policy</u></a> and 1 hour trial on our support <a href="https://discord.gg/dc2kVDAzQr"> <u className="text-cs-blue ease-out duration-150 hover:duration-150 hover:text-white">server</u></a>.
            </h6>

          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-4 rounded-lg border-2 border-blue-900 bg-cs-dblue flex flex-col relative overflow-hidden">
                <h1 className=" sm:text-5xl text-2xl text-white pb-4 mb-3 flex leading-none">
                  Free
                </h1>
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium border-b border-gray-800">
                  missing premium features
                </h2>  
                
                
                <button className="flex items-center mt-auto text-white bg-cs-blue border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
                <a href="https://discord.com/api/oauth2/authorize?client_id=948637316145102868&permissions=3145760&scope=bot%20applications.commands" className="flex items-center">
                  Avail Now
                  
                  </a>
                </button>
                
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-blue-900 bg-cs-dblue flex flex-col relative overflow-hidden">
                <h1 className="sm:text-5xl text-3xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$3</span>
                  <span className="text-lg ml-1 font-normal text-gray-400">
                    /month
                  </span>
                </h1>
                
                <button className="flex items-center mt-auto text-white bg-cs-blue border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
                  Avail Now
                  
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-4 rounded-lg border-2 border-blue-500 bg-cs-dblue flex flex-col relative overflow-hidden">
                <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  RECOMMENDED
                </span>
                <h1 className="sm:text-5xl text-3xl text-white leading-none flex items-center pb-4 mb-3 ">
                  <span>$33</span>
                  <span className="text-lg ml-1 font-normal text-gray-400">
                    /year
                  </span>
                </h1>
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium border-b border-gray-800">
                  $2.75/month
                </h2>                
                <button className="flex items-center mt-auto text-white bg-cs-blue border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
                  Avail Now
                  
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-4 rounded-lg border-2 border-blue-900 bg-cs-dblue flex flex-col relative overflow-hidden">
                <h1 className="sm:text-5xl text-3xl text-white leading-none flex items-center pb-4 mb-3 ">
                  <span>$50</span>
                  <span className="text-lg ml-1 font-normal text-gray-400">
                    /lifetime
                  </span>
                </h1>
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium border-b border-gray-800">
                  Valid till your grave
                </h2>
                
                <button className="flex items-center mt-auto text-white bg-cs-blue border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
                  Avail Now
                  
                </button>
              </div>
            </div>
            
          </div>
          <h6 className="mt-9 text-base text-center">
              Using UPI as payment method? Apologies, UPI payment method is not available on our website at the very moment. You can make payment from our <a href="https://discord.gg/dc2kVDAzQr"> <u className="text-cs-blue ease-out duration-150 hover:duration-150 hover:text-white">server</u></a>.
            </h6>
        </div>
      </section>
    </div>
  );
};

export default pricing;
