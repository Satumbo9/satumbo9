// import { SOCIAL_MEDIAS } from "../../Data/SocialMedias";
// import CardImage from "../../Util/CardImage";
// import imagePlaceHolder from "../../Assets/Img/placeHolder1.jpg";
// import satumbo9Logo from "../../Img/logo/satumbo9-logo.png";
// import Link from "next/link";
import { FormData } from "../../Util/FormData";
import { InputForm } from "../../Util/InputForm";
import { ButtonForm } from "../../Util/ButtonForm";
export default function Talk_To_ME() {
  return (
    <section
      id="TALK"
      className="min-h-[100vh] max:h-[150v] sm:h-screen p-5 flex   flex-col items-center justify-center"
    >
      <div
        className="
      text-[1em] text-center flex flex-col items-center "
      >
        <p className="text-[2em] font-bold flex gap-2 2xl:text-[3em]">
          Talk to me
          <span>💬</span>
        </p>
      </div>

      <FormData>
        <InputForm
          className=""
          label="Name"
          id="name"
          type="text"
          placeHolder="ex. Paul"
          name="name"
          labelClass="text-[1.40em]"
          inputClass="h-[30px] p-4 text-black"
        />
        <InputForm
          className=""
          label="Email"
          id="email"
          type="email"
          placeHolder="john@example.com"
          name="email"
          labelClass="text-[1.40em]"
          inputClass="h-[30px] p-4 text-black"
        />
        <InputForm
          className=""
          label="Phone number"
          id="name"
          type="text"
          placeHolder="+1 (200) 000-000"
          name="name"
          labelClass="text-[1.40em]"
          inputClass="h-[30px] p-4 text-black"
        />

        <ButtonForm
          className="text-[1.40em] bg-[yellow] text-gray-600 p-4 font-bold"
          text="Submit"
          type="submit"
        />
      </FormData>
    </section>
  );
}
