import React from "react";
import Container from "@/components/layout/Container";
import AdaptIcon from "@/assets/icons/adaptable.svg";
import CreativeIcon from "@/assets/icons/creativity.svg";
import GamingIcon from "@/assets/icons/gaming.svg";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

const principles = [
  {
    title: "Uyarlanabilir",
    icon: AdaptIcon,
    description:
      "Her şeyin birden fazla yolu olduğuna inanıyoruz ve her öğrencinin ihtiyaçlarına cevap verebilmek için yaklaşımımızda sürekli çeşitlilik sağlamaya çalışıyoruz.",
  },
  {
    title: "Yaratıcılık",
    icon: CreativeIcon,
    description:
      "Çocukların yaratarak en iyi şekilde öğrendiklerine inanıyoruz. Yaratıcılıklarını ifade ederek, bilgilerinin oluşumunu pekiştirmeye yardımcı olan yeni ve değerli bir şey üretirler.",
  },
  {
    title: "Oyunlaştırılmış öğrenme",
    icon: GamingIcon,
    description:
      "Öğrenmek sıkıcı değil. Okul sıkıcı. Ama puanlar, savaşlar, rozetler, öğeler ve daha fazlasıyla eğlenceli hale getirdik.",
  },
];

const AboutUsSection = () => {
  return (
    <div className="bg-purplish-black">
      <Container>
        <div className="py-20">
          <SectionHeader
            eyebrow="İlkelerimiz"
            link="Hakkimizda"
            title="Eğitime modern bir yaklaşım"
          />
          <div className="mt-20 flex flex-nowrap gap-12">
            {principles.map((principle) => (
              <div key={principle.title} className="text-center">
                <Image
                  src={principle.icon}
                  className="size-20 mx-auto"
                  alt={principle.title}
                />
                <div className="mt-6">
                  <h5 className="text-white text-xl font-bold">
                    {principle.title}
                  </h5>
                  <p className="text-kc-gray mt-3">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;
