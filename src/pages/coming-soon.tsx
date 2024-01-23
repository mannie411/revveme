import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// components
import { Layout, View, Button, Head } from "@app/components/ui";
import { SubcribeForm } from "@app/components/forms";
import { SocialLinks } from "@app/components";

// types
import { NextPageWithLayout } from "@app/types";

// images
import mockup1 from "../../public/revve-mockup.png";

const Page: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head title="Coming - Soon" />
      <Layout isFooter={false}>
        <View>
          <section className="flex max-container px-4 lg:px-10 min-h-screen">
            <div className="relative flex-1 pt-[8rem] lg:pt-[16rem] ">
              <h5 className="text-lg text-primary flex items-center mb-4 lg:mb-8">
                <div className="bg-primary w-[10px] h-[3px] inline-block mr-2" />
                Coming soon
              </h5>
              <h1 className="text-3xl lg:text-4xl  text-dark-1 mb-4 lg:mb-8">
                <span>Get Notified</span>
                <br />
                <span>When we Launch</span>
              </h1>
              <p className="text-dark-2 mb-4 lg:mb-8">
                Send, Swap, Shop - Your Passport to Easy Worldwide Play.
              </p>
              <SubcribeForm />
              <SocialLinks />
            </div>
            <div className="flex-1 hidden lg:block ">
              <Image src={mockup1} alt={"Revve App Mockup"} />
            </div>
          </section>
        </View>
      </Layout>
    </Fragment>
  );
};

export default Page;
