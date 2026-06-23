"use client";
import React, { useState } from "react";

const Form = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formElement = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      formData.append("access_key", accessKey);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          setStatus("success");
          formElement.reset();
          return;
        }
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleForm}
      className="flex flex-col gap-8"
      data-aos="fade-left"
      data-aos-duration="900"
    >
      <div className="w-full">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required
          className="w-full border-b-2 bg-transparent text-light-text dark:text-dark-text-main border-gray-400 outline-none py-2 px-1 transition-all duration-300 ease-in-out focus:border-tertiary placeholder-gray-400 dark:placeholder-dark-text-sub"
        />
      </div>
      <div className="w-full">
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          className="w-full border-b-2 bg-transparent text-light-text dark:text-dark-text-main border-gray-400 outline-none py-2 px-1 transition-all duration-300 ease-in-out focus:border-tertiary placeholder-gray-400 dark:placeholder-dark-text-sub"
        />
      </div>
      <div className="w-full">
        <textarea
          name="message"
          placeholder="Message*"
          required
          rows={4}
          className="w-full border-b-2 bg-transparent text-light-text dark:text-dark-text-main border-gray-400 outline-none py-2 px-1 resize-none transition-all duration-300 ease-in-out focus:border-tertiary placeholder-gray-400 dark:placeholder-dark-text-sub"
        />
      </div>
      {/* Submit Button */}
      <div className="w-full flex justify-start mt-2">
        <button
          type="submit"
          className="px-8 py-3 bg-tertiary text-white font-semibold rounded-md shadow-md hover:-translate-y-0.5 hover:opacity-85 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer disabled:cursor-not-allowed"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Send Message"}
        </button>
      </div>
      {/* State Feedback Banner Notifications */}
      {status === "success" && (
        <p className="text-green-500 text-sm font-medium mt-2">
          Message sent successfully! I will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm font-medium mt-2">
          Something went wrong. Please check your network or try again.
        </p>
      )}
    </form>
  );
};

export default Form;
