import React, { useRef, useEffect, MouseEventHandler } from "react";
import Image from "next/image";
import { testimonails } from "@app/utils/constants";
import { roundRight, roundleft } from "@app/assets";

const Testimonial = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const gotoPrevSlide = (evt: any) => {
    evt.stopPropagation();
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const slideWidth = slider.clientWidth;
      slider.scrollLeft -= slideWidth;
    }
  };

  const gotoNextSlide = (evt: any) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      console.log(screenLeft);

      const slideWidth = slider.clientWidth;
      slider.scrollLeft += slideWidth;
    }
  };

  return (
    <div className="slider ">
      <div className="flex items-center ">
        {testimonails.length >= 3 && (
          <div className="slider-btn">
            <button id="prev" className="slider-btn" onClick={gotoPrevSlide}>
              <Image src={roundleft} alt="Left Arrow" />
            </button>
          </div>
        )}

        <div ref={sliderRef} className="flex-1 slides ">
          {testimonails.map(
            ({ imgUrl, content, name, role, location }, idx) => (
              <div key={idx} id={`slide-${idx + 1}`} className="slide ">
                <div className="flex flex-col items-center justify-evenly text-center space-y-6">
                  <div>
                    <Image
                      src={`/${imgUrl}`}
                      alt={name}
                      width={75}
                      height={75}
                    />
                  </div>
                  <p>{content}</p>

                  <div>
                    <p>
                      <span className=" font-dm-sans font-semibold text-base">
                        {name}
                      </span>{" "}
                      <span>
                        ({location.name},{" "}
                        <Image
                          className="inline-block"
                          src={location.flag}
                          width={18}
                          height={18}
                          alt="Country Flag"
                        />
                        )
                      </span>
                    </p>
                    <p className="text-[#6C6A89]">{role}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {testimonails.length >= 3 && (
          <div className="slider-btn">
            <button id="next" onClick={gotoNextSlide}>
              <Image src={roundRight} alt="Right Arrow" />
            </button>
          </div>
        )}
      </div>

      <div className="my-16">
        <div className="md:hidden flex justify-center gap-6">
          <button id="prev" onClick={gotoPrevSlide}>
            <Image src={roundleft} alt="Left Arrow" />
          </button>
          <button id="next" onClick={gotoNextSlide}>
            <Image src={roundRight} alt="Right Arrow" />
          </button>
        </div>

        <div className="slider-indicator ">
          <span className="bg-white rounded-full h-2 w-2"></span>
          <span className="bg-white opacity-60 rounded-full h-2 w-2"></span>
          <span className="bg-white opacity-60 rounded-full h-2 w-2"></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
