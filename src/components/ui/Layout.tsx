import React, { FC, Fragment } from "react";
import { Footer, Header } from ".";
import { ComponentProps, LinkProps } from "@app/types";

interface LayoutProp extends ComponentProps {}

const Layout: FC<LayoutProp> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default Layout;
