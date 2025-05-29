import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";
import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import ProfilePicture from "../ui/ProfilePicture";

const Sidebar = ({ navItems, show, toggleShow, isAuthenticated, user }) => {
  return (
    <AnimatePresence>
      {show && (
        <React.Fragment>
          <Background toggleShow={toggleShow} />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="w-2/3 md:w-1/3 h-screen fixed z-10 top-0 left-0 bg-black rounded-r-2xl p-5 flex flex-col"
          >
            <ul className="flex flex-col flex-1 text-lg text-white divide-kc-gray divide-y-2">
              {navItems.map((item) => (
                <li key={item.title} className="py-3 px-3">
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
              <Link href="/profil">
                <ProfilePicture
                  firstName={user.first_name}
                  lastName={user.last_name}
                  showEmail={true}
                  email={user.email}
                  className="w-full p-2 hover:bg-black-600 rounded-lg transition-colors"
                />
              </Link>
            ) : (
              <Link href="/giris">
                <Button type="button" className="w-full">
                  Giriş Yap
                </Button>
              </Link>
            )}
          </motion.aside>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
