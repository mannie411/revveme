import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { Head, BaseLayout, View, Heading } from "@app/components/ui";
import { CTA, Contact, FeatureCountries } from "@app/components";

import { NextPageWithLayout } from "@app/types";

import { about, values } from "@app/utils/constants";
import { aboutImg2, aboutImg3, aboutImg4, teamImg1 } from "@app/assets";

const Page: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head title="About Us" />
      <View className="mt-24">
        {/* About Us */}
        <section className="about  my-[6rem]">
          <div className="max-container px-4 lg:px-[4rem]">
            <div className="w-full pt-[4rem]">
              <h1 className="text-center md:text-start">About Revve</h1>
              <p className="text-center md:text-start lg:w-[60%] my-8">
                {about.intro}
              </p>
            </div>
            <div className="my-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <Image
                  className="lg:w-[60%] mx-auto"
                  src={aboutImg2}
                  alt="Family"
                />

                <Image
                  className="lg:w-[40%] mx-auto"
                  src={aboutImg3}
                  alt="Happy User"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Mission */}
        <section className="max-container px-4 lg:px-[4rem]">
          <div className="text-center lg:my-[8rem]">
            <h2 className="">Our Mission</h2>
            <p className="my-8 lg:w-[50%] mx-auto ">{about.mission}</p>
          </div>
          <div className="flex flex-col lg:flex-row my-[6rem] gap-4">
            <h2 className="text-center lg:text-start lg:hidden block my-12">
              Our Story
            </h2>
            <div className="flex-1">
              <Image className="mx-auto" src={aboutImg4} alt="User story" />
            </div>
            <div className="flex-1  md:mt-[4rem] lg:mt-[6rem]">
              <h2 className="text-center lg:text-start hidden lg:block">
                Our Story
              </h2>
              <p className="text-center lg:text-start my-8 lg:w-[80%]">
                {about.story}
              </p>
            </div>
          </div>
        </section>
        {/* Values */}
        <section className="bg-primary py-[6rem] lg:py-[8rem] values">
          <div className="max-container flex flex-col lg:flex-row  px-4 lg:px-[4rem]">
            <div className="flex-1">
              <h2 className="text-white text-center md:text-start">
                Our Vision
              </h2>
              <p className="my-8 text-white text-center md:text-start lg:w-1/2 ">
                {about.vision}
              </p>
            </div>
            <div className="flex-1 lg:w-[60%]">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {values.map(({ imgUrl, title, content }, idx) => (
                  <div
                    key={idx}
                    className="card transparent sm:col-span-3 min-h-[15rem]"
                  >
                    <div className="mb-3">
                      <Image
                        src={`${imgUrl}`}
                        alt={`${title} icon`}
                        width={32}
                        height={32}
                      />
                    </div>
                    <h4 className="text-[1.125rem] text-white mb-3">{title}</h4>
                    <p className="text-white">{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className=" hidden max-container px-4 lg:px-[4rem] py-[6rem] overflow-y-hidden">
          <div className="text-center">
            <Heading
              variants="h2"
              title="Meet our Awesome Team"
              desc={
                <Fragment>
                  Here are few of our awesome Team Members who are making
                  <br className="max-sm:hidden " />
                  waves and of course shipping out products fastly
                </Fragment>
              }
            />
          </div>
          <div className="my-[6rem]">
            <Image src={teamImg1} alt="Team" />
          </div>
        </section>
        {/* Feature Countries */}
        <section className="overflow-y-hidden">
          <FeatureCountries />
          <div className="max-container px-4 lg:px-[4rem] py-[6rem]">
            <CTA />
          </div>
        </section>
        {/* Contact Section */}
        <section className="max-container px-4 lg:px-[4rem]  overflow-y-hidden">
          <div className="text-center">
            <Heading
              variants="h2"
              title="Contact Us"
              desc={
                <Fragment>
                  Have any question or feedback, feel free to reach out to us.
                  <br className="max-sm:hidden " /> We are always available to
                  help.
                </Fragment>
              }
            />
            <h2 className=""></h2>
          </div>
          <div className="my-[6rem]">
            <Contact />
          </div>
        </section>
      </View>
    </Fragment>
  );
};

Page.getLayout = BaseLayout;

export default Page;
