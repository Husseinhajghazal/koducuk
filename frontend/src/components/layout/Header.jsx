"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import BurgerIcon from "@/assets/icons/burger.svg";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

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

export const Header = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((currentValue) => !currentValue);

  return (
    <React.Fragment>
      <div className="bg-black-700 sticky z-10 top-0 left-0">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="/">
              <Image
                src="https://cdn.prod.website-files.com/61d6943d6b5924685ac825ca/64a6a12136e8f756c9df3baa_k-combomark-white.svg"
                alt="koducuk logo"
                width={180}
                height={33}
              />
            </a>
            <ul className="hidden lg:flex items-center gap-6 text-lg text-white">
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
            <a href="/giris">
              <button className="hidden lg:block bg-ai-purple border-2 w-max border-ai-purple hover:bg-transparent duration-300 text-white rounded-xl py-4 px-8 font-bold">
                Giriş Yap
              </button>
            </a>
            <button
              onClick={toggleShow}
              className="block lg:hidden bg-ai-purple border-2 w-max border-ai-purple hover:bg-transparent duration-300 text-white rounded-xl p-3 font-bold"
            >
              <Image
                src={BurgerIcon}
                alt="burger icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        </Container>
      </div>
      <Sidebar navItems={navItems} show={show} toggleShow={toggleShow} />
    </React.Fragment>
  );
};
