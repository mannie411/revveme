import React, { FC } from "react";
import { faq, testimonails } from "@app/utils/constants";
import Accordion from "./ui/Accordion";

type FAQProps = {
  titleColor?: string;
  bodyColor?: string;
};

const FAQ: FC<FAQProps> = ({ titleColor, bodyColor }) => {
  return (
    <div className="">
      {faq.map(({ title, content }, idx) => (
        <Accordion
          key={idx}
          title={title}
          body={content}
          titleColor={titleColor}
          bodyColor={bodyColor}
        />
      ))}
    </div>
  );
};

export default FAQ;
