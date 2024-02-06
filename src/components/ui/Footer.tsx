import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "../SocialLinks";
import { menuLinks, subLinks } from "@app/utils/constants";
import { playstoreLight, appstoreLight, logoWhite } from "@app/assets";
import { ComponentProps } from "@app/types";

interface FooterProps extends ComponentProps {}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bg-primary  overflow-y-hidden">
      <div className="flex flex-col lg:flex-row  px-4 lg:px-[4rem] max-container my-[4rem] lg:my-[6rem] ">
        <div className="text-white w-full lg:w-[40%]">
          <div>
            <Image src={logoWhite} alt="Logo" />
          </div>
          <p className="text-white my-8">
            Hello, we are moduscreate. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team
          </p>
          <div>
            <Link className="inline-block" href="#">
              <Image src={playstoreLight} alt="Play store Link" />
            </Link>
            <Link className="inline-block ml-3" href="#">
              <Image src={appstoreLight} alt="App Store Link" />
            </Link>
          </div>
        </div>
        <div
          className={`flex-1 flex text-white
            ${children ? "lg:ustify-end" : "lg:justify-center"} 
          `}
        >
          {children && children}
          <nav className="my-6">
            <h5 className="mb-6">Menu</h5>
            <ul className="flex flex-col gap-3">
              {menuLinks.map(({ path, label }, idx) => (
                <Link key={idx} href={path}>
                  {label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="max-container  px-4 lg:px-[4rem] ">
        <div className="my-10 h-[1px] w-full bg-white opacity-40" />
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <nav>
            <ul className="flex text-white space-x-4">
              {subLinks.map(({ path, label }, idx) => (
                <Link key={path} href={path}>
                  {label}
                </Link>
              ))}
            </ul>
          </nav>

          <div>
            <SocialLinks color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
