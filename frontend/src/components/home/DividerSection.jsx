import React from "react";
import Button from "../ui/Button";

const DividerSection = () => {
  return (
    <div className="divide-y-2 divide-black">
      <div className="bg-gradient-to-tl from-ai-purple to-50% to-purple-500">
        <div className="p-10 md:py-14 md:pr-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
            <h4 className="text-white text-center md:text-start text-2xl lg:text-3xl font-bold">
              platformumuz hakkında daha fazla bilgi edinin
            </h4>
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
        <div className="bg-yellow-300 p-10 md:py-14 md:pr-16">
          <div>
            <h5 className="font-semibold text-lg md:text-xl lg:text-2xl">
              Sorun
            </h5>
            <p className="font-semibold text-xl md:text-2xl lg:text-4xl mt-4">
              Okullar öğrencileri geleceğin gerekli becerileriyle donatmıyor.
            </p>
          </div>
        </div>
        <div className="bg-green-400 p-10 md:py-14 md:pl-16">
          <h5 className="font-semibold text-lg md:text-xl lg:text-2xl">
            Çözüm
          </h5>
          <p className="font-semibold text-xl md:text-2xl lg:text-4xl mt-4">
            Teknoloji destekli, oyunlaştırılmış, sosyal ve alakalı bir ekosistem
            ve müfredat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DividerSection;
