import React, { FC, Fragment, useState } from "react";
import Link from "next/link";

import { ComponentProps, LinkProps } from "@app/types";

import { Logo } from ".";
import { CloseIcon, MenuIcon } from "../icons";
import { subLinks } from "@app/utils/constants";

interface HeaderProps extends ComponentProps {
  links?: LinkProps[];
}

const Header: FC<HeaderProps> = ({ links }) => {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  return (
    <header className="absolute w-full z-[999]">
      <div className=" relative max-container flex items-center justify-between w-full h-16  px-4  py-12 z-[100]">
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

        <Fragment>
          <nav className="flex  items-center max-lg:hidden justify-end w-full">
            <ul className="flex  items-center gap-5">
              {links?.map(({ path, label }, idx) => (
                <li key={label + idx}>
                  <Link href={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden max-lg:block">
            {isToggle && (
              <span role="button" onClick={() => setIsToggle(!isToggle)}>
                <MenuIcon />
              </span>
            )}

            {!isToggle && (
              <span role="button" onClick={() => setIsToggle(!isToggle)}>
                <CloseIcon />
              </span>
            )}
          </div>
        </Fragment>
      </div>
      <div
        className={`absolute shadow-md max-lg:block w-full ${
          !isToggle
            ? "show"
            : "transition-all ease-in-out invisible opacity-0  scale-y-0"
        } bg-white z-50 top-[4rem]
           
          `}
      >
        <nav className="w-full">
          <ul className="flex flex-col gap-5 padding-x padding-y">
            {links?.map(({ path, label }, idx) => (
              <li key={label + idx}>
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
