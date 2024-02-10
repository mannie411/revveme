import React, { FC, Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ComponentProps, LinkProps, PlatformOS } from "@app/types";
import { Button, Footer, Header } from ".";

import { menuLinks } from "@app/utils/constants";
import { download } from "@app/assets";
import { getPlatformOS } from "@app/utils";
import { QRModal } from "..";

interface LayoutProp extends ComponentProps {}

const Layout: FC<LayoutProp> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export const BaseLayout = (page: any) => {
  const [show, setShow] = useState<boolean>(false);

  const redirectToStore = () => {
    const platform = getPlatformOS();

    if (platform === "Android") {
      window.open(
        "https://play.google.com/store/apps/details?id=com.bitly.app&pcampaignid=web_share",
        "_blank"
      );
      return;
    }

    if (platform === "iOS" || platform === "MacOS") {
      window.open(
        "https://apps.apple.com/us/app/bitly-connections-platform/id525106063",
        "_blank"
      );

      return;
    }

    setShow(true);
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
          onClick={redirectToStore}
          icon={
            <Image
              className="inline-block ml-2"
              src={download}
              alt="Download revve"
            />
          }
        />
      </Header>
      {page}
      <Footer />

      <QRModal show={show} toogleModal={toogleQRModal} />
    </Layout>
  );
};

export default Layout;
