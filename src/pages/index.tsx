import React, { Fragment, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BaseLayout, Head, Heading, View } from "@app/components/ui";
import {
  CTA,
  Contact,
  FAQ,
  FeatureCountries,
  Features,
  HeroImage,
  Testimonial,
} from "@app/components";
import { NextPageWithLayout } from "@app/types";
import {
  aboutImg1,
  appstore,
  cbn,
  ndic,
  playstore,
  revveM,
  revveP,
  teamImg1,
} from "@app/assets";
import { useIsVisible } from "@app/hooks";
import { storeLink } from "@app/utils/constants";

const Page: NextPageWithLayout = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref1);
  return (
    <Fragment>
      <Head title="Home" />

      <View className="">
        {/* Hero Section */}
        <section className="snap-start max-container px-4 lg:px-[4rem] overflow-y-hidden mt-[6rem]">
          <div className="flex flex-col  md:items-center md:flex-row min-h-screen ">
            <div className="relative flex-1 ">
              <h1 className="mb-4 lg:mb-8 text-center md:text-start">
                <span className="text-primary">Send, Swap, Shop -</span>
                <br />
                Your Passport to Easy
                <br />
                Worldwide Play.
              </h1>
              <p className="text-center md:text-start my-6 lg:mb-8  max-sm:w-[80%] mx-auto">
                Perform cross-border transaction with ease on Revve.
              </p>
              <p className="text-center md:text-start my-6 lg:mb-8">
                <Link
                  href={`${storeLink.playstore}`}
                  target="_blank"
                  className="inline-block"
                >
                  <Image src={playstore} alt="Play store link" />
                </Link>
                <Link
                  href={`${storeLink.appstore}`}
                  target="_blank"
                  className="inline-block ml-2"
                >
                  <Image src={appstore} alt="App store link" />
                </Link>
              </p>
              <p className="text-dark-3 text-center md:text-start">
                <span className="inline-block ">
                  Fully Licensed by the CBN
                  <Image
                    className="inline-block ml-2"
                    src={cbn}
                    alt="CBN Logo"
                  />
                </span>
                <span className="inline-block  md:ml-3">
                  Deposits insured by
                  <Image
                    className="inline-block ml-2"
                    src={ndic}
                    alt="NDIC Logo"
                  />
                </span>
              </p>
            </div>
            <div
              ref={ref1}
              className={`relative flex-1 
              text-xl my-2 ${
                isVisible ? "animate-scaleIn visible" : "invisible opacity-0"
              }
              `}
              // style={{ "--delay": 0.25 + "s" }}
            >
              <div className="relative w-full h-full max-sm:my-[3rem]">
                <HeroImage />

                <div className="absolute left-0  top-0  w-[80%] ">
                  <Image className="object-cover" src={revveM} alt="Hero " />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="snap-start max-container px-4 lg:px-[4rem]  overflow-y-hidden mb-[6rem]">
          <div className="text-center mb-6">
            <p className="text-secondary uppercase my-4">
              <span className="bg-accent p-3 max-sm:text-[13px]">
                our key features
              </span>
            </p>
            <h2 className="">
              Empower Your Cross-Border <br /> Moves with Reeve
            </h2>
          </div>
          {/* Feature List */}
          <Features />
        </section>
        {/* About Section */}
        <section className="overflow-y-hidden">
          <FeatureCountries />
          <div className="max-container flex flex-col md:flex-row px-4 lg:px-[4rem]  my-[6rem]">
            <div className="flex-1 lg:pt-[6rem] mb-16">
              <h2 className="">About Us</h2>
              <p className="text-[1.125rem] lg:w-[70%] my-10">
                A detailed wireframe kit made of comprehensive components to get
                you started on you next website or landing pageproject. A
                detailed wireframe kit made of comprehensive components to get
                you started on you next website or landing pageproject.
              </p>
              <Link href="/about-us">
                <span className="inline-block">Learn More</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block ml-3"
                >
                  <path
                    d="M17.2928 25.7071C17.1054 25.5196 17.0001 25.2652 17.0001 25C17.0001 24.7348 17.1054 24.4805 17.2928 24.2929L24.5858 17H5C4.73478 17 4.48043 16.8947 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4805 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H24.5858L17.2928 7.70712C17.2 7.61425 17.1263 7.50401 17.0761 7.38268C17.0258 7.26135 17 7.1313 17 6.99998C17 6.86866 17.0259 6.73862 17.0761 6.61729C17.1264 6.49596 17.2 6.38573 17.2929 6.29287C17.3858 6.20001 17.496 6.12636 17.6173 6.07611C17.7387 6.02586 17.8687 5.99999 18 6C18.1314 6.00001 18.2614 6.02588 18.3827 6.07614C18.5041 6.1264 18.6143 6.20007 18.7072 6.29293L27.7072 15.2929C27.7104 15.2962 27.7131 15.2998 27.7163 15.3031C27.7361 15.3233 27.7552 15.3441 27.7732 15.366C27.7832 15.3782 27.792 15.3911 27.8014 15.4037C27.8115 15.4173 27.822 15.4306 27.8315 15.4447C27.8412 15.4592 27.8497 15.4743 27.8586 15.4893C27.8664 15.5023 27.8746 15.5151 27.8818 15.5286C27.8898 15.5436 27.8967 15.5591 27.9039 15.5744C27.9107 15.5887 27.9178 15.6027 27.9238 15.6173C27.9299 15.6321 27.9349 15.6472 27.9403 15.6623C27.9459 15.678 27.952 15.6936 27.9569 15.7097C27.9614 15.7247 27.9647 15.7399 27.9685 15.755C27.9727 15.7715 27.9773 15.7879 27.9806 15.8047C27.9841 15.8221 27.9861 15.8397 27.9887 15.8572C27.9908 15.872 27.9936 15.8864 27.995 15.9013C27.9983 15.9342 28 15.9671 28 16C28 16.033 27.9983 16.0659 27.995 16.0987C27.9936 16.1136 27.9908 16.1281 27.9887 16.1428C27.9862 16.1604 27.9841 16.1779 27.9806 16.1954C27.9773 16.2122 27.9727 16.2285 27.9685 16.245C27.9647 16.2602 27.9614 16.2754 27.9569 16.2903C27.952 16.3064 27.9459 16.322 27.9403 16.3378C27.9349 16.3528 27.9299 16.3679 27.9238 16.3827C27.9178 16.3973 27.9106 16.4113 27.9039 16.4256C27.8967 16.4409 27.8898 16.4564 27.8818 16.4715C27.8746 16.4849 27.8664 16.4977 27.8586 16.5108C27.8497 16.5257 27.8412 16.5409 27.8315 16.5554C27.822 16.5695 27.8115 16.5828 27.8014 16.5963C27.792 16.6089 27.7832 16.6219 27.7732 16.6341C27.7549 16.6563 27.7354 16.6775 27.7153 16.6981C27.7124 16.701 27.7101 16.7042 27.7072 16.7071L18.7072 25.7071C18.6143 25.8 18.504 25.8736 18.3827 25.9239C18.2614 25.9742 18.1313 26 18 26C17.8687 26 17.7386 25.9742 17.6173 25.9239C17.496 25.8736 17.3857 25.8 17.2928 25.7071Z"
                    fill="#4F0072"
                  />
                </svg>
              </Link>
              <div className="mt-6">
                <Image src={revveP} alt="Revve Partner" />
              </div>
            </div>
            <div className="flex-1">
              <div className="">
                <Image className="mx-auto" src={aboutImg1} alt="Family Image" />
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial Section */}
        <section className=" bg-primary  overflow-y-hidden">
          <div className="max-container px-4 lg:px-[4rem] py-[6rem]">
            <div className="my-4">
              <Heading
                variants="h2"
                title=" What our ‘Revvers’ have to say"
                titleClass="text-center text-white mb-8"
                desc={
                  <Fragment>
                    Great team produces great results. Join the Revve family.
                  </Fragment>
                }
                descClass="text-center text-white my-8"
              />
            </div>
            <div className="max-container my-[2rem]">
              <Testimonial />
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="snap-start max-container px-4 lg:px-[4rem] py-[6rem] overflow-y-hidden">
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
          <div className="my-6">
            <Image src={teamImg1} alt="Team" />
          </div>
        </section>
        {/* Faq Section */}
        <section className="overflow-y-hidden">
          <div className="bg-primary ">
            <div className="max-container px-4 lg:px-[10rem] py-[6rem]">
              <div className="">
                <h2 className="text-center text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-center text-white my-8">
                  Here are some basic questions and answers <br />
                  to help you get started.
                </p>
              </div>

              <div className="lg:px-[10rem] my-10">
                <FAQ titleColor="text-[#ffffff]" bodyColor="text-[#ffffff]" />
              </div>
            </div>
          </div>
          <div className="snap-start max-container px-4 lg:px-[4rem] my-[6rem] lg:my-[8rem]">
            <CTA />
          </div>
        </section>
        {/* Contact Section */}
        <section className="snap-start max-container px-4 lg:px-[4rem]  overflow-y-hidden">
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
          </div>
          <div className="mb-[6rem] md:mb-[8rem]">
            <Contact />
          </div>
        </section>
      </View>
    </Fragment>
  );
};

Page.getLayout = BaseLayout;

export default Page;
