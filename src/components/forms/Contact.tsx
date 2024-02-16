import React, { FC, FormEvent, useState } from "react";
import { Button, Input } from "../ui";
import { LoaderIcon } from "../icons";
import { apiURL, token } from "@app/utils/constants";
import Status from "../Status";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsLoading(true);

    try {
      const { currentTarget } = evt;

      const resetForm = currentTarget;
      const formData = new FormData(currentTarget);
      const obj = Object.fromEntries(formData);

      const headers = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          AUTHORIZATION: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
      };
      const res = await fetch(`${apiURL}/v1/util/feedback`, headers);

      if (res.ok) {
        await res.json();
        resetForm.reset();

        setIsLoading(false);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);

        return;
      }

      throw new Error("Unknown error occurred");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 ">
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <Input
              placeholder="John"
              className="input-2"
              name="first_name"
              type="eamil"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <Input
              placeholder="Doe"
              className="input-2"
              name="last_name"
              type="eamil"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="email"
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
              required
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
              placeholder="+phonenumber"
              className="input-2"
              name="phone_number"
              type="text"
              required={false}
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Message
          </label>
          <div className="mt-2">
            <Input
              id="message"
              name="message"
              type="textarea"
              className="input-2"
            />
          </div>
        </div>

        <Status
          classNames="col-span-full"
          isShow={isSuccess}
          label="Awesome!..."
          desc="Message sent."
          variants="success"
        />

        <Status
          classNames="col-span-full"
          isShow={isError}
          label="Oops!..."
          desc="Unable to send message, try again"
          variants="error"
        />
      </div>

      <Button
        className="max-sm:w-full md:w-[50%] rounded"
        label={isLoading ? "Sending..." : "Send Message"}
        type="submit"
        disabled={isLoading}
        icon={isLoading ? <LoaderIcon animate={isLoading} /> : <></>}
        variant="icon"
      />
    </form>
  );
};

export default ContactForm;
