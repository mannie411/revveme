import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { Footer, Head, Header, Layout, View } from "@app/components/ui";
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
          <div className="text-center">
            <h3 className="text-[2.875rem]">Contact Us</h3>
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
          <div className="max-container">
            <div className="text-black text-center">
              <h3 className="text-lg lg:text-[3.5rem]">
                Frequently Asked Questions
              </h3>
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

Page.getLayout = (page) => (
  <Layout>
    <Header links={menuLinks} isNav>
      <Link className="bg-primary text-white rounded py-2 px-3" href={"#"}>
        <span className="inline-block">Download Revve</span>
        <Image
          className="inline-block ml-2"
          src={download}
          alt="Download App"
        />
      </Link>
    </Header>
    {page}
    <Footer />
  </Layout>
);

export default Page;
