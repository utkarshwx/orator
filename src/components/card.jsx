import React from "react";

const card = ({
    server,
  }) => {
    return (
      <>
        {/*  */}
        <div className="overflow-hidden bg-gray-700 rounded-lg ">
          <img src={server.banner} alt="" className="w-full" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              {server.name}
            </h3>
            
          </div>
        </div>
        {/*  */}
      </>
    );
  };

  export default card