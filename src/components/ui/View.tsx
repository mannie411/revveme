import React, { FC } from "react";
import { ComponentProps } from "@app/types";

const View: FC<ComponentProps> = ({ className, children }) => {
  return (
    <main className={`relative ${className ? className : ""}`}>{children}</main>
  );
};

export default View;
