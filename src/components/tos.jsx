import React from "react";

const tos = () => {
  return (
    <div>
      <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col text-white">
        <div className="flex items-center mb-3">
          <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-3xl mb-14 font-medium text-cs-blue">
                Terms of Service
              </h1>
              <h6 className="mb-7 text-xl">
              Stay informed and empowered: acquaint yourself with our Terms of Service to ensure a smooth and secure journey
              </h6>
              <p className="faq-answer-text text-gray-400">
              ● Owner and Lead Developer has the right to blacklist you from the bot without notifying any information.<br/><br/>
              ● We use some third party services in our products, if you break terms of them, you may get banned from the bot too.<br/><br/>
              ● Servers Breaking Discord's ToS can also get banned. Though every cases aren't same and we may consider some of them.<br/><br/>
              ● If we are asked by Discord for taking any steps, we will do it without giving any warnings.<br/><br/>
              ● We don't allow usage of Orator for illegal uses. Making NSFW sounds and other type of TTS messages which aren't allowed to be done in a public voice channel, that can lead to ban of the user or the server owner or the whole server. Things we consider: - If the whole server is liable behind this issue, the server owner will be banned from using Orator and the whole server will get Blacklisted. - If a single person is liable behind this, then under certain cases that single person will be banned from using Orator.<br/><br/>

              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tos;