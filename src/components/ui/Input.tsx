import React, { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";

import { ComponentProps } from "@app/types";

interface InputProps extends ComponentProps {
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const Input: FC<InputProps> = ({
  className,
  name,
  onChange,
  type = "text",
  placeholder = "Type here...",
}) => {
  return (
    <>
      <input
        className={`input ${className && className}`}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
