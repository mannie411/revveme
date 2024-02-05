import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { Footer, Head, Header, BaseLayout, View } from "@app/components/ui";
import { Contact, FAQ } from "@app/components";
import { NextPageWithLayout } from "@app/types";
import { download } from "@app/assets";
import { menuLinks } from "@app/utils/constants";

const Page: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head title="Contact Us" />

      <View className="mt-24">
        <section className="max-container px-4 lg:px-10  overflow-y-hidden">
          <div className="text-center lg:mt-[3rem]">
            <h2 className="">Contact Us</h2>
            <p className="my-8">
              Have any question or feedback, feel free to reach out to us.
              <br /> We are always available to help.
            </p>
          </div>
          <div className="my-[2rem] lg:my-[4rem]">
            <Contact />
          </div>
        </section>
        <section className="bg-[#F8F4FA] px-4 py-[4rem] lg:py-[8rem] ">
          <div className="max-container px-4 lg:px-[10rem] py-[6rem]">
            <div className="text-black text-center">
              <h2 className="">Frequently Asked Questions</h2>
              <p className="my-8">
                Here are some basic questions and answers <br />
                to help you get started.
              </p>
            </div>

            <div className="lg:px-[10rem] my-10">
              <FAQ />
            </div>
          </div>
        </section>
      </View>
    </Fragment>
  );
};

Page.getLayout = BaseLayout;

export default Page;
