import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="text-gray-400 body-font">
        <div className="container px-5 pt-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center items-center justify-center order-first">
            
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                ORATOR
              </h2>
              <nav className="list-none mb-10">
              <li>
              <a href="https://discord.gg/dc2kVDAzQr" className="text-gray-400 hover:text-white">Support</a>
            </li>
            <li>
              <a href="/en/team" className="text-gray-400 hover:text-white">Team</a>
            </li>
            <li>
              <a href="/en/pricing" className="text-gray-400 hover:text-white">Premium</a>
            </li> 
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                LEGAL
              </h2>
              <nav className="list-none mb-10">
              <li>
              <a href="/en/privacypolicy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="/en/termsofservice" className="text-gray-400 hover:text-white">Terms of Service</a>
            </li>
            <li>
              <a href="/en/refundpolicy" className="text-gray-400 hover:text-white">Refund Policy</a>
            </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                OTHERS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="https://top.gg/bot/948637316145102868/vote" className="text-gray-400 hover:text-white">Vote Orator</a>
                </li>
                <li>
                  <a href="https://discord.com/api/oauth2/authorize?client_id=948637316145102868&permissions=3145760&scope=bot%20applications.commands" className="text-gray-400 hover:text-white">Invite Orator</a>
                </li>
                
              </nav>
            </div>
            
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center justify-center sm:flex-row flex-col">
            
            <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-0">
            Copyright ©️ 2022 - 2024 Orator | Made with 🧡 by WEBX
              
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
