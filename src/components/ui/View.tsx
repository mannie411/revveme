import React, { FC } from "react";
import { ComponentProps } from "@app/types";

const View: FC<ComponentProps> = ({ className, children }) => {
  return (
    <main
      className={`relative snap-mandatory snap-y ${className ? className : ""}`}
    >
      {children}
    </main>
  );
};

export default View;
