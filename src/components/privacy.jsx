import React from "react";

const privacy = () => {
  return (
    <div>
      <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col text-white">
        <div className="flex items-center mb-3">
          <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-3xl mb-14 font-medium text-cs-blue">
                Privacy Policy
              </h1>
              <h6 className="mb-7 text-xl">
              Your privacy matters most; read our policy to understand how we <b className="text-cs-blue">respect and protect</b> your personal information.
              </h6>
              <p className="leading-relaxed mb-8 ">
                <p className="faq-answer-text font-base text-gray-400">
                  ● Your <u>User ID</u> is saved in the Database only when you{" "}
                  Buy Premium, Blacklist Someone or{" "}
                  Open a Support Ticket.
                  <br />
                  <br />● Your <u>Guild ID</u> is also saved when you use any of
                  the Configuration Commands,{" "}
                  Administration Commands or buy Premium.<br />
                  <br />● <u>Channel IDs</u> are also saved when you setup some
                  systems like Panel, Hooks, Voice Channels{" "}
                  or Logging.<br />
                  <br />● <u>Role IDs</u> are also stored when you use the{" "}
                  Blacklist Role system.
                  <br />
                  <br />● Every content you provide us after creating a{" "}
                  Support Ticket or anything related to that is saved.
                </p>
                <br />
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default privacy;
