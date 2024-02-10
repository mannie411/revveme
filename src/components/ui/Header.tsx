import React, { FC, Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { ComponentProps, LinkProps } from "@app/types";

import { Logo } from ".";
import { CloseIcon, MenuIcon } from "../icons";
import { DetectOutsideClick } from "@app/hoc";

type Variant = "default" | "empty";

interface HeaderProps extends ComponentProps {
  links?: LinkProps[];
  variants?: Variant;
}

const Header: FC<HeaderProps> = ({ links, variants = "empty", children }) => {
  const router = useRouter();
  const urlPath = router.pathname;
  const [isToggle, setIsToggle] = useState<boolean>(false);

  useEffect(() => {
    router.events.on("beforeHistoryChange", () => {
      if (isToggle) {
        setIsToggle(false);
      }
    });

    () => router.events.on("beforeHistoryChange", () => {});
  }, [isToggle, router]);

  const handleMobileNav = (evt: any) => {
    if (isToggle) {
      setIsToggle(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-[999] bg-white">
      {variants === "default" && (
        <Fragment>
          {/* Desktop */}
          <div className=" relative max-container flex items-center justify-between w-full h-16  px-4 py-8 lg:px-[4rem] md:py-[3rem] z-[100] ">
            <div className="w-[25%] md:w-[10%] ">
              <Link href={"/"} className="w-full h-full">
                <Logo />
              </Link>
            </div>

            <div className="flex justify-between items-center max-lg:hidden w-full ">
              <nav
                className={`flex  flex-1 items-center  ${
                  children ? "justify-center" : "justify-end"
                } `}
              >
                <ul className="flex  items-center gap-12">
                  {links?.map(({ path, label }, idx) => (
                    <li key={label + idx} className={`link `}>
                      <Link
                        className={`${path === urlPath ? "active" : ""}`}
                        href={path}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {children && children}
            </div>

            {links?.length !== 0 && (
              <div className="hidden max-lg:block">
                {!isToggle && (
                  <span role="button" onClick={() => setIsToggle(!isToggle)}>
                    <MenuIcon />
                  </span>
                )}

                {isToggle && (
                  <span role="button" onClick={() => setIsToggle(!isToggle)}>
                    <CloseIcon />
                  </span>
                )}
              </div>
            )}
          </div>
          {/* Mobile */}
          <DetectOutsideClick onClickOutside={handleMobileNav}>
            <div
              className={`absolute shadow-md hidden max-sm:block w-full ${
                isToggle
                  ? "show"
                  : "transition-all ease-in-out invisible opacity-0  scale-y-0"
              } bg-white z-50 top-[4rem]
           
          `}
            >
              <nav className="w-full">
                <ul className="flex flex-col gap-5 padding-x pt-4 padding-b">
                  {links?.map(({ path, label }, idx) => (
                    <li key={label + idx} className={`link `}>
                      <Link
                        className={`${path === urlPath ? "active" : ""}`}
                        href={path}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  {children && <ul>{children}</ul>}
                </ul>
              </nav>
            </div>
          </DetectOutsideClick>
        </Fragment>
      )}

      {variants === "empty" && (
        <Fragment>
          <div className=" relative max-container flex items-center justify-between w-full h-16  px-4 lg:px-[4rem]  py-[4rem] z-[100]">
            <div className="w-[25%] md:w-[10%] ">
              <Link className="logo" href={"/"}>
                <Logo />
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </header>
  );
};

export default Header;
