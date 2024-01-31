import React, { FC, Fragment } from "react";
import { Footer, Header } from ".";
import { ComponentProps, LinkProps } from "@app/types";

interface LayoutProp extends ComponentProps {
  isNav?: boolean;
  isFooter?: boolean;
  links?: LinkProps[];
}

const Layout: FC<LayoutProp> = ({
  children,
  links,
  isFooter = true,
  isNav = true,
}) => {
  return (
    <Fragment>
      <Header links={links} isNav={isNav} />
      {children}
      {isFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
