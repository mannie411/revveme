import { ComponentProps } from "@app/types";
import React, { FC, Fragment, ReactElement } from "react";

type Variant = "default" | "icon";

interface ButtonProps extends ComponentProps {
  icon?: ReactElement | any;
  label: string;
  onClick?: () => void;
  variant?: Variant;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  className,
  icon,
  label,
  onClick,
  variant = "default",
  type = "button",
}) => {
  return (
    <Fragment>
      {variant === "default" && (
        <button
          className={`btn ${className && className}`}
          onClick={onClick}
          type={type}
        >
          <span>{label} </span>
          {icon && icon}
        </button>
      )}
      {variant === "icon" && (
        <button className="btn">
          <span>{label}</span>
          <span>{icon}</span>
        </button>
      )}
    </Fragment>
  );
};

export default Button;
