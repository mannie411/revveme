import React, { FC, Fragment, useState, createContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "@app/types";
import { Button, Footer, Header } from ".";

import { menuLinks, storeLink } from "@app/utils/constants";
import { download } from "@app/assets";
import { getPlatformOS } from "@app/utils";
import { QRModal } from "..";

interface LayoutProp extends ComponentProps {}
type LayoutContextProp = {
  storeRedirect: () => void;
};

export const LayoutContext = createContext<LayoutContextProp>({
  storeRedirect: () => {
    console.log("default");
  },
});

const Layout: FC<LayoutProp> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export const BaseLayout = (page: any) => {
  const [show, setShow] = useState<boolean>(false);

  const storeRedirect = () => {
    console.log("Initiating...");

    const platform = getPlatformOS();

    if (platform === "Android") {
      window.open(storeLink.playstore, "_blank");
      return;
    }

    if (platform === "iOS" || platform === "MacOS") {
      window.open(storeLink.appstore, "_blank");
      return;
    }

    setShow(true);

    return;
  };

  const toogleQRModal = (evt: any) => {
    if (evt.target.dataset.toggle === "true") {
      setShow(false);
    }
  };

  return (
    <Layout>
      <Header links={menuLinks} variants="default">
        <Button
          label="Download Revve"
          className="bg-primary text-white rounded py-2 px-3"
          onClick={storeRedirect}
          icon={
            <Image
              className="inline-block ml-2"
              src={download}
              alt="Download revve"
            />
          }
          variant="icon"
        />
      </Header>
      <LayoutContext.Provider value={{ storeRedirect }}>
        {page}
      </LayoutContext.Provider>
      <Footer />

      <QRModal show={show} toogleModal={toogleQRModal} />
    </Layout>
  );
};

export default Layout;
