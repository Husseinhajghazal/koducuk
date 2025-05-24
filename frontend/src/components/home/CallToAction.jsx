import React from "react";

const CallToAction = () => {
  return (
    <div className="px-10 py-14 bg-gradient-to-tl from-ai-purple to-50% to-purple-500 flex overflow-x-clip">
      <div className="flex flex-col md:items-center justify-center gap-10 mx-auto">
        <h3 className="text-white text-2xl md:text-4xl font-semibold text-center">
          Koducuk ile çocuklarınızın
          <br /> geleceğine adım atın.
        </h3>
        <a href="/hakkimizda">
          <button className="bg-transparent border-2 w-full md:w-max border-white hover:bg-ai-purple hover:border-ai-purple duration-300 text-white rounded-xl py-4 px-8 font-bold">
            Hakkımızda
          </button>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
