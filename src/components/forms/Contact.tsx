import React, { FC, FormEvent, useState } from "react";
import { Button, Input } from "../ui";

const ContactForm = () => {
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mb-8">
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <Input
              placeholder="example@mail.com"
              className="input-2"
              name="email"
              type="eamil"
            />
          </div>
        </div>
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <Input
              placeholder="example@mail.com"
              className="input-2"
              name="email"
              type="eamil"
            />
          </div>
        </div>
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email Address
          </label>
          <div className="mt-2">
            <Input
              placeholder="example@mail.com"
              className="input-2"
              name="email"
              type="eamil"
            />
          </div>
        </div>
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <div className="mt-2">
            <Input
              placeholder="example@mail.com"
              className="input-2"
              name="email"
              type="eamil"
            />
          </div>
        </div>
        <div className="col-span-full mb-4">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="input-2 p-2"
            ></textarea>
          </div>
        </div>
      </div>

      <Button
        className="max-sm:w-full w-[20%] rounded"
        label="Send message"
        type="submit"
      />
    </form>
  );
};

export default ContactForm;
