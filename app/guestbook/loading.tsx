import React from "react";

const loading = () => {
  return (
    <div className="mt-5 px-6 md:px-0 pb-10 md:max-w-2xl w-full">
      <h1 className="mt-14 font-semibold text-2xl">{`sign here`}</h1>

      <div className="mt-8 ">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    </div>
  );
};

export default loading;
