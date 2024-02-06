import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// components
import { Layout, View, Button, Head, Header } from "@app/components/ui";
import { SubcribeForm } from "@app/components/forms";
import { SocialLinks } from "@app/components";

// types
import { NextPageWithLayout } from "@app/types";

// images
import mockup1 from "../../public/revve-mockup.png";
import { subLinks } from "@app/utils/constants";

const Page: NextPageWithLayout = () => {
  return (
    <View>
      <section className="flex max-container px-4 lg:px-[4rem] min-h-screen overflow-y-hidden">
        <div className="relative flex-1 pt-[8rem] lg:pt-[16rem] ">
          <h5
            className="animate-slideIn-left opacity-0 text-lg text-primary flex  justify-center md:justify-start items-center mb-4 lg:mb-8"
            style={{ "--delay": 0.4 + "s" }}
          >
            <div className="bg-primary w-[10px] h-[3px] inline-block mr-2" />
            Coming soon
          </h5>
          <h1 className="text-3xl lg:text-4xl  text-dark-1 mb-4 lg:mb-8 text-center md:text-start">
            <span
              className="animate-slideIn-left opacity-0 inline-block"
              style={{ "--delay": 0.25 + "s" }}
            >
              Get Notified
            </span>
            <br />
            <span
              className="animate-slideIn-left opacity-0 inline-block"
              style={{ "--delay": 0.35 + "s" }}
            >
              When we Launch
            </span>
          </h1>
          <p
            className="animate-slideIn-left opacity-0  text-dark-2 text-center md:text-start my-6 lg:mb-8 "
            style={{ "--delay": 0.45 + "s" }}
          >
            Send, Swap, Shop - Your Passport to Easy Worldwide Play.
          </p>

          <SubcribeForm />
          <SocialLinks />
        </div>
        <div
          className="flex-1 hidden lg:block animate-scaleIn opacity-0 text-xl my-2"
          style={{ "--delay": 0.25 + "s" }}
        >
          <Image src={mockup1} alt={"Revve App Mockup"} />
        </div>
      </section>
    </View>
  );
};

Page.getLayout = (page) => (
  <Fragment>
    <Head title="Coming - Soon" />
    <Layout>
      <Header links={subLinks} variants="default" />
      {page}
    </Layout>
  </Fragment>
);

export default Page;
