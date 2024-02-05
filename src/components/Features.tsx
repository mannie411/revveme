import React, { Fragment, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui";
import {
  featureImg1,
  featureImg1I,
  featureImg2,
  featureImg2I,
  featureImg3,
  featureImg3I,
  featureImg4,
  featureImg4I,
  featureImg5,
  featureImg5I,
} from "@app/assets";
import { useIsVisible } from "@app/hooks";

const Features = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);
  return (
    <Fragment>
      {/* Feature 1 */}
      <div ref={ref1} className="flex flex-col lg:flex-row py-8 ">
        <div className="flex-1 md:px-8 overflow-y-hidden">
          <div className="ft-img">
            <div className="relative mx-auto z-[5] py-1">
              <Image
                className={`${
                  isVisible1 ? "animate-slide-in-b" : ""
                } mx-auto object-contain aspect-square`}
                src={featureImg1}
                alt="Features"
              />
              <Image
                src={featureImg1I}
                alt="Features"
                className={`absolute ${
                  isVisible1 ? "animate-slide-in-fwd-center" : ""
                } object-contain top-[2.75rem] lg:left-0 max-sm:w-[65%]`}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-[5rem] ">
          <h3 className="mb-2">
            Send and Receive <br /> Money
          </h3>
          <p className="text-dark-5 lg:w-[70%] my-3 ">
            Unlock Currency Freedom: Swap foreign currencies for Naira in a
            secure and trusted way! Your trusted partner for seamless and secure
            currency exchanges in Nigeria
          </p>
          <Button label="Get Started" />
        </div>
      </div>
      {/* Feature 2 */}
      <div ref={ref2} className="flex flex-col lg:flex-row py-8 ">
        <div className="flex-1 pt-[5rem]">
          <h3 className="mb-2">Buy and Sell Currency</h3>
          <p className="text-dark-5 lg:w-[70%] my-3 ">
            Unlock Currency Freedom: Swap foreign currencies for Naira in a
            secure and trusted way! Your trusted partner for seamless and secure
            currency exchanges in Nigeria
          </p>
          <Button label="Get Started" />
        </div>
        <div className="flex-1 md:px-8 max-sm:order-first overflow-y-hidden">
          <div className="ft-img">
            <div className="relative  z-[5] py-1">
              <Image
                className={`${
                  isVisible2 ? "animate-slide-in-b" : ""
                } mx-auto object-contain aspect-square`}
                src={featureImg2}
                alt="Features"
              />
              <Image
                className={`${
                  isVisible2 ? "animate-slide-in-fwd-center" : ""
                } absolute object-contain top-[2.75rem] right-0 max-sm:w-[65%] `}
                src={featureImg2I}
                alt="Features"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feature 3 */}
      <div ref={ref3} className="flex flex-col lg:flex-row py-8 ">
        <div className="flex-1 md:px-8 overflow-y-hidden">
          <div className="ft-img">
            <div className="relative z-[5] py-1">
              <Image
                className={`${
                  isVisible3 ? "animate-slide-in-b" : ""
                } mx-auto  object-contain aspect-square`}
                src={featureImg3}
                alt="Features"
              />
              <Image
                src={featureImg3I}
                alt="Features"
                className={`${
                  isVisible3 ? "animate-slide-in-fwd-center" : ""
                } absolute object-contain top-[2.75rem] left-0 max-sm:w-[65%]`}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-[5rem] ">
          <h3 className=" mb-2">Multi- Currency Wallets</h3>
          <p className="text-dark-5 lg:w-[70%] my-3 ">
            Unlock Currency Freedom: Swap foreign currencies for Naira in a
            secure and trusted way! Your trusted partner for seamless and secure
            currency exchanges in Nigeria
          </p>
          <Button label="Get Started" />
        </div>
      </div>
      {/* Feature 4 */}
      <div ref={ref4} className="flex flex-col lg:flex-row py-8 ">
        <div className="flex-1 pt-[5rem]">
          <h3 className=" mb-2">Pay Bills</h3>
          <p className="text-dark-5 lg:w-[70%] my-3 ">
            Unlock Currency Freedom: Swap foreign currencies for Naira in a
            secure and trusted way! Your trusted partner for seamless and secure
            currency exchanges in Nigeria
          </p>
          <Button label="Get Started" />
        </div>

        <div className="flex-1 md:px-8 max-sm:order-first overflow-y-hidden">
          <div className="ft-img">
            <div className="relative z-[5] py-1">
              <Image
                className={`${
                  isVisible4 ? "animate-slide-in-b" : ""
                } mx-auto  object-contain aspect-square`}
                src={featureImg4}
                alt="Features"
              />
              <Image
                src={featureImg4I}
                alt="Features"
                className={`${
                  isVisible4 ? "animate-slide-in-fwd-center " : ""
                } absolute object-contain top-[2.75rem] right-0 max-sm:w-[65%]`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feature 5 */}

      <div ref={ref5} className="flex flex-col lg:flex-row py-8 ">
        <div className="flex-1 md:px-8 overflow-y-hidden">
          <div className="ft-img">
            <div className="relative z-[5] py-1">
              <Image
                src={featureImg5}
                alt="Features"
                className={`${
                  isVisible5 ? "animate-slide-in-b" : ""
                } mx-auto  object-contain aspect-square`}
              />
              <Image
                src={featureImg5I}
                alt="Features"
                className={`${
                  isVisible3 ? "animate-slide-in-fwd-center" : ""
                } absolute object-contain top-[2.75rem] left-0 max-sm:w-[65%]`}
                style={{ "--delay": 0.6 + "s" }}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-[5rem]">
          <h3 className=" mb-2">Shop Online</h3>
          <p className="text-dark-5 lg:w-[70%] my-3 ">
            Unlock Currency Freedom: Swap foreign currencies for Naira in a
            secure and trusted way! Your trusted partner for seamless and secure
            currency exchanges in Nigeria
          </p>
          <Button label="Get Started" />
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
