import React from "react";
import Image from "next/image";
import { testimonails } from "@app/utils/constants";
import { roundRight, roundleft } from "@app/assets";

const Testimonial = () => {
  return (
    <div className="flex items-center">
      <div>
        <Image src={roundleft} alt="Left Arrow" />
      </div>
      <div className="flex-1">
        <div className="flex mx-6 space-x-4 my-[2rem] ">
          {testimonails.map(({ imgUrl, content, name, role }, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-md px-[4rem] py-[6rem]"
            >
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <div>
                  <Image src={`/${imgUrl}`} alt={name} width={75} height={75} />
                </div>
                <p>{content}</p>

                <div>
                  <h4>{name}</h4>
                  <p className="text-[#6C6A89]">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-1 justify-center">
          <span className="bg-white rounded-full h-2 w-2"></span>
          <span className="bg-white opacity-60 rounded-full h-2 w-2"></span>
          <span className="bg-white opacity-60 rounded-full h-2 w-2"></span>
        </div>
      </div>
      <div>
        <Image src={roundRight} alt="Right Arrow" />
      </div>
    </div>
  );
};

export default Testimonial;
