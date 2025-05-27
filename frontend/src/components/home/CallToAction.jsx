import React from "react";
import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <div className="px-10 py-14 bg-gradient-to-tl from-ai-purple to-50% to-purple-500 flex overflow-x-clip">
      <div className="flex flex-col md:items-center justify-center gap-10 mx-auto">
        <h3 className="text-white text-2xl md:text-4xl font-semibold text-center">
          Koducuk ile çocuklarınızın
          <br /> geleceğine adım atın.
        </h3>
        <a href="/hakkimizda">
          <Button
            type="button"
            variant="outline"
            className="py-4 px-8 w-full md:max-w"
          >
            Hakkımızda
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
