import React from "react";

import Buymecupofcoffee from "./buymecupofcoffee.jsx";
import Portfolio from "./portfoliobutton.jsx";

// const members = [
//   { name: 'RK', image: '', sponsor: '', portfolio: '' },
//   { name: 'Arijit', image: '', sponsor: '', portfolio: '' },
//   { name: 'RKN', image: '', sponsor: '', portfolio: '' },
// ]

const team = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-1 text-cs-blue tracking-widest">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "United by passion, creativity, and innovation, our diverse team collaborates tirelessly to bring our shared vision to life and deliver exceptional experiences for our users."
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">
                  Rishi Kubba (RK)

                  </h2>
                  <span className="text-gray-500 mb-3 gap-2  flex-items-center ">Owner {" "}</span>
                  <p className="mb-4">
                  United by passion, creativity, and innovation, our diverse team
                  </p>

                  <p className="inline-flex gap-2">
                  <a className="cursor-pointer" href=" "> <Portfolio/></a>
                  <a className="cursor-pointer" href=" "> <Buymecupofcoffee/></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/201x201"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">
                    Arijit
                  </h2>
                  <h3 className="text-gray-500 mb-3">Lead Developer</h3>
                  <p className="mb-4">
                  United by passion, creativity, and innovation, our diverse team
                  </p>
                  <p className="inline-flex gap-2">
                  <a className="cursor-pointer" href=" "> <Portfolio/></a>
                  <a className="cursor-pointer" href=" "> <Buymecupofcoffee/></a>
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/204x204"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">
                    RKN
                  </h2>
                  <h3 className="text-gray-500 mb-3">Developer</h3>
                  <p className="mb-4">
                  United by passion, creativity, and innovation, our diverse team
                  </p>
                  <p className="inline-flex gap-2">
                  <a className="cursor-pointer" href=" "> <Portfolio/></a>
                  <a className="cursor-pointer" href=" "> <Buymecupofcoffee/></a>
                  </p>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default team;
