"use client";

import { FormData } from "../../Util/FormData";
import { InputForm } from "../../Util/InputForm";
import { ButtonForm } from "../../Util/ButtonForm";

export default function Talk_To_ME() {
  return (
    <section
      id="TALK"
      className="min-h-[120vh] md:h-[100vh] sm:h-screen p-5 flex   flex-col items-center "
    >
      <div
        className="
      text-[1em] text-center flex flex-col items-center mt-36"
      >
        <p className="text-[2em] font-bold flex gap-2 2xl:text-[3em]">
          Talk to me 💬
        </p>
      </div>

      <FormData name="talk to me">
        <InputForm id="name" type="text" label="Name" placeholder="ig. Ruth" />
        <InputForm id="email" label="Email" placeholder="ruth@myemail.com" />

        <ButtonForm label="Submit" type="button" />
      </FormData>
    </section>
  );
}
