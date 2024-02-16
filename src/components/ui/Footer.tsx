import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "../SocialLinks";
import { menuLinks, storeLink, subLinks } from "@app/utils/constants";
import { playstoreLight, appstoreLight, logoWhite } from "@app/assets";
import { ComponentProps } from "@app/types";

interface FooterProps extends ComponentProps {}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bg-primary  overflow-y-hidden">
      <div className="flex flex-col md:flex-row  px-4 lg:px-[4rem] max-container my-[4rem] lg:my-[6rem] gap-6 ">
        <div className="flex-1 text-white ">
          <div className="w-1/2">
            <Image src={logoWhite} alt="Logo" />
          </div>
          <p className="text-white my-8">
            Hello, we are moduscreate. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team
          </p>
          <div className="text-center md:text-start">
            <Link
              href={`${storeLink.playstore}`}
              target="_blank"
              className="inline-block"
            >
              <Image src={playstoreLight} alt="Play store Link" />
            </Link>
            <Link
              href={`${storeLink.appstore}`}
              target="_blank"
              className="inline-block ml-3"
            >
              <Image src={appstoreLight} alt="App Store Link" />
            </Link>
          </div>
        </div>
        <div
          className={`flex-1 flex flex-col text-white
            ${children ? " md:items-center" : "items-center md:items-end"} 
          `}
        >
          {children && children}
          <nav className="">
            {/* <h5 className="mb-6">Menu</h5> */}
            <ul className="flex gap-8">
              {menuLinks.map(({ path, label }, idx) => (
                <li key={idx} className="font-semibold">
                  <Link href={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <SocialLinks color="white" />
          </div>
        </div>
      </div>
      <div className="max-container  px-4 lg:px-[4rem] ">
        <div className="my-10 h-[1px] w-full bg-white opacity-40" />
        <div className="flex flex-col md:flex-row justify-between items-center my-6">
          <p className="text-white">&copy;2024 Revve. All rights reserved. </p>

          <nav className="my-6">
            <ul className="flex text-white space-x-4">
              {subLinks.map(({ path, label }, idx) => (
                <Link key={path} href={path}>
                  {label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
