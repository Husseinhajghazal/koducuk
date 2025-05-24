import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import React from "react";

const features = [
  "Esnek zamanlama",
  "Çevrimiçi erişim",
  "Ücretsiz pratik",
  "Oynayarak Öğren",
  "Her zaman, her yerde",
];

const TapeSection = () => {
  return (
    <div className="py-14 bg-gradient-to-tl from-ai-purple to-50% to-purple-500 flex overflow-x-clip">
      <div className="flex flex-none items-center justify-between gap-12 text-black text-3xl font-bold animate-move-left [animation-duration:20s]">
        {[...new Array(2)].fill(0).map((_, idx) => (
          <React.Fragment key={idx}>
            {features.map((feature) => (
              <React.Fragment key={feature}>
                <div>{feature}</div>
                <Image
                  src={StarIcon}
                  className="size-8 text-white"
                  alt="star"
                />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TapeSection;
