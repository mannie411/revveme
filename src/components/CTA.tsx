import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  appstoreLight,
  bgOval,
  mockupImg1,
  mockupImg2,
  playstoreLight,
} from "@app/assets";

const CTA = () => {
  return (
    <div className="bg-purple-gradient rounded cta">
      <div className="flex flex-col lg:flex-row px-4  lg:px-[4rem] py-[6rem] ">
        <div className="flex-1  my-auto">
          <h3 className=" text-white">
            Download the Revve
            <br />
            Mobile App
          </h3>
          <p className=" text-white my-8">
            Making payment on purchase of your favorite products just got better
            and more awesome. Enjoy the amazing experience!!!
          </p>
          <div>
            <Link className="inline-block " href="#">
              <Image src={playstoreLight} alt="Play store Link" />
            </Link>
            <Link className="inline-block ml-3" href="#">
              <Image src={appstoreLight} alt="App Store Link" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full mt-8 ">
            <Image
              className="relative left-[10%] inline-block max-sm:w-[45%] z-10 "
              src={mockupImg1}
              alt="Phone Image 1"
            />
            <Image
              className="relative top-[15%] inline-block max-sm:w-[50%] "
              src={mockupImg2}
              alt="Phone Image 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
