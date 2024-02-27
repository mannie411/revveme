import React from "react";
import Image from "next/image";
import Link from "next/link";
import { appstoreLight, mockupCTA, playstoreLight } from "@app/assets";
import { cta, storeLink } from "@app/utils/constants";

const CTA = () => {
  return (
    <div className="cta">
      <div className="relative z-10 flex flex-col md:flex-row px-4  lg:px-[4rem] py-[6rem] ">
        <div className="flex-1  my-auto">
          <h3 className="text-center md:text-start text-white">
            Download Revve App <br /> For Free Now
          </h3>
          <p className="text-center md:text-start text-white my-8 md:w-[60%]">
            {cta.content}
          </p>
          <div className="text-center md:text-start">
            <Link className="inline-block " href={`${storeLink.playstore}`}>
              <Image src={playstoreLight} alt="Play store Link" />
            </Link>
            <Link className="inline-block ml-3" href={`${storeLink.appstore}`}>
              <Image src={appstoreLight} alt="App Store Link" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-[80%] mt-8  mx-auto ">
            <Image src={mockupCTA} alt="Download Revve" />
            {/* <Image
              className="relative left-[10%] inline-block max-sm:w-[45%] z-10 "
              src={mockupImg1}
              alt="Phone Image 1"
            />
            <Image
              className="relative top-[15%] inline-block max-sm:w-[50%] "
              src={mockupImg2}
              alt="Phone Image 2"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
