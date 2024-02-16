import React, { Fragment } from "react";

type Props = {
  isShow: boolean;
  classNames?: string;
  label: string;
  desc?: string;
  variants: "success" | "pending" | "error";
};

const Status = ({ isShow, classNames, desc, label, variants }: Props) => {
  return (
    <p
      className={`w-full my-2 
      ${classNames ? classNames : ""}
      ${
        isShow
          ? "transition-all ease-in-out duration-300 delay-100 visible h-0 opacity-100"
          : "transition-all ease-in-out duration-300 delay-200 invisible h-0 opacity-0"
      } 
    `}
    >
      {variants === "success" && (
        <Fragment>
          <span className="text-success">{label} </span>
          {desc}
        </Fragment>
      )}

      {variants === "error" && (
        <Fragment>
          <span className="text-coral-red">{label}</span>
          {desc}
        </Fragment>
      )}

      {variants === "pending" && (
        <Fragment>
          <span className="text-primary">{label}</span>
          {desc}
        </Fragment>
      )}
    </p>
  );
};

export default Status;
