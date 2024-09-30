"use client";

// import { Form } from "../../Util/Form";
// import { InputForm } from "../../Util/InputForm";
// import { ButtonForm } from "../../Util/ButtonForm";
import FormData from "../../Util/FormData";
import { ButtonPage } from "../../Util/Button";
import { Download, Briefcase } from "lucide-react";
import { HOME_ICON_SIZE } from "../../Util/IconsStyle";
import React from "react";

// const BACKGROUND_BLACK = "bg-[#191616]";

const handleHireMe = () => {
  console.log("Hire me!!!");
};

const handleResume = () => {
  console.log("Hire Resumeee!!!");
};

export default function SendMeAnEmail() {
  return (
    <section
      id="TALK"
      className=" sm:h-screen flex flex-col items-center justify-center py-10"
    >
      <FormData />

      <div className="flex flex-col gap-2 md:flex-row items-center justify-center mt-10 ">
        <ButtonPage Onclick={handleHireMe} type="button">
          <p className=" text-[1.20em]">
            <code>Hire-me</code>
          </p>
          {React.createElement(Briefcase, {
            style: HOME_ICON_SIZE,
          })}
        </ButtonPage>
        <ButtonPage Onclick={handleResume} type="button">
          <p className=" text-[1.20em]">
            <code>Resume</code>
          </p>
          {React.createElement(Download, {
            style: HOME_ICON_SIZE,
            // cursor: "Pointer",
          })}
        </ButtonPage>
      </div>
    </section>
  );
}
