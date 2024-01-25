import React, { FC, FormEvent, useState } from "react";
import { Button, Input } from "../ui";

const SubcriberForm = () => {
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col lg:flex-row border border-slate-gray my-4 p-2 rounded animate-slideIn-left opacity-0 "
      style={{ "--delay": 0.5 + "s" }}
    >
      <Input
        placeholder="example@mail.com"
        className="border-none max-sm:w-full w-[80%]"
        name="email"
        type="eamil"
      />
      <Button
        className="max-sm:w-full w-[20%] rounded"
        label="Notify me"
        type="submit"
      />
    </form>
  );
};

export default SubcriberForm;
