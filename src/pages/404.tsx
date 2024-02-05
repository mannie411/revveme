import React, { Fragment } from "react";
import Image from "next/image";
import { Layout, View, Button, Head, Header } from "@app/components/ui";
import { RigthArrowIcon } from "@app/components/icons";

import cloud from "../../public/cloud.svg";
import img404_1 from "../../public/img404-1.svg";
import img404_2 from "../../public/img404-2.svg";
import img404_3 from "../../public/img404-3.svg";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Head title="Not Found" />
      <Layout>
        <Header />
        <View>
          <section className="flex max-container px-4 lg:px-10 min-h-screen overflow-y-hidden">
            <div className="relative flex-1 pt-[8rem] lg:pt-[16rem] ">
              <h1 className="text-3xl lg:text-4xl  text-dark-1 mb-4 lg:mb-8 text-center md:text-start">
                <span
                  className="animate-slideIn-left opacity-0 inline-block"
                  style={{ "--delay": 0.25 + "s" }}
                >
                  This page is
                </span>
                <br />
                <span
                  className="animate-slideIn-left opacity-0 inline-block"
                  style={{ "--delay": 0.35 + "s" }}
                >
                  not found
                </span>
              </h1>
              <p
                className="animate-slideIn-left opacity-0  text-dark-2 text-center md:text-start my-6 lg:mb-8 "
                style={{ "--delay": 0.45 + "s" }}
              >
                This page you are looking for isn’t avaliable. Visit the
                homepage or go back.
              </p>
              <div
                className="animate-slideIn-left opacity-0  text-dark-2 text-center md:text-start my-6 lg:mb-8 "
                style={{ "--delay": 0.5 + "s" }}
              >
                <Button
                  label="Back to home page"
                  icon={<RigthArrowIcon />}
                  onClick={() => router.push("/")}
                />
              </div>
            </div>
            <div className="hidden lg:block relative z-[1000]">
              <div className="relative">
                <div
                  className="relative w-full z-20 animate-slideIn-top opacity-0"
                  style={{ "--delay": 0.3 + "s", "--duration": 0.6 + "s" }}
                >
                  <Image src={cloud} alt="Cloud" />
                </div>
                <div
                  className="absolute top-[30%] w-full animate-slideIn-top opacity-0"
                  style={{ "--delay": 0.35 + "s", "--duration": 0.7 + "s" }}
                >
                  <div className="flex w-full justify-center gap-10 ">
                    <div
                      className="animate-wobble-right"
                      style={{ "--duration": 1 + "s" }}
                    >
                      <Image src={img404_1} alt="Number 4" />
                    </div>
                    <div
                      className="animate-shake-vertical"
                      style={{ "--duration": 1 + "s" }}
                    >
                      <Image src={img404_2} alt="Number 0" />
                    </div>
                    <div
                      className="animate-wobble-left"
                      style={{ "--duration": 1 + "s" }}
                    >
                      <Image src={img404_3} alt="Number 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </View>
      </Layout>
    </Fragment>
  );
};

export default Page;
