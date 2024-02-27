import React, { Fragment, useContext, useRef } from "react";
import Image from "next/image";
import { useIsVisible } from "@app/hooks";
import { Button, LayoutContext } from "./ui";
import {
  caMd,
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
  ngMd,
  ukMd,
  usMd,
} from "@app/assets";
import { features } from "@app/utils/constants";

export const FeatureCountries = () => {
  return (
    <div className="px-4 lg:px-[4rem] bg-[#3B1347] py-8 info-graph">
      <h4 className="font-dm-sans text-white font-bold text-xl lg:text-2xl text-center my-6">
        We currently operate in 4 Countries
      </h4>
      <div className="flex justify-evenly my-[4rem]">
        <h5 className="text-white">
          <Image className="inline-block " src={ngMd} alt="Nigeria Flag" />
          <span className="inline-block ml-3 max-sm:hidden">Nigeria</span>
        </h5>

        <h5 className="text-white">
          <Image className="inline-block" src={ukMd} alt="Nigeria Flag" />
          <span className="inline-block ml-3 max-sm:hidden">
            United Kingdom
          </span>
        </h5>

        <h5 className="text-white">
          <Image className="inline-block" src={usMd} alt="Nigeria Flag" />
          <span className="inline-block ml-3 max-sm:hidden">U.S.A</span>
        </h5>

        <h5 className="text-white">
          <Image className="inline-block" src={caMd} alt="Nigeria Flag" />
          <span className="inline-block ml-3 max-sm:hidden">Canada</span>
        </h5>
      </div>
    </div>
  );
};

const Features = () => {
  const { storeRedirect } = useContext(LayoutContext);

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
      <div ref={ref1} className="flex flex-col md:flex-row py-8 ">
        <div className="flex-1 overflow-y-hidden">
          <div className="ft-img md:max-w-[80%] mx-auto">
            <div className="relative perspective z-[5] py-1">
              <Image
                src={featureImg1}
                alt="Features"
                className={`${
                  isVisible1 ? "visible animate-slide-in-b " : "invisible"
                } mx-auto max-sm:w-[80%]`}
              />
              <Image
                src={featureImg1I}
                alt="Features"
                className={`${
                  isVisible1
                    ? "visible animate-slide-in-fwd-center"
                    : "invisible"
                } absolute object-contain top-[2.75rem] left-0 md:-left-8 max-sm:w-[50%]`}
              />
            </div>
          </div>
        </div>
        <div className="flex-1  ">
          <div className="my-4 md:pt-[5rem] lg:pl-[4rem]">
            <h3 className="mb-2">
              Send and Receive <br className="max-sm:hidden" /> Money
            </h3>
            <p className="text-dark-5 lg:w-[70%] my-4 ">
              {features[0].content}
            </p>
            <Button label="Get Started" onClick={storeRedirect} />
          </div>
        </div>
      </div>
      {/* Feature 2 */}
      <div ref={ref2} className="flex flex-col md:flex-row py-8 ">
        <div className="flex-1 ">
          <div className="my-4 md:pt-[5rem] md:pl-[4rem] ">
            <h3 className="mb-2">Buy and Sell Currency</h3>
            <p className="text-dark-5 lg:w-[70%] my-4 ">
              {features[1].content}
            </p>
            <Button label="Get Started" onClick={storeRedirect} />
          </div>
        </div>
        <div className="flex-1 max-md:order-first overflow-y-hidden">
          <div className="ft-img md:max-w-[80%] mx-auto">
            <div className="relative perspective z-[5] py-1">
              <Image
                className={`${
                  isVisible2 ? "visible animate-slide-in-b " : "invisible"
                } mx-auto max-sm:w-[80%]`}
                src={featureImg2}
                alt="Features"
              />
              <Image
                src={featureImg2I}
                alt="Features"
                className={`${
                  isVisible2
                    ? "visible animate-slide-in-fwd-center"
                    : "invisible"
                } absolute object-contain top-[2.75rem] right-0 md:-right-8 max-sm:w-[50%]`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feature 3 */}
      <div ref={ref3} className="flex flex-col md:flex-row py-8 ">
        <div className="flex-1 overflow-y-hidden">
          <div className="flex-1  overflow-y-hidden">
            <div className="ft-img md:max-w-[80%] mx-auto">
              <div className="relative perspective z-[5] py-1">
                <Image
                  src={featureImg3}
                  alt="Features"
                  className={`${
                    isVisible3 ? "visible animate-slide-in-b " : "invisible"
                  } mx-auto max-sm:w-[80%]`}
                />
                <Image
                  src={featureImg3I}
                  alt="Features"
                  className={`${
                    isVisible3
                      ? "visible animate-slide-in-fwd-center"
                      : "invisible"
                  } absolute object-contain top-[2.75rem] left-0 md:-left-8 max-sm:w-[50%]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  ">
          <div className="my-4 md:pt-[5rem] lg:pl-[4rem]">
            <h3 className=" mb-2">Multi- Currency Wallets</h3>
            <p className="text-dark-5 lg:w-[70%] my-4 ">
              {features[2].content}
            </p>
            <Button label="Get Started" onClick={storeRedirect} />
          </div>
        </div>
      </div>
      {/* Feature 4 */}
      <div ref={ref4} className="flex flex-col md:flex-row py-8 ">
        <div className="flex-1 ">
          <div className="my-4 md:pt-[5rem] md:pl-[4rem]">
            <h3 className=" mb-2">Pay Bills</h3>
            <p className="text-dark-5 lg:w-[70%] my-4 ">
              {features[3].content}
            </p>
            <Button label="Get Started" onClick={storeRedirect} />
          </div>
        </div>

        <div className="flex-1 max-md:order-first overflow-y-hidden">
          <div className="ft-img md:max-w-[80%] mx-auto">
            <div className="relative perspective z-[5] py-1">
              <Image
                className={`${
                  isVisible4 ? "visible animate-slide-in-b " : "invisible"
                } mx-auto max-sm:w-[80%]`}
                src={featureImg4}
                alt="Features"
              />
              <Image
                src={featureImg4I}
                alt="Features"
                className={`${
                  isVisible4
                    ? "visible animate-slide-in-fwd-center"
                    : "invisible"
                } absolute object-contain top-[2.75rem] right-0 md:-right-8 max-sm:w-[50%]`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feature 5 */}
      <div ref={ref5} className="flex flex-col md:flex-row py-8 ">
        <div className="flex-1  overflow-y-hidden">
          <div className="ft-img md:max-w-[80%] mx-auto">
            <div className="relative perspective z-[5] py-1">
              <Image
                src={featureImg5}
                alt="Features"
                className={`${
                  isVisible5 ? "visible animate-slide-in-b " : "invisible"
                } mx-auto max-sm:w-[80%]`}
              />
              <Image
                src={featureImg5I}
                alt="Features"
                className={`${
                  isVisible5
                    ? "visible animate-slide-in-fwd-center"
                    : "invisible"
                } absolute object-contain top-[2.75rem] left-0 md:-left-8 max-sm:w-[50%]`}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="my-4 md:pt-[5rem] lg:pl-[4rem]">
            <h3 className=" mb-2">Shop Online</h3>
            <p className="text-dark-5 lg:w-[70%] my-4 ">
              {features[4].content}
            </p>
            <Button label="Get Started" onClick={storeRedirect} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
