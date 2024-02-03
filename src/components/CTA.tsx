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
      <div className="flex flex-col lg:flex-row p-4 lg:py-10 lg:px-14">
        <div className="flex-1 text-white my-auto">
          <h3 className="text-lg lg:text-2xl">
            Download the Revve
            <br />
            Mobile App
          </h3>
          <p className="my-8">
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
          <div className="w-full h-[18rem] lg:h-auto">
            <Image
              className="inline-block"
              src={mockupImg1}
              alt="Phone Image 1"
            />
            <Image
              className="inline-block"
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
