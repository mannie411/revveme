import React, { Fragment } from "react";
import Image from "next/image";

import { Footer, Head, Header, Layout, View } from "@app/components/ui";
import { CTA, Contact } from "@app/components";

import teamImg1 from "../../public/team-1.png";
import aboutImg2 from "../../public/about-2.png";
import aboutImg3 from "../../public/about-3.png";
import aboutImg4 from "../../public/about-4.png";
import { menuLinks, values } from "@app/utils/constants";
import { download } from "@app/assets";
import Link from "next/link";
import { NextPageWithLayout } from "@app/types";

const Page: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head title="About Us" />
      <View className="mt-24">
        <section className="max-container px-6 my-[6rem]">
          <div className="w-full pt-[4rem]">
            <h1 className="text-2xl lg:text-4xl">About Revve</h1>
            <p className="lg:w-[60%] my-8">
              At Revve, we transcend borders to redefine the way the world
              engages in cross-border transactions. We are more than a platform;
              we are architects of financial connectivity, committed to making
              global transactions as seamless as local ones. Our journey is one
              of innovation, collaboration, and empowerment.
            </p>
          </div>
          <div className="my-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <Image className="lg:w-[60%]" src={aboutImg2} alt="Family" />

              <Image className="lg:w-[40%]" src={aboutImg3} alt="Happy User" />
            </div>
          </div>
        </section>
        <section className="max-container px-6">
          <div className="text-center">
            <h3 className="text-[2.875rem]">Our Mission</h3>
            <p className="my-8 lg:w-[50%] mx-auto text-[1.75rem] text-lg">
              At Revve our mission is to empower individuals and businesses by
              simplifying cross-border transactions. We believe in fostering
              financial inclusivity, breaking down barriers, and making global
              connectivity seamless.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row my-[6rem]">
            <div className="flex-1">
              <Image src={aboutImg4} alt="User story" />
            </div>
            <div className="flex-1">
              <h3 className="text-[2.875rem]">Our Story</h3>
              <p className="my-8 text-[1.125] lg:w-[80%]">
                Established in [Year], [Your Company Name] was born out of a
                passion for innovation and a vision for a world where
                cross-border transactions are not just transactions but moments
                of collaboration and growth. From our humble beginnings, we have
                evolved into a dynamic team of experts dedicated to providing a
                user-centric platform for secure and efficient cross-border
                financial interactions.
              </p>
            </div>
          </div>
        </section>
        <section className=" px-6 my-[6rem] bg-primary text-white">
          <div className="max-container flex flex-col  p-4 lg:flex-row lg:p-16">
            <div className="flex-1">
              <h3 className="text-[2.875rem]">Our Core Values</h3>
              <p className="my-8 text-[1.125] ">
                Established in [Year], [Your Company Name] was born out of a
                passion for innovation and a vision for a world where
                cross-border.
              </p>
            </div>
            <div className="flex-1 lg:w-[60%]">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {values.map(({ imgUrl, title, content }, idx) => (
                  <div key={idx} className="card transparent sm:col-span-3">
                    <div>
                      <Image
                        src={`${imgUrl}`}
                        alt={`${title} icon`}
                        width={32}
                        height={32}
                      />
                    </div>
                    <h4 className="text-[1.125rem]">{title}</h4>
                    <p>{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="max-container px-4 lg:px-10 py-[6rem] overflow-y-hidden">
          <div className="text-center">
            <h3 className="text-[2.875rem] mb-3">Meet our Awesome Team</h3>
            <p className="mb-3">
              Here are few of our awesome Team Members who are making <br />
              waves and of course shipping out products fastly
            </p>
          </div>

          <div className="my-[6rem]">
            <Image src={teamImg1} alt="Team" />
          </div>

          <div className="my-[6rem]">
            <CTA />
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-container px-4 lg:px-10  overflow-y-hidden">
          <div className="text-center">
            <h3 className="text-[2.875rem]">Contact Us</h3>
            <p className="my-8">
              Have any question or feedback, feel free to reach out to us.
              <br /> We are always available to help.
            </p>
          </div>
          <div className="my-[6rem]">
            <Contact />
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
