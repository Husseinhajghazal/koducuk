"use client";

import React from "react";
import Container from "@/components/layout/Container";
import Image from "next/image";
import AdaptIcon from "@/assets/icons/adaptable.svg";
import CreativeIcon from "@/assets/icons/creativity.svg";
import GamingIcon from "@/assets/icons/gaming.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { motion } from "framer-motion";

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

const socialMedias = [
  { icon: InstagramIcon, link: "https://www.instagram.com/husseindeveloper/" },
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/hussein-haj-ghazal",
  },
  { icon: GithubIcon, link: "https://github.com/Husseinhajghazal" },
];

export default function AboutUsContent() {
  return (
    <Container>
      <div className="py-20 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Koducuk Hakkında
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-kc-gray text-lg md:text-xl max-w-3xl mx-auto"
          >
            koducuk, 5-18 yaş aralığındaki çocuklara yönelik, kodlama konusunda
            online eğitim sunan bir online platformdur. Kidocode, K-12
            öğrencileri için bir teknoloji ve girişimcilik okuludur.
          </motion.p>
        </section>

        {/* Problem Solution Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-yellow-300 p-10 md:p-14"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
              Sorun
            </h2>
            <p className="mt-4 text-xl md:text-2xl lg:text-4xl font-semibold">
              Okullar öğrencileri geleceğin gerekli becerileriyle donatmıyor.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-green-400 p-10 md:p-14"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
              Çözüm
            </h2>
            <p className="mt-4 text-xl md:text-2xl lg:text-4xl font-semibold">
              Teknoloji destekli, oyunlaştırılmış, sosyal ve alakalı bir
              ekosistem ve müfredat.
            </p>
          </motion.div>
        </section>

        {/* Our Principles Section */}
        <section className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            İlkelerimiz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center bg-black-700 p-8 rounded-2xl"
              >
                <Image
                  src={principle.icon}
                  className="size-20 mx-auto"
                  alt={principle.title}
                />
                <div className="mt-6">
                  <h3 className="text-white text-xl font-bold">
                    {principle.title}
                  </h3>
                  <p className="text-kc-gray mt-3">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            İletişim
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-xl">Adres</h3>
              <p className="text-kc-gray">
                Suite L-5-1, Solaris Mont Kiara, Jalan Solaris, Off Jalan Duta
                Kiara, 50480, Kuala Lumpur, Malaysia
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-xl">E-posta</h3>
              <a
                href="mailto:info@koducuk.com"
                className="text-kc-gray hover:text-ai-purple"
              >
                info@koducuk.com
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-xl">Telefon</h3>
              <a
                href="tel:+905388977939"
                className="block text-kc-gray hover:text-ai-purple"
              >
                +905388977939 (İstanbul)
              </a>
              <a
                href="tel:+905388977939"
                className="block text-kc-gray hover:text-ai-purple"
              >
                +905388977939 (Elazığ)
              </a>
            </div>
            <div className="flex gap-6">
              {socialMedias.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    alt="social media icon"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </Container>
  );
}
