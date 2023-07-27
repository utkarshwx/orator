import React from "react";
import logo from "../images/oratorlogo.png";
import logo2 from "../images/orator2logo.png";

const bots = () => {
  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4 justify-center items-center gap-16">
            <div className="xl:w-1/2 md:w-1/2 p-3">
              <div className="bg-cs-dblue bg-opacity-40 border-t-2 border-b-2 sm:border-2 justify-center flex flex-wrap overflow-visible -m-4 border-cs-blue rounded-lg items-center text-center md:text-left">
              <div className="md:w-1/2 p-4">
                <img
                  className="h-30 rounded w-full object-cover object-center"
                  src={logo}
                  alt="content"
                />
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4 items-center">
                
                <h2 className="md:text-4xl text-2xl text-white font-medium title-font mb-4">
                  Orator
                </h2>
            
                <button className="flex items-center mt-auto text-white bg-cs-blue border-0 py-2 px-4 w-36 focus:outline-none hover:bg-blue-600 font-semibold rounded">
                <a href="https://discord.com/api/oauth2/authorize?client_id=948637316145102868&permissions=3145760&scope=bot%20applications.commands" className="flex items-center">
                  Add to Server
                  
                  </a>
                </button>
                </div>
              </div>
            </div>
            
            <div className="xl:w-1/2 md:w-1/2 p-3">
            <div className="bg-[#35111d] bg-opacity-40 border-t-2 border-b-2 sm:border-2 flex flex-wrap overflow-visible justify-center -m-4 border-red-500 rounded-lg items-center text-center md:text-left">
              <div className="md:w-1/2 p-4">
                <img
                  className="h-30 rounded w-full object-cover object-center"
                  src={logo2}
                  alt="content"
                />
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4">
                
                
                <h2 className="md:text-4xl text-2xl text-white font-medium title-font mb-4">
                  Orator 2
                </h2>
                <button className="flex items-center mt-auto text-white bg-red-600 border-0 py-2 px-4 w-36 focus:outline-none hover:bg-red-800 font-semibold rounded">
                <a href="https://discord.com/api/oauth2/authorize?client_id=948637316145102868&permissions=3145760&scope=bot%20applications.commands" className="flex items-center">
                  Add to Server
                  
                  </a>
                </button>
             </div>   
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default bots;
