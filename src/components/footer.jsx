import React from 'react'

const footer = () => {
  return (
    <div> 
    <footer className="text-gray-400 body-font">
    <div className="container px-3 py-10 mx-auto  flex sm:items-center lg:items-center lg:flex-nowrap md:flex-row md:flex-nowrap flex-wrap flex-col">

      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ORATOR</h2>
          <nav className="list-none mb-10 ">
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
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">LEGAL</h2>
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
        
      </div>
    </div>
    
  </footer></div>
  )
}

export default footer
