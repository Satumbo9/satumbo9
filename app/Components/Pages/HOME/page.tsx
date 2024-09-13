import { BACKGROUND_INFO } from "@/app/Components/Data/Background";
import { EDUCATION_LIST } from "@/app/Components/Data/Education";
import Image from "next/image";
import satumboLogo from "../../Img/logo/satumbo9-logo.png";

export default function HomePage() {
  return (
    <section id="Home" className="h-[100vh] flex flex-col items-center">
      <div>
        <Image
          className="rounded-full"
          src={satumboLogo}
          width={600}
          height={600}
          alt="Satumbo9 logo"
        />
      </div>
      <div className="text-[24px] w-[666px] h-[68px] text-center">
        <p>
          Satumbo9 was born in the 90s and still alive making doing amazing art
          and web projects
        </p>
      </div>
    </section>
  );
}
