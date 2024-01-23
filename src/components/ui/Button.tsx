import { ComponentProps } from "@app/types";
import React, { FC, Fragment, ReactElement } from "react";

type Variant = "default" | "icon";

interface ButtonProps extends ComponentProps {
  icon?: ReactElement | any;
  label: string;
  variant?: Variant;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  className,
  icon,
  label,
  variant = "default",
  type = "button",
}) => {
  return (
    <Fragment>
      {variant === "default" && (
        <button
          className={`text-white bg-primary p-3 w-100 ${
            className && className
          }`}
          type={type}
        >
          {label}
        </button>
      )}
      {variant === "icon" && (
        <button>
          <span>{label}</span>
          <span>{icon}</span>
        </button>
      )}
    </Fragment>
  );
};

export default Button;
