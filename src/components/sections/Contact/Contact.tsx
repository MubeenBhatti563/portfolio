import { contactInfo } from "@/constants/Contact";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SocialMedia from "../About/SocialMedia";
import Form from "./Form";

const ContactInfoMap: Record<string, React.ReactNode> = {
  address: <FaLocationDot />,
  email: <MdEmail />,
  phone: <FaPhoneAlt />,
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-12 min-h-[88.5vh] px-4 md:px-0"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      {/* Headings */}
      <h2
        className="text-3xl flex flex-row justify-center sm:justify-start gap-2 font-extrabold md:text-5xl lg:text-7xl mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <span className="text-tertiary">Contact</span>
        <span className="dark:text-dark-text-main">Me</span>
      </h2>

      <div className="flex w-full justify-between flex-col lg:flex-row items-start gap-12">
        {/* Left Column: Contact Information */}
        <div
          className="w-full flex flex-col gap-8 lg:w-[46%]"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="flex flex-col items-center sm:items-start gap-3">
            <h3 className="text-2xl lg:text-3xl text-light-text dark:text-dark-text-main font-bold">
              Let&apos;s discuss your Project
            </h3>
            <p className="text-[1.05rem] md:text-lg text-light-text text-center md:text-left dark:text-dark-text-sub font-light leading-relaxed">
              Available for full-time opportunities (Remote or Onsite in
              Faisalabad) and freelance collaborations. Let&apos;s connect if
              you have a project or role that fits my expertise!
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col items-center lg:items-start gap-6 w-full">
            <div className="flex flex-col gap-4 w-full sm:max-w-md lg:max-w-none">
              {contactInfo.map((info, index) => (
                <div
                  key={info.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group flex items-center gap-4 px-5 py-4 rounded-xl w-full bg-slate-50 dark:bg-dark-bg/40 border border-transparent dark:border-slate-800/60 transition-all duration-200 ease-out hover:shadow-xl hover:bg-white dark:hover:bg-dark-bg"
                >
                  <span className="bg-slate-200 dark:bg-slate-800 text-tertiary dark:text-dark-text-main p-3 rounded-md text-xl transition-colors duration-200 group-hover:bg-tertiary group-hover:text-slate-100">
                    {ContactInfoMap[info.id]}
                  </span>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      {info.name}
                    </h4>
                    <p className="text-[0.95rem] font-medium text-light-text dark:text-dark-text-main mt-0.5">
                      {info.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links Widget Wrapper */}
            <div className="w-full flex justify-center lg:justify-start mt-1">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Email Contact Form */}
        <div className="w-full lg:w-[48%] bg-white dark:bg-dark-bg p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800">
          <p className="text-[1.05rem] md:text-lg text-light-text dark:text-dark-text-sub font-light mb-6 leading-relaxed">
            Let&apos;s connect if you want to discuss an upcoming project, a
            remote/onsite role, or just talk software engineering.
          </p>
          {/* Form Placeholder */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
