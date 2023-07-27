import React from "react";

const refund = () => {
  return (
    <div>
      <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col text-white">
        <div className="flex items-center mb-3">
          <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-3xl mb-14 font-medium text-cs-blue">
                Refund Policy
              </h1>
              <h6 className="mb-7 text-xl">
              Satisfaction guaranteed - familiarize yourself with our transparent refund policy for a <b className="text-cs-blue">worry-free experience.</b>
              </h6>
              <p className="faq-answer-text text-gray-400">
              ● No successful payments would be refunded if you claim the Premium Subscription in your Server.<br/><br/>
              ● If you buy premium in a wrong server, you may ask for transfer of Premium to another server, but can't get refund.<br/><br/>
              ● If your server gets blacklisted, the premium available in that server won't be refunded, but under certain circumstances we may transfer premium to another server of a part of the time remaining in the current premium to expire.<br/><br/>
                </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default refund;
