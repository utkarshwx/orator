import React from "react";
import logo from "../images/oratorlogo.png";

import { FaDiscord } from "react-icons/fa";

export default function droppage() {
  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-1 py-5 mt-0 md:mt-10 md:flex-row flex-col items-center">
          <div className=" invisible md:visible ml-40  md:mb-0 mb-30">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={logo}
            />
          </div>
          <div className="lg:flex-grow  lg:pl-14 md:pl-16 flex flex-col  items-center text-center">
            <p className="title-font sm:text-6xl text-6xl mb-4 font-medium text-cs-blue">
              Orator
            </p>
            <p className="text-white font-bold sm:text-2xl text-lg">
              The best Text to Speech bot for Discord.
            </p>
            <p className="mb-8 leading-relaxed text-lg">
              Best TTS bot with custom voice , customisation, panel, logging and
              more.
            </p>
            <div className="flex justify-center">
            <a href="https://discord.com/api/oauth2/authorize?client_id=948637316145102868&permissions=3145760&scope=bot%20applications.commands" className="flex items-center">
              <button className="flex items-center justify-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-base font-semibold gap-2 align-text-top">
                Add to Server{" "}
                <span>
                  {" "}
                  <FaDiscord className="text-xl align-baseline" />
                </span>
              </button>
              </a>
              <a href="/en/pricing">
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base">
                Premium
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
