import React, { FC, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ComponentProps, LinkProps } from "@app/types";
import { Footer, Header } from ".";

import { menuLinks } from "@app/utils/constants";
import { download } from "@app/assets";

interface LayoutProp extends ComponentProps {}

const Layout: FC<LayoutProp> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export const BaseLayout = (page: any) => (
  <Layout>
    <Header links={menuLinks} variants="default">
      <Link className="bg-primary text-white rounded py-2 px-3" href={"#"}>
        <span className="inline-block">Download Revve </span>
        <Image
          className="inline-block ml-2"
          src={download}
          alt="Download revve"
        />
      </Link>
    </Header>
    {page}
    <Footer />
  </Layout>
);

export default Layout;
