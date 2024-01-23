import React, { FC, FormEvent, useState } from "react";
import { Button, Input } from "../ui";

const SubcriberForm = () => {
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border border-slate-gray my-4 p-2 rounded"
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
