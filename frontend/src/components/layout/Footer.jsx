import React from "react";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";

const navItems = [
  {
    title: "Ana Sayfa",
    href: "/",
  },
  {
    title: "Planlar",
    href: "/planlar",
  },
  {
    title: "Kurslar",
    href: "/kurslar",
  },
  {
    title: "Hakkımızda",
    href: "/hakkimizda",
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

const Footer = () => {
  return (
    <div className="bg-black-700">
      <Container>
        <div className="py-20 divide-y-2 divide-kc-gray">
          <div className="grid grid-cols-3 gap-14 pb-10">
            <div>
              <a href="/">
                <Image
                  src="https://cdn.prod.website-files.com/61d6943d6b5924685ac825ca/64a6a12136e8f756c9df3baa_k-combomark-white.svg"
                  alt="koducuk logo"
                  width={180}
                  height={33}
                />
              </a>
              <p className="text-kc-gray text-sm font-medium mt-10">
                Kidocode, K-12 öğrencileri için bir teknoloji ve girişimcilik
                okuludur. Topluluğumuz, yapay zeka destekli araçlar, birinci
                sınıf eğitimciler ve talep gören kampüs olanaklarının bir
                kombinasyonuyla eğitim sistemini modern çağa göre yeniden inşa
                etmeye kararlıdır.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold">Koducuk</h5>
              <ul className="flex flex-col gap-3 text-kc-gray mt-3">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="hover:text-ai-purple hover:text-xl duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold">İletişim</h5>
              <p className="text-kc-gray mt-3">
                Suite L-5-1, Solaris Mont Kiara, Jalan Solaris, Off Jalan Duta
                Kiara, 50480, Kuala Lumpur, Malaysia
              </p>
              <div className="text-kc-gray flex flex-col gap-3 mt-6">
                <a href="mailto:info@koducuk.com">info@koducuk.com</a>
                <a href="tel:+905388977939">+905388977939 (İstanbul)</a>
                <a href="tel:+905388977939">+905388977939 (Elazığ)</a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-10">
            <ul className="flex gap-5">
              {socialMedias.map((item) => (
                <li className="hover:scale-105 duration-300">
                  <a href={item.link}>
                    <Image src={item.icon} width={30} height={30} alt="icon" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-kc-gray">© 2025 All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
