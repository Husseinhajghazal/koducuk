import React from "react";
import Container from "@/components/layout/Container";

const DividerSection = () => {
  return (
    <div className="divide-y-2 divide-black">
      <div className="bg-gradient-to-tl from-ai-purple to-50% to-purple-500">
        <Container>
          <div className="py-14 flex items-center justify-between">
            <h4 className="text-white text-3xl font-bold">
              platformumuz hakkında daha fazla bilgi edinin
            </h4>
            <a href="/hakkimizda">
              <button className="bg-transparent border-2 w-max border-white hover:bg-ai-purple hover:border-ai-purple duration-300 text-white rounded-xl py-4 px-8 font-bold">
                Hakkımızda
              </button>
            </a>
          </div>
        </Container>
      </div>
      <div className="grid grid-cols-2 divide-x-2 divide-black">
        <div className="bg-yellow-300 py-14 pl-[185px] pr-16">
          <h5 className="font-semibold text-2xl">Sorun</h5>
          <p className="font-semibold text-4xl mt-4">
            Okullar öğrencileri geleceğin gerekli becerileriyle donatmıyor.
          </p>
        </div>
        <div className="bg-green-400 py-14 pr-[185px] pl-16">
          <h5 className="font-semibold text-2xl">Çözüm</h5>
          <p className="font-semibold text-4xl mt-4">
            Teknoloji destekli, oyunlaştırılmış, sosyal ve alakalı bir ekosistem
            ve müfredat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DividerSection;
