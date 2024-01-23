import React, { FC, Fragment } from "react";
import { ComponentProps } from "@app/types";
import { Footer, Header } from ".";

interface LayoutProp extends ComponentProps {
  isFooter?: boolean;
}

const Layout: FC<LayoutProp> = ({ children, isFooter = true }) => {
  return (
    <Fragment>
      <Header />
      {children}
      {isFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
