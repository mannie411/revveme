import React from "react";
import Image from "next/image";
import Link from "next/link";

import ContactForm from "./forms/Contact";

import fb from "../../public/Facebook-1.svg";
import tw from "../../public/Twitter-1.svg";
import ln from "../../public/Linkedin-1.svg";

import call from "../../public/Call.svg";
import mail from "../../public/Message.svg";
import location from "../../public/Location.svg";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row space-x-2 lg:px-14 ">
      <div className="my-3">
        <div className="text-white bg-purple-gradient p-[3rem] rounded">
          <h4 className="text-[26px]">Contact Information</h4>
          <p className="my-8">
            Fill up the form and we’ll get back to you in few hours.
          </p>
          <div className="flex flex-col gap-8">
            <p>
              <Image className="inline-block" src={call} alt="Call" />
              <span className="inline-block ml-3">+29000000000</span>
            </p>
            <p>
              <Image className="inline-block" src={mail} alt="Call" />
              <span className="inline-block ml-3">hello@mail.com</span>
            </p>
            <p>
              <Image className="inline-block" src={location} alt="Call" />
              <span className="ml-3">33, New york City. United States.</span>
            </p>
          </div>
          <div className="h-[5rem]" />

          <div className="flex space-x-3 my-3">
            <Link href={"#"}>
              <Image src={fb} alt="Facebook" />
            </Link>
            <Link href={"#"}>
              <Image src={tw} alt="Facebook" />
            </Link>
            <Link href={"#"}>
              <Image src={ln} alt="Facebook" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
