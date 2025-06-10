"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import BurgerIcon from "@/assets/icons/burger.svg";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Button from "../ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import ProfilePicture from "../ui/ProfilePicture";

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

const Header = () => {
  const [show, setShow] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  const toggleShow = () => setShow((currentValue) => !currentValue);

  return (
    <React.Fragment>
      <div className="bg-black-700 sticky z-10 top-0 left-0">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="/">
              <Image
                src="https://res.cloudinary.com/dx4zoq1lb/image/upload/v1749583086/logo_kxyf6b.png"
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
            {isAuthenticated ? (
              <div
                className="hidden lg:block cursor-pointer"
                onClick={() => router.push("/profil")}
              >
                <ProfilePicture
                  firstName={user.first_name}
                  lastName={user.last_name}
                />
              </div>
            ) : (
              <Link href="/giris">
                <Button type="button" className="hidden lg:block">
                  Giriş Yap
                </Button>
              </Link>
            )}
            <Button
              onClick={toggleShow}
              type="button"
              className="block lg:hidden p-3"
            >
              <Image
                src={BurgerIcon}
                alt="burger icon"
                width={30}
                height={30}
              />
            </Button>
          </div>
        </Container>
      </div>
      <Sidebar
        navItems={navItems}
        show={show}
        toggleShow={toggleShow}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    </React.Fragment>
  );
};

export default Header;
